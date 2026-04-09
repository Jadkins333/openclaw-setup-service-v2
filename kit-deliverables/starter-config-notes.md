# OpenClaw Starter Config Notes

> What to set, what to change, and what to leave alone.

---

## The Config File

OpenClaw reads from `config.yaml` in this order:
1. `./config.yaml` (project-local, highest priority)
2. `~/.openclaw/config.yaml` (global fallback)

Project-local overrides global. Use project-local for per-project setups, global for your default agent.

---

## Recommended Defaults

### Provider Settings

```yaml
# Best balance of speed, quality, and cost
default_provider: "anthropic"

providers:
  anthropic:
    api_key: "${ANTHROPIC_API_KEY}"  # use env var, don't hardcode
    default_model: "claude-sonnet-4-20250514"
```

**Why Sonnet?** It's the sweet spot for agent work. Opus is smarter but 5x more expensive and slower. Haiku is cheap but makes more tool-use mistakes. Start with Sonnet and only upgrade to Opus for complex reasoning tasks.

**Pro tip:** Use environment variables for API keys instead of hardcoding:
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

### Cost Limits (set these immediately)

```yaml
limits:
  max_tokens_per_turn: 4096      # prevents runaway responses
  max_tool_calls_per_turn: 20    # prevents tool-call loops
  max_turns_per_session: 100     # caps session length
```

These are guardrails. An uncapped agent on Opus can burn $20+ in a single long session. Set limits, then raise them if you need to.

### Routing (deny-by-default)

```yaml
routing:
  default:
    tools:
      - read_file
      - search_files
      - browser_navigate
      - browser_snapshot
      - vision_analyze
    deny:
      - terminal
      - write_file
      - patch

  owner:
    match:
      user: "your-user-id"
    tools: "all"
```

**Why:** The default should be read-only. Only give write/execute access to users you trust completely.

---

## Environment Variables Reference

| Variable | Purpose | Required? |
|----------|---------|-----------|
| `ANTHROPIC_API_KEY` | Anthropic API key | If using Anthropic |
| `OPENAI_API_KEY` | OpenAI API key | If using OpenAI |
| `OPENROUTER_API_KEY` | OpenRouter API key | If using OpenRouter |
| `SLACK_BOT_TOKEN` | Slack bot OAuth token | If using Slack |
| `SLACK_APP_TOKEN` | Slack app-level token | If using Slack Socket Mode |
| `DISCORD_BOT_TOKEN` | Discord bot token | If using Discord |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token | If using Telegram |
| `OPENCLAW_HOME` | Override config directory | No (default: ~/.openclaw) |

---

## What to Change First

### 1. Model selection
Pick the right model for your budget:

| Model | Speed | Quality | Cost | Best For |
|-------|-------|---------|------|----------|
| Claude Haiku | Fast | Good | $0.25/1M input | Simple Q&A, fast tasks |
| Claude Sonnet | Medium | Great | $3/1M input | General agent work (recommended) |
| Claude Opus | Slow | Best | $15/1M input | Complex reasoning, code review |
| GPT-4o | Medium | Great | $2.50/1M input | Alternative to Sonnet |
| GPT-4o-mini | Fast | Good | $0.15/1M input | Budget alternative to Haiku |

### 2. SOUL.md personality
Create this file — it's the single biggest lever for agent behavior:

```markdown
# Who You Are
You are [role] for [context].

## Rules
- [What to always do]
- [What to never do]
- [How to handle uncertainty]

## Style
- [Communication preferences]
```

### 3. Memory directory structure
Decide early if you want:
- Flat memory (default) — simple, works for personal use
- Structured memory — better for teams, projects with multiple contexts

### 4. Logging level
Start with `info` during setup, switch to `warn` once stable:

```yaml
logging:
  level: info      # debug | info | warn | error
  file: true       # write logs to ~/.openclaw/logs/
```

---

## What to Leave Alone

- **Session storage format** — the default works, changing it can corrupt history
- **Tool definitions** — don't modify built-in tool schemas unless you really know what you're doing
- **Cache settings** — defaults are tuned for typical usage
- **Internal routing logic** — use the routing config, don't patch the routing engine

---

## Multi-Provider Setup

You can configure multiple providers and switch between them:

```yaml
providers:
  anthropic:
    api_key: "${ANTHROPIC_API_KEY}"
    default_model: "claude-sonnet-4-20250514"

  openai:
    api_key: "${OPENAI_API_KEY}"
    default_model: "gpt-4o"

  openrouter:
    api_key: "${OPENROUTER_API_KEY}"
    default_model: "anthropic/claude-sonnet-4"

default_provider: "anthropic"
```

Then switch on the fly:
```
> use openai for this conversation
> switch to claude opus for this task
```

**Why multi-provider?** Different models have different strengths. Use Sonnet for general work, Opus for hard problems, GPT-4o as a fallback if Anthropic has an outage.

---

## Production Checklist

Before using your setup for real work:

- [ ] API keys are in environment variables, not hardcoded in config
- [ ] Cost limits are set
- [ ] Routing denies terminal/write by default
- [ ] SOUL.md is created and referenced
- [ ] Logging is enabled
- [ ] You've tested each channel you plan to use
- [ ] Memory persistence is verified
- [ ] You have a backup of your config (it's just a YAML file)

---

*Config is the foundation. Get this right once and you won't fight it later.*
