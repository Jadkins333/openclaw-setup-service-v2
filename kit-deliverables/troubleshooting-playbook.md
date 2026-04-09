# OpenClaw Troubleshooting Playbook

> When it breaks — and it will — start here before you spiral.

---

## Installation Issues

### `npm install` fails with permission errors (macOS)

**Symptom:** EACCES errors, permission denied on ~/.npm

**Fix:**
```bash
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
npm install
```

### `npm install` fails with node-gyp / native module errors

**Symptom:** Compilation errors mentioning node-gyp, python, or C++ headers

**Fix:**
```bash
# macOS
xcode-select --install

# Ubuntu
sudo apt install -y build-essential python3-dev

# Then retry
rm -rf node_modules package-lock.json
npm install
```

### Wrong Node.js version

**Symptom:** Syntax errors, unexpected token errors, or "engine" warnings

**Fix:**
```bash
# Check version
node --version

# If below 20, upgrade:
# macOS
brew install node@22

# Ubuntu
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

# Or use nvm
nvm install 22
nvm use 22
```

---

## API / Provider Issues

### "API key invalid" or 401 errors

**Causes:**
1. Trailing whitespace or newline in the key (copy-paste issue)
2. Key is from a different account/org
3. Key has been revoked

**Fix:**
```bash
# Check for hidden characters
cat -A config.yaml | grep api_key
# Should not show trailing ^M or spaces after the key

# Test the key directly
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: YOUR_KEY" \
  -H "content-type: application/json" \
  -H "anthropic-version: 2023-06-01" \
  -d '{"model":"claude-sonnet-4-20250514","max_tokens":10,"messages":[{"role":"user","content":"hi"}]}'
```

### "Model not found" or 404 on model endpoint

**Causes:**
1. Model name doesn't match provider's format
2. Model requires a different API tier

**Fix:** Check exact model names:
- Anthropic: `claude-sonnet-4-20250514`, `claude-haiku-4-20250414`, `claude-opus-4-20250514`
- OpenAI: `gpt-4o`, `gpt-4o-mini`, `o1-preview`
- OpenRouter: `anthropic/claude-sonnet-4`, `openai/gpt-4o`

### Rate limiting / 429 errors

**Symptom:** "Too many requests" or long pauses

**Fix:**
- Reduce `max_tool_calls_per_turn` in config
- Add a rate limit delay in config if available
- Upgrade API tier with your provider
- Switch to OpenRouter which pools across providers

---

## Channel Connection Issues

### Slack bot doesn't respond

**Check in order:**
1. Is Socket Mode enabled in the Slack app settings?
2. Does the bot have the right scopes? (chat:write, channels:history, channels:read, app_mentions:read)
3. Is the bot actually added to the channel? (Invite it with /invite @botname)
4. Are both `bot_token` and `app_token` in config.yaml?
5. Check the terminal output for connection errors

**Common gotcha:** The `app_token` (starts with `xapp-`) is different from the `bot_token` (starts with `xoxb-`). You need both for Socket Mode.

### Discord bot is "online" but doesn't respond

**Check in order:**
1. Is Message Content Intent enabled? (Bot settings → Privileged Gateway Intents)
2. Did you invite with the right permissions? (Send Messages + Read Message History)
3. Is the bot in the specific channel? Some server configs restrict bot access
4. Check terminal output for "Message content not received" warnings

**Common gotcha:** Discord requires the Message Content Intent to be explicitly enabled. Without it, the bot receives events but message content is empty.

### Telegram bot doesn't respond

**Check in order:**
1. Send `/start` to the bot first
2. Make sure no other instance of the bot is running (Telegram only allows one active polling connection)
3. Check if the token is correct: `curl https://api.telegram.org/bot<TOKEN>/getMe`
4. Check terminal output for polling errors

**Common gotcha:** If you've been testing with webhooks and switch to polling (or vice versa), you need to clear the webhook first: `curl https://api.telegram.org/bot<TOKEN>/deleteWebhook`

---

## Routing and Permission Issues

### Agent can't use a tool it should have access to

**Causes:**
1. Routing rules are too restrictive
2. The tool name in the deny/allow list doesn't match the actual tool name
3. Channel or user matching isn't right

**Debug:**
```yaml
# Temporarily enable verbose logging
logging:
  level: debug
  show_routing: true
```

Then retry and check which routing rule is matching.

### Agent has too much access

**Fix:** Set deny-by-default:
```yaml
routing:
  default:
    tools:
      - read_file
      - search_files
    deny:
      - terminal
      - write_file
      - patch
```

Then explicitly grant more tools to trusted contexts.

---

## Memory Issues

### Agent doesn't remember things between sessions

**Check:**
1. Does `~/.openclaw/memory/` exist and have files?
2. Is the memory directory writable?
3. Are you starting a truly new session or just a new turn?

**Fix:**
```bash
# Check permissions
ls -la ~/.openclaw/memory/

# If empty, the memory tool might not be saving
# Try explicitly: "save to memory that my timezone is EST"
# Then check the directory again
```

### Memory is getting too large / slow

**Fix:**
- Review memory entries: `ls ~/.openclaw/memory/`
- Delete stale entries manually
- The agent can also manage its own memory — ask it to "clean up outdated memory entries"

---

## Performance Issues

### Agent is very slow

**Causes:**
1. Model is too large for your API tier (e.g., opus vs sonnet)
2. Too many tool calls per turn
3. Context window is packed with old conversation

**Fix:**
- Switch to a faster model (sonnet > opus for most tasks)
- Reduce max_turns_per_session to keep context smaller
- Start fresh sessions more often

### Agent uses too many tokens / costs too much

**Fix:**
```yaml
limits:
  max_tokens_per_turn: 2048    # cap per response
  max_tool_calls_per_turn: 10  # cap tool calls
  max_turns_per_session: 50    # cap session length
```

---

## Nuclear Options

### Full reset (keep config, wipe state)

```bash
rm -rf ~/.openclaw/sessions/
rm -rf ~/.openclaw/cache/
# Keep memory/ and config.yaml
```

### Complete reinstall

```bash
rm -rf node_modules package-lock.json
rm -rf ~/.openclaw/cache/
npm install
```

### Start from absolute zero

```bash
rm -rf ~/.openclaw/
rm -rf node_modules package-lock.json
npm install
cp config.example.yaml config.yaml
# Re-add your API key and start over
```

---

## Still Stuck?

1. Check the GitHub Issues: https://github.com/openclaw/openclaw/issues
2. Search for your exact error message
3. If it's a new issue, file it with: OS, Node version, exact error, and steps to reproduce

*Most setup problems are one of: wrong Node version, bad API key format, or missing channel permissions. Start there.*
