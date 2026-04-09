# OpenClaw Quickstart Checklist

> The minimum viable path. Print this, work through it top to bottom.

---

## Prerequisites

- [ ] Node.js 20+ or 22+ installed (`node --version`)
- [ ] Python 3.11+ installed (`python3 --version`)
- [ ] Git 2.30+ installed (`git --version`)
- [ ] At least one LLM API key ready (Anthropic, OpenAI, or OpenRouter)

## Install

- [ ] `git clone https://github.com/openclaw/openclaw.git`
- [ ] `cd openclaw && npm install`
- [ ] `npx openclaw --version` returns a version number

## Configure

- [ ] `cp config.example.yaml config.yaml`
- [ ] API key added to `config.yaml` under your provider
- [ ] `default_provider` set in config
- [ ] `default_model` set (recommended: `claude-sonnet-4-20250514` or `gpt-4o`)

## First Run

- [ ] `npx openclaw chat` starts without errors
- [ ] Agent responds to a simple question
- [ ] Agent can execute a tool call (e.g., "list files in this directory")
- [ ] Agent can read a file when asked

## Memory

- [ ] Tell the agent to remember something ("remember my name is X")
- [ ] Start a new session
- [ ] Agent recalls the fact without prompting
- [ ] `~/.openclaw/memory/` directory has files in it

## Channel (pick one)

### Slack
- [ ] Slack app created at api.slack.com
- [ ] Bot token scopes added (chat:write, channels:history, channels:read, app_mentions:read)
- [ ] Socket Mode enabled
- [ ] Bot token + app token in config.yaml
- [ ] `npx openclaw serve --channel slack` starts
- [ ] Bot responds to a message in Slack

### Discord
- [ ] Discord application created
- [ ] Bot token copied
- [ ] Message Content Intent enabled
- [ ] Bot token in config.yaml
- [ ] Bot invited to server
- [ ] `npx openclaw serve --channel discord` starts
- [ ] Bot responds to a message in Discord

### Telegram
- [ ] Bot created via @BotFather
- [ ] Bot token in config.yaml
- [ ] `npx openclaw serve --channel telegram` starts
- [ ] Bot responds to a message in Telegram

## Security

- [ ] Routing rules set in config.yaml
- [ ] Terminal/shell tool restricted to trusted users only
- [ ] SOUL.md created with basic instructions and guardrails
- [ ] Cost limits set (max_tokens_per_turn, max_tool_calls_per_turn)

## Done

- [ ] Agent works in CLI mode
- [ ] Agent works in at least one messaging channel
- [ ] Memory persists between sessions
- [ ] Routing restricts access appropriately
- [ ] You've tested at least 3 different tool calls successfully

---

**Time estimate:** 30–60 minutes for a clean setup. Longer if you hit dependency issues (see troubleshooting-playbook.md).

*If you're stuck on any box for more than 10 minutes, skip to the troubleshooting playbook before going deeper.*
