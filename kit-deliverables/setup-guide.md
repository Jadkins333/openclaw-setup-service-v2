# OpenClaw Setup Guide

> From zero to a working OpenClaw agent on your machine. No hand-holding, no fluff — just the steps.

---

## What OpenClaw Is

OpenClaw is an open-source AI agent framework. It gives you a single AI assistant that can:

- Run shell commands, read/write files, search codebases
- Connect to messaging platforms (Slack, Discord, Telegram, CLI)
- Maintain persistent memory across sessions
- Use tools (web browsing, code execution, APIs)
- Follow custom instructions (SOUL.md / personality files)

Think of it as a self-hosted AI operator that lives on your machine and works across channels.

---

## System Requirements

### Minimum

| Component | Requirement |
|-----------|-------------|
| OS | macOS 12+, Ubuntu 22.04+, or WSL2 on Windows |
| RAM | 8 GB (16 GB recommended) |
| Disk | 5 GB free for dependencies + models |
| Node.js | v20 or v22 (LTS) |
| Python | 3.11+ |
| Git | 2.30+ |

### API Keys You'll Need

- **LLM provider key** — at minimum one of: OpenAI, Anthropic, or OpenRouter API key
- **Optional:** Slack bot token, Discord bot token, Telegram bot token (for multi-channel)

---

## Step 1: Install Prerequisites

### macOS (Homebrew)

```bash
brew install node@22 python@3.12 git
```

### Ubuntu / Debian

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs python3 python3-pip git
```

### Verify

```bash
node --version    # should be 20.x or 22.x
python3 --version # should be 3.11+
git --version     # should be 2.30+
```

---

## Step 2: Clone and Install OpenClaw

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
npm install
```

If you hit permission errors on macOS:

```bash
sudo chown -R $(whoami) ~/.npm
npm install
```

### Verify the install

```bash
npx openclaw --version
```

You should see a version number. If you get "command not found," the install failed — check that `node_modules/.bin/` exists and has the `openclaw` binary.

---

## Step 3: Initial Configuration

OpenClaw uses a `config.yaml` file in your project root (or `~/.openclaw/config.yaml` for global config).

### Create your config

```bash
cp config.example.yaml config.yaml
```

### Set your LLM provider

Edit `config.yaml`:

```yaml
# Pick ONE provider to start
providers:
  anthropic:
    api_key: "sk-ant-your-key-here"
    default_model: "claude-sonnet-4-20250514"

  # OR
  openai:
    api_key: "sk-your-key-here"
    default_model: "gpt-4o"

  # OR use OpenRouter for access to multiple models
  openrouter:
    api_key: "sk-or-your-key-here"
    default_model: "anthropic/claude-sonnet-4"
```

### Pick your default provider

```yaml
default_provider: "anthropic"  # or "openai" or "openrouter"
```

**Recommendation:** Start with Anthropic (Claude Sonnet) or OpenRouter. Sonnet gives the best balance of speed, cost, and tool-use quality for agent workflows.

---

## Step 4: First Run (CLI Mode)

The simplest way to verify everything works:

```bash
npx openclaw chat
```

This drops you into an interactive CLI session. Try:

```
> what time is it?
> read the file ./config.yaml and tell me what provider I'm using
> list the files in this directory
```

If the agent responds with tool calls and correct answers, your setup is working.

### Common first-run failures

| Symptom | Fix |
|---------|-----|
| "API key invalid" | Double-check your key in config.yaml — no trailing spaces |
| "Model not found" | Check the model name matches your provider's naming convention |
| "Connection refused" | If using a local model, make sure the server is running first |
| Hangs with no output | Usually a network/proxy issue — try `curl https://api.anthropic.com` to verify connectivity |

---

## Step 5: Connect a Channel

### Slack

1. Create a Slack app at https://api.slack.com/apps
2. Add Bot Token Scopes: `chat:write`, `channels:history`, `channels:read`, `app_mentions:read`
3. Install to workspace and copy the Bot User OAuth Token
4. Add to config.yaml:

```yaml
channels:
  slack:
    bot_token: "xoxb-your-token"
    app_token: "xapp-your-token"  # for Socket Mode
    socket_mode: true
```

5. Enable Socket Mode in Slack app settings
6. Start: `npx openclaw serve --channel slack`

### Discord

1. Create an application at https://discord.com/developers/applications
2. Add a Bot, copy the token
3. Enable Message Content Intent in Bot settings
4. Add to config.yaml:

```yaml
channels:
  discord:
    bot_token: "your-discord-bot-token"
```

5. Invite the bot to your server with the OAuth2 URL generator (scopes: `bot`, permissions: `Send Messages`, `Read Message History`)
6. Start: `npx openclaw serve --channel discord`

### Telegram

1. Message @BotFather on Telegram, create a new bot
2. Copy the bot token
3. Add to config.yaml:

```yaml
channels:
  telegram:
    bot_token: "123456:ABC-your-token"
```

4. Start: `npx openclaw serve --channel telegram`

---

## Step 6: Routing and Permissions

### Basic routing rules

Control which channels can do what:

```yaml
routing:
  default:
    tools:
      - read_file
      - search_files
      - browser_navigate
    deny:
      - terminal  # block shell access by default

  trusted:
    match:
      channel: "slack"
      user: "U12345678"  # your Slack user ID
    tools: "all"  # full access for you
```

### Why this matters

Without routing rules, anyone who can message your bot can potentially run shell commands on your machine. Set deny-by-default and allowlist specific users/channels.

---

## Step 7: Memory and Persistence

OpenClaw persists data between sessions using:

- **Memory store** — key-value facts the agent remembers (`memory` tool)
- **Session history** — searchable past conversations
- **Skills** — reusable procedures the agent can learn

### Where data lives

```
~/.openclaw/
  config.yaml          # global config
  memory/              # persistent memory entries
  sessions/            # conversation history
  skills/              # learned procedures
  cache/               # temporary data
```

### Verify memory works

In a chat session:

```
> remember that my name is Jon
> [start a new session]
> what's my name?
```

If it remembers, persistence is working.

---

## Step 8: Guardrails

### Set a personality / instructions

Create a `SOUL.md` file in your project:

```markdown
# Who You Are

You are a helpful assistant for [your use case].

## Rules
- Never send messages to external services without asking first
- Keep responses concise
- When unsure, ask before acting
```

Reference it in config:

```yaml
soul: "./SOUL.md"
```

### Cost guardrails

```yaml
limits:
  max_tokens_per_turn: 4096
  max_tool_calls_per_turn: 20
  max_turns_per_session: 100
```

---

## Step 9: Verify Everything

Run through this checklist:

- [ ] `npx openclaw chat` works and agent responds
- [ ] Agent can read files on your machine
- [ ] Agent can search file contents
- [ ] Memory persists across sessions
- [ ] At least one channel (Slack/Discord/Telegram) is connected
- [ ] Routing rules restrict tool access appropriately
- [ ] SOUL.md is loaded and affects behavior

If all boxes are checked, you have a working OpenClaw setup.

---

## What's Next

- Check `workflow-ideas.md` for practical things to do with your setup
- See `troubleshooting-playbook.md` when something breaks
- Use `memory-workspace-template.md` to organize your agent's knowledge
- Review `starter-config-notes.md` for recommended defaults

---

*Built by operators who set this up the hard way so you don't have to.*
