---
title: Holistic Framework — Personal/Professional Agentic Operating System
status: LIVING DOCUMENT (append as we brainstorm; nothing here is final)
created: 2026-06-26
last_updated: 2026-06-26 (v2 — Chase AI AIOS synthesis added)
owner: Sai
purpose: >
  The canonical running capture of the architecture for a HyperAgent that runs
  Sai's whole life and work — Hermes as chief of staff, Claude Code + Codex as
  builders, integrated personal core + walled clients/companies. Built to run
  today's slice while being seam-ready for the multi-agent future.
---

# Holistic Framework — Agentic Life/Work Operating System

> **How to use this doc:** it is a *running capture*, not a spec. Each section is
> a live idea. The Decision Log at the bottom tracks what's frozen vs open.
> "Frozen" = settled for now, may still be fine-tuned.

---

## 0) North star (the goal)

A **HyperAgent / digital twin** that manages Sai's **personal + professional**
life in one integrated system: knowledge, tasks, projects, schedule, reference —
coordinated across GTD-style altitudes — and eventually **runs virtual companies**
via multi-agent orchestration, with **Hermes as chief of staff** directing Claude
Code, Codex, and other agents. End goal: productize this as a methodology for
business executives to run *their* lives.

**Architectural rule that governs everything here:**
> Conceive all layers holistically now; populate only today's slice; bake the
> *seams* in today so the agentic future plugs in without a rebuild.

---

## 1) The layered architecture (the "building")

Seven elements: 5 stacked layers + 2 cross-cutting spines.

| Layer | What it is (ours) | Noun/Verb | Framework that furnishes it |
|---|---|---|---|
| **Identity & Values** *(top spine)* | who the system serves; the calibration that makes the agent a counterweight | *Being* | Dilts/Covey + personal psychometric calibration |
| **L1 — Direction** | aim / altitude: vision, goals, areas of focus | *Aim* | **GTD Horizons** (top rungs only) |
| **L2 — Operating Model** | who does what: Sai, Hermes (chief of staff), builder agents; ownership, delegation, autonomy | *Actor* | EOS / chief-of-staff design |
| **L3 — Knowledge / BDA** | the objects you hold + the walls: knowledge, projects, tasks, people, reference | **Noun** | PARA / Johnny.Decimal + GTD object types |
| **L4 — Workflows & Rhythms** | the doing: CPORD + agent-era extensions | **Verb** | GTD CPORD + weekly review |
| **L5 — Technology** | the tools | *Tools* | Obsidian, Hermes, Mem0/Honcho, Claude Code, Codex |
| **Governance & Feedback** *(cross-cutting spine)* | keeping it true: what's low-risk, audit, review cadence, calibration loop | *Check* | guardrails + calibration/decay discipline |

**Key clarification:** GTD is **not a layer**. It is a *method that runs through
L1 + L3 + L4*. Our layers are the structure; GTD (and PARA, EOS, Dilts) are
tenants we install into specific floors.

---

## 2) The two GTD dimensions, and how they change for agents

GTD decomposes work into two axes. Both survive into the agentic world — one
nearly intact, one extended. **This reframe is original IP and a consulting asset.**

### Vertical axis — Direction/altitude (L1 + L3)
Mission → vision → goals → areas of focus → **projects** → **runway/actions**.

- **Structurally stable** regardless of human or agent execution.
- **But every node gains two new attributes in the agent world:**
  - **Owner** (human, or which agent)
  - **Autonomy level** (propose / act-low-risk / act)
- **Bottom rung shifts:** runway becomes *partly agent-generated* — agents
  decompose projects into actions on the fly, blurring the project↔action line.
- Verdict: *same skeleton, new metadata on every node.* (Not "unchanged.")

### Horizontal axis — Workflow (L4)
Human GTD: **Capture → Process → Organize → Review → Do (CPORD).**

In the agentic world this does **not** become three separate pipelines. Instead:
- **CPORD stays the single canonical spine**, but **each step gets an actor
  assignment** (capture by Sai, process by an agent, review by Sai…).
- **The handoffs *between* steps are where the interaction protocols live:**
  - **H↔H** (classic GTD)
  - **H↔A** (human–agent)
  - **A↔A** (agent–agent)
- **CPORD grows two agent-era steps** human GTD doesn't need:
  - **Delegate / Orchestrate** — a footnote in human GTD ("waiting-for"); a
    *major verb* with agents.
  - **Verify** — human "do" is self-checking; **agent "do" is not**, so a
    verification gate becomes first-class.
  - → Extended spine: **C – P – O – R – Delegate – Do – Verify.**

One-line: **"GTD for the agentic age" = vertical preserved (newly attributed),
horizontal distributed across actors and extended with Delegate + Verify.**

---

## 2b) Continuous learning — the two loops (Governance spine, made concrete)

"Continuous learning" is the operating name for the **Governance spine's feedback
loop** — what turns static files into a living system. There are **two distinct
loops** (Renuka blends them; we separate them):

- **Process loop** — the system improves *how it works*: a correction becomes a
  rule, a workflow is refined, a skill evolves. Refines Governance + Identity/calibration.
- **Content loop** — the knowledge base improves: notes distilled, project state
  refreshed, stale facts retired. Refines L3 freshness.

Same rituals trigger both (session-end, reviews), but they **write to different
places** and follow **different bleed rules.**

**Learning-bleed rule (key, net-new):**
> **Process-learnings propagate across all walls** (a verification pattern helps
> everywhere). **Content-learnings stay walled** (a client fact never leaves its
> wall). Learnings have their *own* confidentiality model.

Where it lives: **Governance owns the loop · L4 rituals trigger it · L3
episodic/feedback memory holds the content · Identity/calibration is refined by
the process loop.**

PICK from Renuka: session-end observations; compound-capture; every correction →
permanent feedback file *with the why*; save validated wins too (or it drifts
timid); the **durability test** (a learning that doesn't reload was never learned);
anti-bloat (one rule/file, add only after re-explaining 2+ times).
EXTEND: agent **proposes** learnings (not only human-pull); systematized
cross-wall content-freshness audits.
INVENT: agent-proposed-with-approval; the learning-bleed rule above; learning
*about the agents* (which agent is reliable at what).
PROBE her: how does feedback memory avoid bloat/contradiction over months? Does
she ever **retire** a stale/wrong rule, or only accrete?

---

## 2c) Identity & Calibration (the counterweight layer)

The layer that makes the agent a *counterweight*, not a yes-man. From Renuka's
deepest IP; the method copies, the contents never do.

**Method — fuse two streams:**
- **Stream A (top-down):** raw psychometric data read *directly* (Clifton, SDI,
  iEQ9 Enneagram, Big Five) → extract unflattering structural findings.
- **Stream B (bottom-up):** one behavioral observation per session (failures +
  validated wins).
- **Fusion:** assessment *predicts* a failure mode; log *confirms* it; rule fires
  with a *trigger*. Three-part rule = **rule + why (finding) + how-to-apply (trigger+action)**.

PICK (method only): two-stream fusion · three-part rule · counterweight-as-default ·
read-raw-not-summarized · durability test · `strategic-lenses` + `strategic-partner`
skills (directly copyable).
EXTEND: inject the operating manual into **every** agent (Hermes + wall agents) —
calibration is a **shared spine Hermes propagates** (process-learning → bleeds
across walls). Abstract the *method* from personal contents for the consulting product.
INVENT: calibration propagation to sub-agents · **per-domain calibration** (sharper
in business, gentler in well-being) · the productized executive-calibration pipeline.
PROBE her: time-to-payoff (start now or after basics?) · specific upkeep cost ·
has it ever mis-fired, and how she corrected it.

---

## 3) The wall map (BDA isolation decision)

Isolation is driven by **confidentiality / who-can-see-it, NOT by topic.**
Test: *if this context were visible while working another, would it cause a
legal, client-confidentiality, or relationship problem?* Yes → wall.

- **Hard walls (never bleed):**
  - **Each consulting client → its own wall** (contractual/ethical line).
  - **Each virtual company / startup → its own wall** (separate entity/collaborators).
- **One integrated personal/professional core (areas, not walls):**
  well-being, relationships, professional excellence, personal brand, community,
  Psi-center, philanthropy/mission — value comes from cross-pollination.
- **Gray zones (integrate unless they carry others' confidential data):**
  consulting *practice* (IP/pipeline) vs individual *engagements*; Psi/community.

**Shape:** one permanent integrated personal brain + N client walls + M company
walls. Walls spin up / retire; the core is permanent.

**Divergence from Renuka:** she walls companies but has **no integrated personal
core**. Sai integrates *life*, walls *clients/companies*.

### Confidentiality model — "Hermes the role, graduated scoped access"
The wall is a **scoping boundary on one role, not a blindfold.** A blind chief of
staff is useless; the two *real* risks are narrower than "Hermes sees data":
1. **Cross-wall co-mingling** (Client A bleeding into Client B).
2. **Cloud exfiltration** (confidential data leaving local).

Both solved by scoping, not ignorance:
- **Hermes always carries its model of *Sai*** (needs, standards, judgment) across
  all walls — that is the chief-of-staff value and is not client data.
- **Client raw data:** accessible to Hermes only in a **wall-scoped, ephemeral
  session** — dropped on wall-switch, **never written to cross-wall memory.**
- **Cloud/local split:** "Hermes" is a **role, not one process.** A **local Hermes
  plane** reads raw confidential data; the **cloud plane** coordinates across walls
  on **redacted abstractions + metadata** the local plane produces. Raw data never
  hits the cloud.
- **Supervision:** Hermes judges the local agent's **work products against Sai's
  standards** (which it holds) inside the wall session — "right" is defined by its
  model of Sai, not by client data.
- **Sub-compartments:** sensitive items can be gated even inside a wall (need-to-know).

Net: effective (full model of Sai + scoped client access + real supervision) **and**
confidential (no co-mingling, no cloud leak).

---

## 4) Design seams (locked — must not be hard-coded away)

From the requirements grill:

1. **Portable agent** — assume one always-on Hermes today, but never bind the
   chief of staff to one location; multiple Hermes from anywhere later.
2. **Graduated, per-area autonomy** — start surface/route/propose; *act only on
   low-risk*; harden guardrails over weeks; dial agency up per area.
3. **Walls local now, cloud-portable later** — client data stays local; must move
   to secure cloud without redesign.
4. **Horizons baked now, activated later** — run runway+projects today; the
   vertical (areas/goals/vision) is scaffolded but dormant; expect GTD principles
   to *morph* in the human+agent world.
5. **Hybrid location** — canonical brain is hybrid (local + cloud) by design.

### v1 scope (today's slice)
- **Start with: simple workflows → then knowledge → then build outward logically.**
- **Runway + projects** active; other horizons as high-level assumptions only.

---

## 5) Success criteria (how we grade this — two axes)

### Group A — Human/structural
Completeness/MECE · mutual-exclusivity (no L3↔L4 leak) · holism of scope ·
separation of concerns · traceability (action→horizon→value) · extensibility ·
tool-neutrality · productizability.

### Group B — Agent-native (the differentiator)
Orchestration & delegation · A2A interaction · human-agent control model
(act/propose/ask) · workflow↔agentic-flow duality · context isolation across
agents (walls at the agent level) · autonomy guardrails · observability &
accountability · verification/trust loop.

**Scoring posture (corrected):** grade *conservatively*, enumerate failure modes
explicitly, and test against the **stated future state** (agentic, virtual
companies), not just today. Group B is mostly *unbuilt* and is the real work/IP.

---

## 6) Open questions / to-tighten

- [ ] Q3 — what the Operating Model must specify so Hermes coordinates a client's
      work **without seeing** its confidential local data. *(in progress)*
- [ ] Q4 — confirm Governance (not Operating Model) owns "define low-risk" + audit.
- [ ] Q5 — confirm Identity/Values spine owns the calibration "operating manual."
- [ ] Tighten: areas of focus = **L1 Direction**; only projects drop to L3.
- [ ] Consider renaming **L1 "Purpose & Horizons" → "Direction"** to avoid
      collision with GTD's "Horizons."
- [ ] Where exactly the agent-era steps (Delegate, Verify) sit vs Governance.

---

## 8) External validation — Chase AI AIOS framework

> Source: Chase AI "The Agentic OS Setup That Will 10x Claude Code" + paid course
> materials (AIOS map, skill architecture, loop engineering, vault structure diagrams).
> Assimilated 2026-06-26.

Chase AI built a production AIOS running **54 skills · 18 routines · 18 integrations**
on Claude Code, available as a paid course. His framework is the closest public
implementation to ours. Key findings:

### What his framework independently confirms

| Our design | His independent arrival |
|---|---|
| Integrated core (always-on) + swappable walls | MEMORY + PRODUCTIVITY branches "foundations, always on"; capability branches "modular"; OPS/CUSTOM "per-client, swappable" |
| `_Vault-Bridge.md` navigator | `INDEX.MD` at every vault level — same pattern, same purpose |
| Skills → Automation → Loop as L4 build sequence | Annotated explicitly as ① Skills → ② Automation → ③ Loop Engineering |
| v1 = workflows first, then knowledge | "If you master levels 1 and 2, you have 90% of the power" — same priority |
| Distill-don't-dump; raw separate from structured | Carpathy vault: `/raw` (unstructured) → `/wiki` (structured) → `/outputs` |
| Verify step in CPORD is first-class | Full formalization of verify into 5 tiers (see below) |

**His isolation driver differs from ours:** Chase isolates by *domain/topic*
(content vs agency vs sales). We isolate by *confidentiality/contractual boundary*
(Client A cannot bleed into Client B even if both are "agency"). Same architecture,
different and stronger driver.

### What his framework is missing — our structural advantages

1. **No L1 Direction / GTD altitude.** Chase has zero GTD horizon thinking — no
   vision, no goals, no areas of focus. His system operates entirely at runway level
   (what do I do today/this week). He has no traceability from action → goal → value.
   This is a deliberate scope choice (he's solving content-creator productivity, not
   life OS), not an oversight. But it means his system cannot answer "why am I doing
   this?" — ours can. **Our L1 is a genuine differentiator.**

2. **No chief-of-staff layer.** Claude Code IS his conductor; you are always above it.
   One orchestration layer: `You → Claude Code`. We have two:
   `Sai → Hermes → Claude Code + Codex`. The second layer enables Hermes to
   operate autonomously on low-risk tasks without Sai in the loop.

3. **No Identity/Calibration spine.** Agent does what you ask. No counterweight,
   no psychometric calibration, no behavioral log. Absent entirely.

4. **No confidentiality model.** No local/cloud plane split. No wall-scoped sessions.
   Suitable for personal use and non-sensitive teams; unsuitable for consulting client work.

5. **Multi-agent is a workaround, not designed-in.** `Sub-agent Spawn` lives in
   OPS/CUSTOM as a one-off skill. Not a first-class CPORD step. A↔A handoffs
   are not modeled.

### Three net-new additions extracted into our framework

#### A) 5-tier Verify taxonomy (extends CPORD "Verify" step)

Chase formalizes verification into 5 tiers. We adopt this verbatim and require every
skill and every CPORD Verify gate to declare its tier explicitly.

| Tier | Name | Mechanism | Loop type |
|---|---|---|---|
| 1 | **Deterministic** | code assertion · exit 0 · schema · golden-output match | True autonomous |
| 2 | **Rule / Constraint** | programmatic rules on text: char count · contains X · linter · policy | True autonomous |
| 3 | **Ground-truth (delayed)** | reality answers: tests pass · deploy · client reply · engagement | True autonomous |
| 4 | **LLM-as-judge** | second model grades vs rubric — model judging model, not ground truth | Assisted (human in loop) |
| 5 | **Human checkpoint** | you approve — oversight, NOT automated verification | Assisted (human in loop) |

> **Rule:** don't pretend tier 4 is tier 1. If a skill's verify gate is
> LLM-as-judge, that skill cannot run in a true autonomous loop.
> Tiers 1–3 = autonomous-safe. Tiers 4–5 = human-in-the-loop required.

Loop structure (4 phases, from Chase):
`Trigger → Execution (proven skills only) → Goal + Verify → Output + Memory`
Repeats until STOP (budget cap / no-progress detection).

#### B) Meta-skills / OPS layer (names our Governance self-maintenance skills)

Chase's OPS/CUSTOM branch contains skills that *manage the system itself*.
We name our equivalents (to be built as part of Governance spine):

| Chase's OPS skill | Our equivalent | Layer |
|---|---|---|
| Vault Cleanup | `vault-refresh` — prune stale notes, update bridge index | Governance → L3 |
| Skill Creator | `skill-builder` — codify a new workflow into a skill file | Governance → L4 |
| Cron Manager | `routine-manager` — audit and update scheduled automations | Governance → L4 |
| Hook Config | `hermes-config` — update Hermes delegation rules and autonomy levels | Governance → L2 |
| Sub-agent Spawn | `wall-agent-deploy` — spin up / retire a wall agent | L2 Operating Model |
| *(implicit)* | `calibration-update` — add behavioral observation, update operating manual | Identity spine |

These are **Governance rituals**, not ad-hoc tasks. They run on a cadence.

#### C) 4-trigger automation taxonomy (extends L4 automation design)

Every automation in our system must declare its trigger type:

| # | Trigger type | Mechanism | Example |
|---|---|---|---|
| 1 | **On-demand** | Manual invoke (human or Hermes triggers it) | `capture:` routing |
| 2 | **Scheduled (cron)** | `/schedule` or local cron job | Morning brief · week review |
| 3 | **Desktop / UI trigger** | Button in Command Center or Obsidian plugin | One-click skill from dashboard |
| 4 | **Long-running routine** | Continuous or heartbeat loop | Competitor watch · async background research |

> L5 wiring note: `claude -p` (headless Claude Code) is the execution primitive
> for triggers 2, 3, 4 — skills run invisibly without opening a terminal.
> This is how the Command Center buttons and cron automations work under the hood.

### Benchmark — mature system target

Chase's live system at time of capture: **54 skills · 18 routines · 18 integrations**.
This is what a fully-running AIOS looks like after months of operation.
Not a target to chase on day 1 — a reference for what "done at v3-v4" looks like.

---

## 7) Decision Log

| Date | Decision | Status |
|---|---|---|
| 2026-06-26 | Integrate personal/professional life; wall clients + companies | Frozen (fine-tunable) |
| 2026-06-26 | Architecture = 5 layers + Identity & Governance spines | Frozen |
| 2026-06-26 | GTD is a method spanning L1/L3/L4, not a layer | Frozen |
| 2026-06-26 | Vertical axis stable + per-node owner/autonomy attributes | Frozen |
| 2026-06-26 | Horizontal CPORD distributed across actors + Delegate/Verify | Frozen |
| 2026-06-26 | v1 = workflows first, then knowledge; runway+projects only | Frozen |
| 2026-06-26 | Hybrid brain; portable chief-of-staff; walls local→cloud-portable | Frozen |
| 2026-06-26 | Confidentiality = scoped role access (not blindfold): no co-mingling, no cloud exfil | Frozen |
| 2026-06-26 | Verify step has 5 tiers (Chase); every skill must declare its tier; tiers 1–3 autonomous-safe, 4–5 human-in-loop | Frozen |
| 2026-06-26 | L4 build sequence: ① Skills → ② Automation → ③ Loop Engineering | Frozen |
| 2026-06-26 | 4 automation trigger types: on-demand · scheduled (cron) · desktop/UI · long-running routine | Frozen |
| 2026-06-26 | Governance spine includes named meta-skills (vault-refresh, skill-builder, routine-manager, hermes-config, wall-agent-deploy, calibration-update) | Frozen |
| 2026-06-26 | L5 wiring primitive for headless automation = `claude -p` (runs skills without opening terminal) | Frozen |
| 2026-06-26 | L1 Direction (GTD altitude) is a genuine differentiator — Chase and all "AIOS" creators operate at runway only; no horizon thinking | Frozen |
