# Next Session Transition Document
**Generated:** 2026-06-26 (end of Session 1)
**Branch:** `claude/hello-7wco1b`
**Working dir:** `/home/user/Handyman/operating-workflow/`

---

## What We Are Building

Sai is building a **HyperAgent / Digital Twin** — a comprehensive personal and professional operating system where **Hermes** acts as chief of staff, orchestrating Claude Code, Codex, and other sub-agents. This is:
- An integrated life OS: knowledge management, task management, project management, multi-agent orchestration
- Eventually productized as a consulting offering for business executives
- Independent of all other Handyman projects — `operating-workflow/` is its own standalone project

---

## Current State of the Canonical Document

**File:** `operating-workflow/analysis/03-holistic-framework.md`
**Version:** v3 (committed + pushed as of this session)

### Sections present in v3:

1. **North Star** — The defining purpose statement
2. **7-Layer Architecture** — The core framework (full table)
3. **GTD Two-Axis Reframe** — Vertical (Mission→Runway) + Horizontal (CPORD extended for agents)
4. **Continuous Learning — Two Loops** — Process loop (cross-wall) vs Content loop (stays walled)
5. **Identity / Calibration Spine** — Stream A (psychometric) + Stream B (behavioral log), three-part rule format
6. **Wall Map & Confidentiality Model** — Personal core + N client walls + M company walls; local Hermes reads raw, cloud Hermes on redacted metadata only
7. **Decision Log** — 20+ frozen decisions (all major architectural choices)
8. **Chase AI AIOS Synthesis** — How Chase's 4-level AIOS, Branch model, 5-tier Verify taxonomy, 4 trigger types, and meta-skills integrate into our framework
9. **Tier 1 Frameworks Reframed for Agents** ← Added this session (v3)
   - 9a. OKRs → always-on routing signal (L1 Direction)
   - 9b. Cynefin → runtime autonomy classifier (L2 + Governance); closes "define low-risk"
   - 9c. OODA Loop → tactical execution loop inside each CPORD step (L4); Orient = vault + calibration files
   - 9d. RACI → per-task runtime routing metadata encoding autonomy levels (L2)
   - 9e. Kanban → state machine with richer states; cross-wall state visible to Hermes (L3/L4)
   - Meta-pattern table: static→dynamic, intuitive→explicit, periodic→continuous, social→logged, single-actor→multi-actor

---

## Other Files in Operating-Workflow

| File | Purpose |
|------|---------|
| `analysis/01-understanding.md` | Synthesis of all three input files; maps Renuka's system vs Sai's KM blueprint; flags tensions |
| `analysis/02-renuka-meeting-prep.md` | Initial meeting prep (superseded by 04 for the meeting itself) |
| `analysis/04-meeting-brainstorm.md` | Three-part structure: A) What I absorbed, B) Where building differently, C) Brainstorm topics C1–C4 with 18 checkbox questions |
| `analysis/renuka-meeting.html` | 3-tab visual HTML for tomorrow's Renuka meeting (dark stone aesthetic, gold accents) |
| `input files/knowledgemanagementoperatingsystem.md` | Sai's own KM blueprint (core input) |
| `input files/The_Second_Brain_Behind_the_Agent__Renuka_clean.pdf` | Renuka's second-brain playbook PDF |
| `input files/secondbrainplaybook.zip` | Renuka's second-brain system zip (Obsidian vault structure) |

---

## Key Architecture Decisions (Do Not Re-litigate)

These are frozen — do not re-open without Sai explicitly asking:

1. **7 layers**, not 5 or 9. Identity/Values is a top spine; Governance is a cross-cutting spine.
2. **GTD is a tenant, not a layer.** GTD (and PARA, EOS, Dilts) furnish specific floors; they are not the building.
3. **L1 holds only non-completable aims** (vision, goals, areas of focus). Projects and actions (completable) live in L3.
4. **Hermes confidentiality model:** Local Hermes plane reads raw client data in wall-scoped ephemeral sessions. Cloud Hermes coordinates on redacted metadata only. No co-mingling, no cloud exfiltration.
5. **Two learning loops:** Process learnings propagate across walls; content learnings stay walled.
6. **Cynefin closes "define low-risk":** Simple domain + recoverable consequence = low-risk = autonomous action.
7. **RACI encodes autonomy:** Consulted = propose mode; Informed = act mode; neither = full autonomy.
8. **Chase AIOS integrated but subordinate.** Chase's branch model (Foundations + Capabilities + Per-client) maps to our layers. We extend, not replace.

---

## Immediate Next Steps (Priority Order)

### 1. After Renuka Meeting (Tomorrow)
- Update `03-holistic-framework.md` based on her answers to the C1–C4 grill questions in `04-meeting-brainstorm.md`
- Specifically: her answers on memory architecture, session-end ritual mechanics, vault bridge design, and personal wall integration
- The HTML file (`renuka-meeting.html`) has all 18 checkbox questions ready to use during the meeting

### 2. Tier 2 Frameworks (Parked — Do After Tier 1 Settles)
Add and reframe agentically (same treatment as Tier 1):
- **Agile/Scrum rituals** → maps to L4 Workflows & Rhythms
- **Zettelkasten** → maps to L3 Knowledge/BDA (atomic note linking)
- **Balanced Scorecard** → maps to L1 Direction (multi-perspective measurement)
- **PDCA (Plan-Do-Check-Act)** → maps to L4 + Governance (continuous improvement loop)

### 3. Part 2 Assimilation (Parked)
Three areas not yet fully mapped from Renuka's playbook + Chase's AIOS:
- L2 Operating Model (EOS/Traction integration details)
- L5 Technology wiring (specific tool-to-layer assignments)
- Governance maintenance (how the spine runs in practice)

### 4. Actual HyperAgent Design (Future Phase)
The living framework will eventually feed a concrete build spec:
- Hermes orchestration layer design
- Claude Code + Codex as sub-agent builders
- Skill library architecture (Chase's branch model)
- Memory/state implementation
- Interface/distribution layer

---

## Sai's Communication Preferences

- **Short, rapid-fire exchanges.** No essay-length dumps.
- **One question at a time** when gathering input.
- **Be critical.** Do not stamp work "world-class" without genuine scrutiny. Grade conservatively against future-state criteria.
- **Tell him your recommendation** rather than asking him to decide when you have sufficient expertise.
- Speech-to-text converts "git" → "JIT" — interpret accordingly.

---

## Context on Renuka

Renuka is a practitioner Sai is meeting tomorrow. She has already built a Claude Code + Obsidian second-brain system (documented in the input files). Key facts:
- Her system uses Walls (separate Obsidian vaults per context) with identical taxonomy across all walls
- She does NOT use Hermes — Hermes integration is her next build
- She HAS a personal vault (Wall 03 Personal) as a peer silo, but not as an integrating hub
- The meeting purpose: learn from her implementation, identify what to adopt/extend/invent, surface open architecture questions

---

## Session 1 Git Log

```
9dbc2f6  Update holistic framework v3 — Tier 1 frameworks reframed for agents
511f16f  [prior commits from session]
```

All changes are committed and pushed to `claude/hello-7wco1b`.

---

*This file should be read at the start of the next session before touching any operating-workflow files.*
