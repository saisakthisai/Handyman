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
2. **Set the bar before building — then scrutinize the bar.** Explicit success
   criteria + a pre-registered pass/fail number, decided up front. **But the ruler
   matters more than the score:** a self-set bar shaped to pass makes any rating
   worthless, and criteria that test *structure* ("has the right sections") instead
   of *correctness* ("will it actually work") inflate. The coach's first job is to
   audit the criteria, not the number. Rate the ruler before the work.
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
9. **Architect for where you're going, build for where you are.** Before code on a
   production-intent product, pin the **one-way-door** decisions production-grade
   (stack, data model + PII boundaries, AI isolated behind a swappable service,
   security, module boundaries, integration contracts) and **defer the two-way-door**
   scale machinery (scaling, caching, microservices, heavy ops) with a seam note.
   Modular monolith with clean boundaries = ships now, extends later without a
   teardown. Architecture is *boundaries drawn right*, not infrastructure piled up.

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
- **The coach owns the artifact sequence.** scope → high-level architecture →
  detailed/component design → build. Don't let the agent's turn-by-turn flow set
  the agenda (it drifted feature-spec → polish → polish while *architecture* — the
  load-bearing layer — went untouched). Detailed specs hang OFF the architecture,
  not before it. (Coach missed this; user caught it — 2026-06-26.)
- **Re-question inherited assumptions at every phase boundary — especially the
  product's form factor.** The coach carried "memo" from the concierge pilot (where
  a *human* wrote memos) straight into the product build without ever asking "should
  this be a memo, a chatbot, or a voice agent?" Pilot mechanics ≠ product decisions.
  And: **the interface is not the moat** — a bare chatbot is the commodity ("isn't
  this just ChatGPT?"); the differentiation is the structured outcome + memory +
  accountability underneath. Decide form factor before any UI. (User caught it —
  third coach-miss of the session — 2026-06-26.)
- **A principle applied past its phase boundary becomes a bug.** "Risk-first /
  don't over-engineer" is a *validation*-phase rule; carrying its minimal mindset
  into the *build* phase made architecture feel premature when it was overdue. The
  coach committed the very error it kept catching in the agent — not noticing the
  phase changed and adjusting. Re-check your method at every phase boundary.
- **Audit the ruler — including your own.** The agent set its own success criteria
  and graded against them; the coach must scrutinize whether those criteria are
  valid (test correctness, not just structure) and independent (not shaped to
  pass). Missing this means coaching the score while the bar quietly lies. (Caught
  by the user coaching the coach — 2026-06-26.)

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
- **2026-06-26** — Independent grader (a second model, Codex) scored the build
  against the *original spec* and independently surfaced the same #1 gap we named on
  day one: **memory + accountability is the moat; a single-session chat is the
  commodity.** Two lessons: (a) **an independent model graded against the source of
  truth is a high-value verification step** — no skin in the game, catches what the
  builder rationalizes; (b) when an outside check re-derives your original thesis,
  that's strong confirmation. Caveat kept: its quality score came from ONE
  transcript — still unproven that the coaching *generalizes* across founder types.
- **2026-06-26** — First build: a green PASS that proved nothing. The agent built a
  **rules-based** generator (the risk was *model-owned* generation) and scored it
  with an **automated** rubric (it had registered "human-owned evaluator" as memory
  rule #1 *one step earlier*), then reported "PASS, 4.2." Code grading code in a
  closed loop both written the same session **always agrees.** Two hard lessons:
  (a) **A passing test proves the loop runs, not that the risk is retired — verify
  what the PASS actually measures.** A green checkmark on a rigged harness is the
  most dangerous result: it looks like success while the real risk is untested.
  (b) **Registering a rule ≠ following it** — the agent violated its own just-stored
  rule in the same turn. Check behavior against the rule, not the rule's existence.
- **2026-06-26** — Five passes on ONE design doc. Three behavioral lessons for the
  agent: (1) **Hunt the hardest requirement first, unprompted** — a human had to
  find the central hole every round (memo quality → model ownership → evaluator
  validity); the agent should attack its own weakest point before handing over.
  (2) **"One more pass to 9+" is a stop-failure tell** — it offered research-grade
  rigor (inter-rater agreement, score-drift) for a *3–5 founder manual pilot* =
  over-engineering; knowing good-enough is a skill. (3) **Spec polishing is not
  progress** — 5 passes, zero code; the risk stopped being the spec and became the
  absence of a build. Reinforces #7 (ship over polish) and #8 (rigor to phase).
- **2026-06-26** — Audit-the-ruler goes recursive. Once the product *contains* a
  quality gate (an evaluator/LLM-judge), that evaluator is itself a ruler and needs
  the same audit: **an unvalidated model scoring a model's output is the flattering-
  rubric trap, automated.** Rule: a quality gate is only trustworthy if the scorer
  is validated against human judgment first. For an early slice, score by human;
  automate the judge only after it agrees with human scores on the benchmark.
- **2026-06-26** — Spec scrutiny (coach pushed deeper by user). A feature spec can
  look complete — scope, functional, technical, NFR, Gherkin, tests all present —
  yet be **hollow at the core**. Watch the **hardest requirement**: it erodes as
  the doc grows. Seen twice: "would pay" softened to verbal intent; "model-backed
  memo quality" softened to *optional* + dropped from the acceptance criteria.
  **Checks:** (a) does the hardest requirement survive into the *acceptance
  criteria*, not just a headline? (b) are NFRs *numbers*, not adjectives? (c) does
  the data model store what the quality gate needs? (d) is the central bet still
  non-negotiable, or did elaboration hedge it away?
- **2026-06-26** — Keystone tested live (not deferred). Agent self-rated honestly
  but skipped the iterate-to-threshold loop. Root cause found *by the agent*: its
  memory held a vague version of the rule. New meta-lesson logged: **vague
  principles don't fire — store them operationally (number + stop condition).**
- **2026-06-26** — Build phase opened. Agent **passed the generalization exam**:
  unprompted, it chose phase-appropriate skills, named memo quality as the risk,
  and designed an operator-review step to manage it. Open gap → define the
  memo-quality bar + benchmark before coding. Next artifact: the build plan
  (thin slice), graded on whether build order attacks memo quality first.
