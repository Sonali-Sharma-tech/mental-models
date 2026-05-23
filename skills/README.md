# Skills

Claude Code skills built alongside this project.

---

## `mental-model` — Multi-Lens Problem Analyzer

Apply 5-7 mental models from a curated set of 32 to any stuck problem — architecture decision, debugging, team workflow, design tradeoff, life decision. Outputs structured analysis + 2-3 concrete solution paths.

**Tested on iteration 1** (3 evals, 6 runs):
- With skill: **100%** assertion pass rate
- Baseline (no skill): 56.7%
- **Delta: +43 percentage points**

See `mental-model/evals/evals.json` for the test prompts and `mental-model/models-index.md` for the full model catalog.

---

### Install — Option 1 (easiest)

Drop the prebuilt bundle straight into your Claude skills directory:

```bash
# Download mental-model.skill from this repo, then:
unzip mental-model.skill -d ~/.claude/skills/
```

Restart Claude Code. The skill is now live.

### Install — Option 2 (from source)

```bash
git clone https://github.com/Sonali-Sharma-tech/mental-models.git
cp -r mental-models/skills/mental-model ~/.claude/skills/
```

---

### Usage

Triggers automatically when you say:
- *"I'm stuck on X"*
- *"apply mental models to X"*
- *"what mental models help here?"*
- *"think through this with multiple lenses"*

Or invoke explicitly:
```
/mental-model <your problem>
```

---

### Live example

```
> /mental-model "Stuck on Instagram feed system design — push doesn't 
   scale for celebrities (600M followers), pull doesn't scale for reads 
   (5B/day). Going in circles."

🧠 First Principles: A feed = 3 ops (get, sort, deliver). Push and pull
   differ ONLY in WHEN you do step 1...

⏰ Pareto: You're treating Ronaldo (600M) and a normal user (200) as
   ONE problem. They're TWO problems with the same name...

🧠 Inversion: How would you GUARANTEE failure? Use ONE approach for
   everyone. The binary IS the failure mode...

🪤 Confirmation Bias: Articles invented "push vs pull" as pedagogy.
   You absorbed the simplification AS the problem...

[+ Second-Order, Antifragility, Reversibility]

—— Synthesis ——
Path A: Hybrid with celebrity threshold X
Path B: Tiered architecture by user activity
Path C: Reframe the binary in the interview itself ⭐

Highest-leverage move: Path C beats Path A. The interviewer is testing
if you SPOT THE BINARY AS A TRAP.
```

---

### What's in this skill

| File | Purpose |
|---|---|
| `SKILL.md` | Definition + when-to-trigger + process + output template |
| `models-index.md` | The 32 mental models indexed with core question + domain tags |
| `evals/evals.json` | Test prompts used to validate the skill |
| `mental-model.skill` | Prebuilt distribution bundle |
