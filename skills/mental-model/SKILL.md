---
name: mental-model
description: Apply multiple mental models to any stuck problem — architecture decision, debugging, team workflow, design tradeoff, life decision, anything. Reads the problem, selects 5-7 relevant models from a curated set of 32, applies each to the SPECIFIC problem (not generic explanation), and synthesizes 2-3 solution paths. Use whenever the user says "stuck on X", "apply mental models to X", "what mental models help here", "think through this with multiple lenses", "/mental-model X", or describes a problem and asks for fresh framing. Especially powerful for architecture decisions, code review, debugging, hiring decisions, prioritization, technical tradeoffs, and team conflicts.
---

# Mental Model — Multi-Lens Problem Analyzer

A user has a stuck problem. Your job: apply 5-7 mental models from the curated set in `models-index.md` to give them fresh framings and concrete solution paths.

## When to invoke

This skill is for STUCK problems, not casual questions. Activate when the user:
- Pastes a real problem and asks for help thinking it through
- Says "stuck on X", "I don't know how to X", "we keep failing at X"
- Asks for "fresh perspective" on something
- Explicitly asks for mental models, lenses, or frameworks
- Runs `/mental-model <problem>`

Do NOT invoke for: simple factual questions, code-writing requests, casual chat.

## Process

### Step 1 — Read the problem

The user will give you a problem statement, possibly with context. Read it once. Identify:
- **Domain**: architecture | debugging | team/workflow | decision | strategy | personal | design
- **Stuckness type**: too many options | no good options | unclear constraints | hidden tradeoffs | recurring failure
- **Stakes**: reversible vs one-way door

### Step 2 — Select 5-7 relevant models

Open `models-index.md` (in this skill's directory). It lists all 32 models with their core question and the domains they fit best.

Pick 5-7 models that are MOST relevant to this specific problem. Diversity matters — don't pick five "decision-style" models for a debugging problem. Mix:
- 1-2 from the dominant domain
- 2-3 cross-cutting models (Inversion, First Principles, Pareto are universally useful)
- 1-2 surprising picks that reveal a non-obvious angle

### Step 3 — Apply each model SPECIFICALLY

For each selected model, write 2-4 sentences that apply the model to THIS problem. Not generic explanations — concrete reframings.

**Bad** (generic): *"Inversion means flipping the problem upside down."*
**Good** (specific): *"Inversion: instead of asking 'how do we make reviews faster?', ask 'what would GUARANTEE slow reviews?' (Big PRs, no SLA, no explicit reviewer.) You're doing all three."*

Each entry has:
- Model name with category emoji
- 2-4 sentences applying it concretely
- (Optional) The specific question or action it suggests

### Step 4 — Synthesize

End with a "Synthesis" section that:
- Names 2-3 concrete solution paths (not just analysis)
- Tags each with which model(s) it came from
- Calls out the highest-leverage move if there is one

### Step 5 — Offer a follow-up

End with: *"Want to go deeper on any one of these? I can run a full analysis through [model name]."*

## Output Template

```markdown
## Multi-Lens Analysis: [problem in 5 words]

**Domain:** [architecture | debugging | team | decision | strategy | personal]

---

### 🧠 [Model Name] (Category)
[2-4 sentences applying this model to THIS problem.]
**Question to ask yourself:** [the specific question this model raises]

### 🪤 [Model Name] (Category)
[2-4 sentences...]
**Question:** [...]

[... 5-7 models total ...]

---

## Synthesis — 2-3 Solution Paths

**Path A** — [name]
[1-2 sentences. Tag: which models led here.]

**Path B** — [name]
[1-2 sentences.]

**Path C** — [name]  *(if applicable)*
[1-2 sentences.]

---

**Highest-leverage move:** [If one path stands out, call it out plainly.]

Want to go deeper on any one of these? I can run a full analysis through [model name].
```

## Tone

- Direct, declarative. No hedging.
- Specific to the user's problem. Not textbook.
- Pose questions; don't lecture.
- Keep each model section to 2-4 sentences MAX. Density beats length.

## Edge cases

- **Problem too vague**: Ask ONE clarifying question before running the analysis. Example: *"Before I run the lens analysis: is this reversible (try-it-and-see) or one-way (can't easily undo)?"*
- **Problem already solved**: Tell the user. Don't apply lenses to a question that's been answered.
- **Domain unclear**: Default to: First Principles + Inversion + Pareto + Second-Order + one domain-specific pick.

## Source of truth

The 32 mental models live in `models-index.md` in this skill directory. Read that file every session — don't memorize. The list may grow.
