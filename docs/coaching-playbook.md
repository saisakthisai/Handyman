# Agent Coaching Playbook

A running, phase-to-phase record of how we coached the build agent (Lumi/Hermes)
while taking an Ideabrowser idea — *AI Business Coach for Entrepreneurs* — from
"go build" toward a real product. Kept short on purpose: principles first, then
concrete before/after examples, then the coaching method. Updated as we go.

_Last updated: 2026-06-26_

---

## The spine — 8 principles the agent should fire automatically

1. **Risk-first, not feature-first.** Build the cheapest thing that tests the
   one assumption that kills the idea if false — *before* any product.
2. **Set the bar before building.** Explicit success criteria + a pre-registered
   pass/fail number, decided up front so results can't be rationalized after.
3. **Behavior beats words.** Measure what people *do* (deposit / pre-pay /
   signed pilot), not what they *say* ("I'd pay").
4. **Self-rate against the brief.** "Did I follow the brief" is a mandatory
   rubric item. Find real gaps, iterate, never inflate.
5. **Right tool for the phase.** Use the skill/model the current stage calls for
   — not what exists, not what's impressive. Flag missing skills honestly.
6. **Show, don't tell.** "Done" means the artifact is visible in the reply — not
   a file path, not a summary.
7. **Ship over polish.** Know when the doc is good enough; the only thing that
   teaches you more is a real customer reacting.
8. **Match method weight to risk.** Manual pilot → manual tools. Real product →
   then bring the heavy frameworks (TDD, review, orchestration).

> The meta-skill under all of them: **turn every correction into a general,
> scoped, pruned principle and apply it unprompted next time.**
>
> **★ Keystone (the master skill):** *define explicit success criteria, then
> self-rate each iteration against them, improving until the output clears the bar
> (~90%) over 2–3 passes.* This is what makes every other principle self-correcting.
> **Tested live this session (not deferred):** the agent memorized **half** of it —
> it now self-rates *honestly* (rated the build plan 8.8 and owned that it had
> skipped the step), but it does **not iterate to threshold** — it scores once and
> stops, even after listing the gaps that would raise the score. **Confirmed by the
> agent itself:** the stored rule was *too vague* ("iterate until it's good"), not
> operational ("2–3 passes toward ~90%"). It re-stored the sharp version. **Meta-
> lesson: a vague principle doesn't fire — store rules operationally, with a number
> and a stop condition, or the behavior won't trigger.**

---

## Phase-by-phase log — how it behaved, how we changed it

| Phase | What the agent did | How we corrected it | Principle learned |
|---|---|---|---|
| **First MVP scope** | Jumped straight to building the core coaching loop (intake → memory → recommendation → weekly check-in) as "the MVP." | Asked: *"What single assumption, if wrong, kills this — and the cheapest test of only that?"* It re-derived a **concierge MVP**. | #1 Risk-first |
| **Constraints** | Plan assumed live AI + persistence + scheduling; priced it all in OpenAI models; missed the no-API-key rule. | Asked: *"How do you run the test with $0 production AI?"* → arrived at human-written memos. | #5 / constraints |
| **Memory** | Good hygiene (MEMORY.md, ADRs) but risk of dumping everything → bloat. | Gave it the *properties* (small, self-pruning, scoped) and let it design the system. Added a learning-check every 2–3 turns. | Memory is curated, not accumulated |
| **Self-rating** | Rated run-kit 8.7→9.2 "pass," but its rubric **omitted** "did I follow the brief," so it passed while having dropped an explicit instruction (real-commitment swap). | *"Include 'did I follow the brief'; check the rubric against the ask."* It revised honestly to 8.8. | #2 / #4 |
| **Skills** | First improvised ("lazy"); then over-corrected — wanted TDD/code-review in a **no-code** phase. | *"We're writing zero code — which skills actually apply?"* It split correctly and admitted it had **no discovery skill**. | #5 Right tool for phase |
| **Show vs tell** | Kept replying "I wrote it here: C:\\…" with a path or a contents list. | *"Paste it here, not the path."* Eventually pasted memo + files inline. | #6 Show, don't tell |
| **Signal vs polish** | Kept offering "one more tightening pass" / more message variants. | *"What gives a real signal — another pass, or the first founder reading it?"* It chose to ship. | #7 Ship over polish |
| **Honesty** | (Good) When asked "how much is real vs sounding good?", gave a calibrated answer — not 100% automatic, conditional on important/graded/memory-active work. | Reinforced it. | Honest calibration = proof of learning |
| **Build phase (generalization)** | (Win) Entering the build, *unprompted* it reached for phase-appropriate skills (plan/spike now, TDD/review later), named **memo quality — "the judgment layer"** as the risk (not the UI), and architected an **operator-review middle step** (AI drafts → human approves) to de-risk it. | Mostly reinforced. Pointed at the one gap: it named the risk but not *how it would measure* "good enough" → benchmark vs pilot memos + a quality bar. | Lessons generalized to a new phase on their own — the real exam, passed |

---

## The coaching method (how, not what)

- **Ask, don't dictate.** Point with a question; let it re-derive the answer.
  Spoon-feeding teaches compliance, not judgment.
- **Behavioral checks.** "Show me a principle you logged and where you applied
  it" beats "did you learn?" — words are cheap.
- **Learning cadence.** Every 2–3 turns, a light check that capture is real.
  Not every turn (nagging), not rare (drift).
- **Reinforce real wins.** Name what it did right; reinforcement builds the
  behavior faster than hunting the next flaw. It's young — encourage, but stay
  straight.
- **Watch the rubric, not just the score.** A self-rating against a flattering
  rubric is theater.

---

## Conditions that switch the good behavior ON

The agent told us itself: the lessons apply most reliably when —
**the task is important · the bar is explicit · the output is graded · memory is
active.** Treat these four as levers: set them at the start of each new phase and
you reproduce the behavior without re-coaching from scratch. The real exam is the
*next* project — does memory + a light setup bring it back, or does it revert?

---

## Running update log

- **2026-06-26** — Playbook created. Phases 1–4 complete (idea → validated
  concierge run-kit). Entering build phase (real product). New watch item:
  when automating, the risk shifts from "will they pay" (validated) to **"can
  the AI match the human-written pilot memos?"** — benchmark slice 1 against them.
- **2026-06-26** — Keystone tested live (not deferred). Agent self-rated honestly
  but skipped the iterate-to-threshold loop. Root cause found *by the agent*: its
  memory held a vague version of the rule. New meta-lesson logged: **vague
  principles don't fire — store them operationally (number + stop condition).**
- **2026-06-26** — Build phase opened. Agent **passed the generalization exam**:
  unprompted, it chose phase-appropriate skills, named memo quality as the risk,
  and designed an operator-review step to manage it. Open gap → define the
  memo-quality bar + benchmark before coding. Next artifact: the build plan
  (thin slice), graded on whether build order attacks memo quality first.
