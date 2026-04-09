# OpenClaw Troubleshooting Playbook

## Approval Hell
### Symptom
Every useful exec call asks for `/approve`.

### Fix direction
- decide if the machine is trusted
- set exec policy accordingly
- make sure host approval policy is not stricter than main config

## Pairing Required
### Symptom
Exec or tool calls fail with pairing/auth style errors.

### Likely causes
- node lost pairing
- gateway restarted
- device approval stale
- auth state changed

## Browser Failures
### Symptom
Authenticated browser automation fails.

### Likely causes
- signed-in browser session not attachable
- managed profile not started
- browser tool exposed but runtime not ready

## Gateway Weirdness
### Symptom
Things worked, then stopped after restart.

### What to check
- gateway status
- runtime health
- plugin readiness
- whether the failing tool needs additional warm-up time

## Deploy Mismatch
### Symptom
App works locally but chosen host is wrong.

### Rule of thumb
- simple Next.js app: use Vercel first
- do not force GitHub Pages unless the app is intentionally static-exported
