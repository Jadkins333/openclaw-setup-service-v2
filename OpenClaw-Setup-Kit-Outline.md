# OpenClaw Setup Kit

## Version 1 Bundle

### Files
- `OpenClaw Setup Guide.pdf` *(to be exported from markdown later)*
- `quickstart-checklist.md`
- `troubleshooting-playbook.md`
- `starter-config-notes.md`
- `workflow-ideas.md`
- `memory-workspace-template.md`

## Main Guide Table of Contents

### 1. What this kit is for
- who should buy it
- who should not
- what “working” means in practice

### 2. The shortest path to a usable setup
- machine + environment basics
- gateway up
- agent responding
- one tool path working
- one useful workflow working

### 3. Core concepts that trip people up
- gateway vs node vs agent
- tools vs skills vs config
- local workspace vs external actions
- session behavior and memory expectations

### 4. First-time setup path
- install / verify runtime
- workspace selection
- basic config sanity check
- start gateway
- confirm agent is responding
- verify one shell tool and one web path

### 5. Permission and safety defaults
- when approvals happen
- trusted-machine settings
- how to avoid approval hell without going reckless
- what should still require human review

### 6. Pairing and connection fixes
- pairing required errors
- gateway not reachable
- local node issues
- mobile / remote connection gotchas

### 7. Browser + web automation basics
- when to use browser vs shell
- isolated browser profile vs user profile
- authenticated-site workflow
- common attach/session failures

### 8. Memory and workspace basics
- daily memory notes
- long-term memory vs daily logs
- what to write down
- simple workspace conventions

### 9. First useful workflows
- ship a small page
- inspect a repo
- publish a lightweight project
- do one admin task end-to-end

### 10. What to do after setup works
- snapshot your config
- record your known-good path
- save common commands
- identify first revenue task or real workflow

## Quickstart Checklist
- OpenClaw installed
- Gateway starts cleanly
- Agent responds in the intended channel
- One file read works
- One shell command works
- Browser capability verified if needed
- Memory file location confirmed
- First useful workflow completed

## Troubleshooting Playbook Sections

### Approval hell
- why it happens
- how to reduce prompts safely
- trusted-machine settings

### Pairing required
- what it means
- likely causes
- what to check first

### Gateway issues
- gateway not running
- gateway restarted but tools failed
- bind / port mismatch clues

### Browser failures
- profile not available
- DevToolsActivePort issues
- signed-in browser not attachable
- managed profile workaround

### Build / deploy snags
- app builds locally but not in host
- static vs Next.js deployment mismatch
- GitHub Pages vs Vercel decision rule

## High-Value Templates / Examples

### 1. Trusted machine exec config example
A minimal safe example and a no-prompt trusted-machine example.

### 2. Simple workspace structure template
How to organize memory, notes, and active project files.

### 3. Daily memory note template
What to log so future-you is not blind next session.

### 4. Launch checklist template
A reusable checklist for pushing a simple project live.

### 5. First workflow template
A concrete end-to-end pattern: inspect project, edit, build, deploy, verify.

## Product Notes
- Keep version 1 practical, not bloated.
- Solve the first 80 percent of setup pain.
- Prioritize clarity over completeness.
- The buyer should feel: “I can actually get this working now.”
