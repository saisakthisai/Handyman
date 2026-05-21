# The 36 Startup Opportunities — Diagrams

Three views of Greg Eisenberg's 36-idea list:
1. **Methodology flow** — how the list was generated
2. **Master-forces hierarchy** — 3 forces → 8 buckets → 36 ideas
3. **Mindmap** — full radial layout

---

## 1. How the list was generated (methodology)

```mermaid
flowchart LR
    A[Daily input stream<br/>founders · podcasts · X · portfolio] --> B{6 mental filters}
    B --> F1[Demographic deltas]
    B --> F2[AI applied to X]
    B --> F3[Business-model flips]
    B --> F4[Counter-trend reactions]
    B --> F5[Underserved-yet-massive]
    B --> F6[Psychological needs]

    F1 --> O[36 opportunities]
    F2 --> O
    F3 --> O
    F4 --> O
    F5 --> O
    F6 --> O

    O --> T((One thesis:<br/>AI compresses cost<br/>→ break models<br/>→ free time<br/>→ starve connection))

    classDef filter fill:#11141c,stroke:#ffd166,color:#e9eaee
    classDef out fill:#1a1f2e,stroke:#4ecdc4,color:#e9eaee
    classDef thesis fill:#2a1f1f,stroke:#ff6b6b,color:#e9eaee
    class F1,F2,F3,F4,F5,F6 filter
    class O out
    class T thesis
```

---

## 2. Master-forces hierarchy

```mermaid
flowchart TB
    ROOT[36 startup opportunities]

    ROOT --> FA[Force A<br/>AI is eating work]
    ROOT --> FB[Force B<br/>Vacuum of meaning &amp; humanness]
    ROOT --> FC[Force C<br/>Old models break first]

    FA --> B2[Bucket 02<br/>AI replaces a job function]
    FA --> B3[Bucket 03<br/>AI replaces consumer behavior]
    FA --> B8[Bucket 08<br/>Picks &amp; shovels]

    FB --> B1[Bucket 01<br/>Loneliness &amp; belonging]
    FB --> B4[Bucket 04<br/>Demographic wedges]
    FB --> B5[Bucket 05<br/>Counter-positioning vs AI]
    FB --> B6[Bucket 06<br/>Body &amp; bio optimization]

    FC --> B7[Bucket 07<br/>Business-model flips]

    B1 --> I1[#1 loneliness · #6 small social · #14 spiritual · #23 hobbies · #29 dating]
    B2 --> I2[#2 AI employees · #11 dealerships · #21 bookkeeping · #34 defense]
    B3 --> I3[#4/#16 action apps · #7 shop agents · #9 tutors · #28 game NPCs · #30 fitness · #31 travel]
    B4 --> I4[#3 elder · #5 trades · #20 family ops · #25 small farms]
    B5 --> I5[#13 anti-screen · #17 human verification · #36 analog]
    B6 --> I6[#15 longevity · #24 skincare · #32 nutrition · #33 pets]
    B7 --> I7[#10 pay-per-outcome · #22 brand resale · #26 prevention subs]
    B8 --> I8[#8 live · #12 training · #18 agent infra · #19 AI media · #27 on-device · #35 physical AI]

    classDef root fill:#0b0d12,stroke:#ffd166,color:#ffd166,stroke-width:2px
    classDef force fill:#11141c,stroke:#5b8def,color:#e9eaee,stroke-width:2px
    classDef bucket fill:#1a1f2e,stroke:#4ecdc4,color:#e9eaee
    classDef ideas fill:#11141c,stroke:#2a2f3e,color:#8a90a2

    class ROOT root
    class FA,FB,FC force
    class B1,B2,B3,B4,B5,B6,B7,B8 bucket
    class I1,I2,I3,I4,I5,I6,I7,I8 ideas
```

---

## 3. Mindmap — full radial layout

```mermaid
mindmap
  root((36<br/>Startup<br/>Opportunities))
    Loneliness & Belonging
      1 - Third spaces / IRL
      6 - Small social
      14 - Spiritual gatherings
      23 - Adult hobbies
      29 - Agent matchmaking
    AI replaces a job
      2 - AI employees
      11 - Dealership advisor
      21 - Bookkeeping agents
      34 - Defense AI
    AI replaces a behavior
      4 - Action apps
      7 - Shopping agents
      9 - AI tutors
      16 - Action apps redux
      28 - AI game NPCs
      30 - Adaptive fitness
      31 - Trip planning
    Demographic wedges
      3 - Elder tech
      5 - Trades matching
      20 - Family ops
      25 - Small-farm precision
    Counter-positioning
      13 - Anti-screen kits
      17 - Human verification
      36 - Analog nostalgia
    Body & bio
      15 - Longevity biomarkers
      24 - Skincare diagnostics
      32 - Personalized nutrition
      33 - Pet health
    Business-model flips
      10 - Pay-per-outcome
      22 - Brand resale
      26 - Prevention subs
    Picks & shovels
      8 - Live content
      12 - Agent operator training
      18 - Agent infra
      19 - AI-native media
      27 - On-device AI
      35 - Physical AI
```

---

## 4. The compressed thesis

```mermaid
flowchart LR
    AI[AI compresses<br/>cost of doing things] --> X1[Breaks old<br/>business models]
    AI --> X2[Frees up<br/>human time]
    AI --> X3[Starves us<br/>of connection]

    X1 --> R1[Ride the compression<br/>Buckets 02, 03, 07]
    X2 --> R2[Sell picks &amp; shovels<br/>Bucket 08]
    X3 --> R3[Sell the antidote<br/>Buckets 01, 04, 05, 06]

    classDef src fill:#2a1f1f,stroke:#ff6b6b,color:#e9eaee,stroke-width:2px
    classDef eff fill:#11141c,stroke:#ffd166,color:#e9eaee
    classDef move fill:#1a2e1f,stroke:#06d6a0,color:#e9eaee

    class AI src
    class X1,X2,X3 eff
    class R1,R2,R3 move
```
