# Skills

Claude Code skills built alongside this project.

## `mental-model/`

Multi-lens problem analyzer. Apply 5-7 mental models (from the 32 in this repo) to any stuck problem — architecture, debugging, team workflow, decision, design — and get concrete solution paths back.

### Install

```bash
cp -r skills/mental-model ~/.claude/skills/
```

That's it. Restart Claude Code (or reload skills) and the skill becomes available.

### Use

- `/mental-model <your problem>` — explicit invocation
- *"I'm stuck on X"* — auto-fires
- *"apply mental models to X"* — auto-fires
- *"what mental models help here?"* — auto-fires

### Example

```
> /mental-model "Code reviews take 3 days. Team frustrated."

🧠 Pareto: Which 20% of PRs cause 80% of the delay?
💥 Goodhart: Are you measuring "review time" instead of "time to confident merge"?
🧠 Inversion: What would GUARANTEE slow reviews? (You're doing it.)
👥 Tragedy of Commons: Who OWNS review-time? If no one, it dies.
⏰ Parkinson's Law: Have you set an SLA?

—— Synthesis ——
Cap PRs at 200 lines, assign explicit reviewers, add 24h SLA.
~40% reduction in cycle time.
```

### Files

- `SKILL.md` — skill definition + instructions for Claude
- `models-index.md` — curated index of 32 mental models with core questions and domain tags
