# THE BIG IDEA
## AI Motion Designer — Product Clarity Document
### MVP 1.1 · Updated March 2026

> *Synthesized from the full Hera.video PM teardown and our MVP Feature Specification v1.1. This document exists to give the team crystal-clear direction on what we are building, who we are building it for, and how we win.*

---

## Table of Contents

1. [The Problem](#01--the-problem)
2. [Target User](#02--target-user)
3. [Value Proposition](#03--value-proposition)
4. [Product Solution](#04--product-solution)
5. [Core Features — What We Are Actually Building](#05--core-features--what-we-are-actually-building)
6. [Unique Advantage](#06--unique-advantage)
7. [Market Size](#07--market-size)
8. [Business Model](#08--business-model)
9. [Competitors](#09--competitors)
10. [Vision](#10--vision)

---

# 01 · THE PROBLEM

## The Root Cause

**95% of time spent in motion design is manual, mechanical button-clicking — not creative work.**

Video creators, marketers, and educators who need motion graphics — animated charts, map animations, lower thirds, data visualizations, logo intros — are stuck between two bad options:

| Option A | Option B |
|---|---|
| **Adobe After Effects** | **Do nothing** |
| Steep learning curve | Skip motion graphics entirely |
| Hours per single asset | Video feels flat and unpolished |
| Requires expert designer skill | Miss engagement opportunity |
| $55+/month Adobe subscription | Lose viewers to better-produced content |
| Still slow even if you know it | |

### The Hidden Bigger Problem

Most creators are choosing **Option B**. They're not switching from After Effects — they're simply not using motion graphics at all because the friction is too high. The real opportunity isn't capturing After Effects users. It's **unlocking a creative behavior that wasn't happening at all**.

### The Three Gates Blocking Every Creator

**Gate 1 — Skill Gate**
Motion design requires knowing After Effects, expressions, keyframe timing, easing curves, and composition logic. Non-designers can't get past this.

**Gate 2 — Time Gate**
Even skilled designers take 2–5 hours per animation asset. At that speed, motion graphics don't fit into a fast content cycle.

**Gate 3 — Cost Gate**
Hiring a freelance motion designer costs $20–$100+ per animation. For a creator publishing 3+ videos per week, this is financially unsustainable.

### What Happens As a Result

- YouTube videos that could have charts stay visually flat
- Brand content that should have polished motion gets static images instead
- Educational videos that need data visualization skip it entirely
- Marketing teams wait weeks for animated assets from their design agency
- Solo creators compete against team-produced content at a structural disadvantage

> **The core problem in one sentence:** The tools that produce professional motion graphics require expertise, time, and money that most creators don't have — so the vast majority simply go without.

---

# 02 · TARGET USER

## Primary User — The Serious Solo Creator

**Who they are:** YouTubers, educators, and independent content creators publishing regularly (2–5 videos/week) in data-heavy or explainer-style niches.

**What their week looks like:**
- Writing scripts, recording footage, editing video
- Already spending 4–8 hours per video in post-production
- Needing charts, maps, and data animations but skipping them due to time/skill
- Competing against larger teams with dedicated designers

**Their exact frustration:** *"I know what animation I want. I just can't build it. And I can't afford to hire someone for every video."*

**Channels/niches they operate in:** Finance & economics, geopolitics, history, science, business, tech reviews, fitness data, sports analytics — any niche where data and visuals reinforce the story.

**Tools already in their stack:** Premiere Pro / DaVinci Resolve / Final Cut, CapCut, Canva (for thumbnails), ChatGPT, stock footage sites.

---

## Secondary User — The Marketing Team / Agency

**Who they are:** 2–10 person marketing team or creative agency producing brand video content, social media ads, explainer videos, and presentation assets.

**What they need:**
- On-brand animated assets produced fast (not weeks via agency cycle)
- Consistent visual style across campaigns and team members
- Exportable assets that drop into existing video workflows
- Team-level brand configuration so any team member produces on-brand output

**Their exact frustration:** *"We brief our design agency, wait 2 weeks, get 3 revisions, and by then the trend or campaign moment is over."*

---

## Tertiary User — The Educator & Institutional Creator

**Who they are:** Online course creators, corporate trainers, e-learning producers, and news/media publishers who need animated visuals to explain complex ideas.

**What they need:** Reliable, repeatable animated templates for data and maps that match their brand and can be updated as data changes.

---

## User Prioritization for MVP

```
Priority 1:  Solo creators (YouTubers, educators) — fastest to adopt, highest vocal advocacy, viral growth engine
Priority 2:  Social media managers producing animated posts and ads
Priority 3:  Independent designers who need to move fast without After Effects
→ Marketing teams & agencies (Post-MVP B2B push)
→ Enterprise / institutional (Long-term)
```

---

# 03 · VALUE PROPOSITION

## The One-Line Promise

> **Turn a 5-hour After Effects project into a 5-minute task — with no design skills required.**

## What We Are Actually Selling (The Deeper Truth)

We're not selling software. We're selling **time back** and **professional output** to people who couldn't previously afford either.

| What the User Wants | What We Deliver |
|---|---|
| "I want my video to look professional" | Broadcast-quality animated graphics with zero design skill |
| "I don't have hours to spend on one graphic" | Animation in under 60 seconds from prompt to preview |
| "I can't afford a motion designer every video" | The equivalent of a motion designer on demand, at SaaS pricing |
| "I need it to match my visual style" | Reference image upload + brand color presets from day one |
| "I want to use it inside my editing software" | Transparent MOV export that drops directly onto any NLE timeline |
| "I want to iterate, not start from scratch" | Version history with restore + conversational prompt loop |

## Value Proposition by User Segment

**For solo creators:**
*"Describe the animation you want. Get it in under 60 seconds. Export it straight into your video editor."*

**For social media managers:**
*"Generate platform-perfect animations in the right format — 9:16, 1:1, 16:9 — in minutes, not days."*

**For designers:**
*"Prototype and iterate 10x faster. Let AI do the mechanical work. You focus on the creative decisions."*

---

# 04 · PRODUCT SOLUTION

## What the Product Is

An **AI-powered motion graphics generator** that converts natural-language text prompts into production-ready, code-based animated graphics — exportable as MP4, MOV (with transparent background), or GIF for use inside professional video editors.

**Critical distinction:** This is NOT a generative video tool (like Sora or Runway). It does NOT produce cinematic footage. It produces **motion graphics** — animated charts, text animations, data visualizations, lower thirds, logo intros, overlays — the kind of graphics that appear as layers in professional video production.

## Why Code-Based (Not Pixel-Based) Is the Right Architecture

Our core technical decision — and the source of our defensible moat — is that every animation is stored and generated as **parametric JSON**, not rendered pixels.

| Code-Based / Parametric JSON | Generative Video (Sora / Runway) |
|---|---|
| Every element is individually editable post-generation | Output is locked pixels — no editing |
| Text renders crisply at any resolution | Text is blurry / distorted |
| Charts are mathematically precise | Data charts are approximated visually |
| Lightweight storage (JSON, not video files) | Large video files |
| Brand colors are exact hex values | Colors are interpretive |
| Fast generation (seconds) | Slow render (minutes) |
| Can be updated without full regeneration | Must regenerate from scratch |
| Version history via JSON diffing | No version history |

## The MVP Animation Pipeline

```
User writes a prompt (with optional reference image + assets)
        ↓
LLM (Claude / GPT-4) interprets prompt
        ↓
Outputs structured Animation JSON
  { elements: [...], timing: {...}, colors: [...] }
        ↓
Client Renderer (Lottie / Canvas)       ← Live preview in editor
        ↓
Server Render Pipeline (Remotion)       ← Final export on demand
        ↓
Supabase Storage / S3                   ← Signed URL returned to client
        ↓
User downloads MP4 / MOV / GIF
```

**Key architectural truth:** The parametric JSON is the source of truth. The video file is a derived artifact, generated on demand at export time. This is what enables version history, editing, and brand consistency — features that are architecturally impossible with pixel-based video generation.

## The Core Product Loop (What Users Experience)

```
1. Write a prompt → 2. Get 3–4 animated variations → 3. Pick a direction
        ↓
4. Refine via chat or click-to-edit (Point & Prompt)
        ↓
5. Review version history if needed → Restore any prior version
        ↓
6. Export → MP4 / MOV (transparent) / GIF
        ↓
7. Drop into video editor (Premiere, DaVinci, CapCut, etc.)
        ↓
8. Publish → Save as template for future reuse
```

---

# 05 · CORE FEATURES — WHAT WE ARE ACTUALLY BUILDING

> *This section reflects our confirmed MVP 1.1 scope. Every feature below is specced, prioritized, and in the build plan.*

---

## The 9 Screens We Are Shipping

| Screen | Route | What It Does |
|---|---|---|
| **Home** | `/` | Prompt-first creation entry point — the front door of the product |
| **Editor** | `/editor/:id` | Full canvas editing environment — where the work happens |
| **Projects** | `/projects` | Dashboard of all user animations — manage, re-edit, export |
| **Templates** | `/templates` | Browse, favorite, and remix community templates |
| **Explore** | `/explore` | Public feed of animations — inspiration + social proof |
| **Sign Up** | `/signup` | New account creation (Google OAuth + email/password) |
| **Login** | `/login` | Returning user authentication |
| **Forgot Password** | `/forgot-password` | Password reset via email |
| **Settings** | `/settings` | Profile, plan usage, theme, and account management |

---

## Feature 1: The Home Screen — Prompt-First Creation Entry

The Home screen is the product's front door. It is intentionally minimal. A large prompt input dominates. The goal: **idea to first animation in under 60 seconds**.

### What's Built

**Prompt Input System (the creation engine):**

| Sub-feature | What It Does |
|---|---|
| **Prompt Text Area** | Multi-line freeform text, up to 1,000 characters. Placeholder with example prompt. Shift+Enter or Send button to submit. |
| **Reference Image Upload** | Attach a JPG/PNG/WEBP (up to 10MB) to guide visual style. AI extracts color palette and aesthetic from the image. |
| **Asset Upload** | Upload images (embed in animation), SVGs (editable vector layers), or custom fonts (.ttf/.otf/.woff) — up to 3 assets per generation. |
| **Aspect Ratio Selector** | 16:9 (YouTube), 9:16 (TikTok/Reels), 1:1 (Instagram), 4:5 (Instagram feed). Set before generation — locked after. |
| **Duration Selector** | Auto (AI decides) or manual: 5s, 10s, 15s, 30s, 60s, or custom (1–60 seconds). |
| **Prompt Enhancer** | One-click AI rewrite of raw prompt → more specific, structured prompt. "Revert to original" link always available. |
| **Send Button** | Submits all inputs. Navigates to `/editor/:id` on success. Debounced to prevent double submission. |

**Explore Feed (below the prompt input):**
- Scrollable grid of public community animations as inspiration and social proof
- Play on hover, Remix button per card
- Unauthenticated users can browse; Remix requires login

---

## Feature 2: The Editor — Where Animations Live and Get Refined

The Editor is the product's most complex and most important screen. Two simultaneous zones:

- **Left: Chat Sidebar** — AI-powered iterative refinement
- **Right: Canvas** — Visual editing, element controls, preview, export

### Chat Sidebar — AI Conversation

| Sub-feature | What It Does |
|---|---|
| **Collapsible Sidebar** | Toggle to maximize canvas space. State persists in session. |
| **Prompt Input (Editor)** | Same capabilities as Home prompt input. Each submission creates a new version in history. AI responds: "Animation updated" + summary of changes. |
| **Version Control** | Every prompt creates a version entry (timestamp + prompt text). Click any version to preview it. "Restore" button creates new version from that state — never overwrites. Plain-language "What Changed" diff per version. Max 50 versions per project. |
| **Agent Mode** | Advanced mode: AI outputs a numbered plan before executing. User reviews, edits, or adds steps. "Execute" button runs the plan step-by-step on canvas. For complex multi-part animations. |
| **Prompt Enhancer** | Same as Home — one-click prompt improvement in editor context. |
| **Result Feedback** | Thumbs up / thumbs down on every AI response. Thumbs down opens reason selector: Off-brand, Wrong layout, Incorrect data, Too slow, Other. Used for model improvement. |

### Canvas — Video Preview & Controls

| Sub-feature | What It Does |
|---|---|
| **Playback Controls** | Play/Pause (Space), current time / total duration, timeline scrubber (seek to any frame), full-screen mode. |
| **Cursor Tool** | Click to select, drag to move, corner handles to resize, Delete/Backspace to remove. Multi-select via Shift+Click or drag-select. Snap to 8px grid (Alt to override). |
| **Point & Prompt** | Click any element on canvas → contextual prompt bubble appears → type a targeted change request → AI updates only that element. Exits mode automatically after submit. |

### Canvas — Element Controls (Right Panel)

When an element is selected, a context panel appears with:

| Control Group | Controls |
|---|---|
| **Appearance** | Color picker (fill / text), background color, transparency (0–100%). Shows last 8 used colors. |
| **Transform** | Scale (10–300%, maintains aspect ratio), Rotation (0–360°, snaps to 45° with Shift). |
| **Text Tools** | Font selector (system + uploaded fonts), size (6–300pt), bold, italic, underline, alignment, letter spacing, line spacing. |
| **Corner Radius** | 0–100px, uniform, visible only on rectangle/box elements. |
| **Padding** | Horizontal and vertical internal spacing (0–200px) on container elements. |
| **Delete Element** | Remove selected element. Undoable via Cmd/Ctrl+Z. No confirmation required. |

### Canvas — Top Bar

| Element | What It Does |
|---|---|
| **Auto-Save Indicator** | "All changes saved" / "Saving…" / "Save failed — click to retry". Triggers 2 seconds after any change. |
| **Undo / Redo** | Cmd/Ctrl+Z / Cmd/Ctrl+Shift+Z. 50 steps. Cleared when new AI generation applied (those use Version Control). |
| **Export Button** | Opens Export Modal. |
| **Share Button** | Opens Share Modal. |
| **Save as Template Button** | Opens Save as Template Modal. |

### Export Modal

| Setting | Options | Notes |
|---|---|---|
| Resolution | 720p, 1080p, 4K | 4K = Pro only |
| Format | MP4, MOV, GIF | GIF caps at 720p / 15fps |
| FPS | 24, 30, 60 | |
| Transparent Background | Toggle | Auto-switches to MOV. Pro only. |
| Title | Editable, pre-filled with project name | |
| Thumbnail | Auto-generated from frame 0, or user-specified frame | |

**Plan gating:**

| Plan | 720p | 1080p | 4K | Transparent BG | MOV | GIF |
|---|---|---|---|---|---|---|
| Free | ✓ | — | — | — | — | ✓ |
| Pro | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Save as Template Modal

Users can save their animation to the community Templates library. Fields: Title (required), Thumbnail (editable frame selector), Public/Private toggle. Public templates are available to all users.

### Share Modal

Generates a shareable view-only link. "Anyone with the link" creates a public player page — no account required to view. Link invalidated when access reverted to "Only me."

---

## Feature 3: Projects Screen — Animation Dashboard

All saved animations in one place. Grid of cards with animated thumbnails (plays on hover), project title, creation date, and duration badge.

**Per-project actions (Three Dot menu):**
- **Rename** — Inline edit, 100-character max
- **Export** — Opens Export Modal without entering the editor
- **Delete** — Soft delete with 5-second undo toast; permanently removed after 30 days server-side

**Sort:** Default newest first. **Pagination:** 20 per page or infinite scroll. **Empty state:** "No animations yet — create your first one" with link to Home.

---

## Feature 4: Templates Screen — Inspiration Library

A browsable library of animation templates created by the community and the platform team.

| Feature | What It Does |
|---|---|
| **Search** | Instant search (300ms debounce) across template titles and prompts |
| **Category Filter** | All, Infographics, Text Animations, Social Media Ads, Logos & Intros, Overlays, Other. Shows count per category. |
| **Sort** | Most Relevant, Most Used, Most Recent, Most Liked |
| **My List / Public toggle** | My List = user's saved + favorited templates. Public = full community library. |
| **Favorite** | Heart/bookmark per card. Adds to My List. Persists server-side. |
| **Use Template** | Opens Editor with template pre-loaded. User gets their own copy — original not modified. Uses count increments. |
| **Like** | Heart icon + count on each card. Toggle. Requires login. |
| **Card Display** | Animated thumbnail (hover), duration badge, creator username, like count, uses count, prompt text (truncated) |

---

## Feature 5: Explore Screen — Community Feed

Public feed of all animations. Same card format as Templates. Serves as inspiration, social proof, and a discovery engine for new users.

- Infinite scroll, 20 per load
- Individual video page: full player, full prompt text, like button, Remix button
- **Remix** = opens the animation in Editor as a new copy (like Use Template)
- Mobile: read-only Explore feed only in MVP (no creation on mobile)

---

## Feature 6: Auth — Sign Up, Login, Forgot Password

**Auth methods:** Google OAuth (primary, prominently featured) + Email/Password (secondary).

**Sign Up:** Google OAuth or Email + Password (min 8 chars, 1 uppercase, 1 number) + Terms of Service checkbox. On success: redirect to Home + onboarding tooltip overlay (one-time, 4-step walkthrough).

**Login:** Google OAuth or Email + Password. Forgot password link. 5-attempt lockout with 10-minute cooldown. Session: 30-day JWT in HttpOnly cookie with rotating refresh tokens.

**Forgot Password:** Email → time-limited reset link (1-hour expiry, single-use) → new password form → redirect to login.

---

## Feature 7: Settings Screen

Four sections on a single page:

| Section | What's There |
|---|---|
| **Profile** | Display name (editable), email (read-only), avatar upload (JPG/PNG, 2MB, circular crop) |
| **Plan** | Current tier badge (Free / Pro / Enterprise), monthly generation usage meter with reset date, Upgrade CTA (hidden for Pro+), Manage Billing link (Stripe portal, paid users only) |
| **Theme** | Light / Dark / System (matches OS). Applies instantly via CSS class toggle. No page reload. Synced to account across devices. |
| **Danger Zone** | Delete Account — requires password re-entry confirmation, 14-day grace period before permanent deletion |

---

## Feature 8: Global Components — The Invisible Foundation

| Component | Spec |
|---|---|
| **Navigation Bar** | Persistent top bar: Logo → Home, Projects, Templates, Explore, User avatar. Active screen visually indicated. Sticky on scroll. |
| **Toast Notifications** | Success (green), Error (red), Info (blue), Warning (yellow). Auto-dismiss at 4s (errors: 6s). Max 3 stacked. |
| **Onboarding Tooltip Overlay** | 4-step first-session walkthrough: Prompt input → Aspect Ratio → Prompt Enhancer → Explore feed. One-time only. Restartable from Settings. |
| **Loading States** | Skeleton placeholders (page load), full-screen progress overlay with estimated time (AI generation), modal progress bar (export), inline spinner (asset upload). |
| **Error States** | Every error is user-actionable with a Retry button or clear next step. No raw errors, no silent failures. |
| **Unauthenticated Access** | Home and Explore are publicly browsable. Generation and Remix require login. Projects, Editor, and Settings require login with redirect. |

---

## MVP Feature Completeness Score

| Area | Status | Key Specs |
|---|---|---|
| Prompt-to-animation generation | ✅ Shipping | < 45s generation target, multiple variations |
| Reference image input | ✅ Shipping | 10MB, JPG/PNG/WEBP |
| Asset upload (image/SVG/font) | ✅ Shipping | 3 assets max per generation |
| Aspect ratio control | ✅ Shipping | 16:9, 9:16, 1:1, 4:5 |
| Duration control | ✅ Shipping | Auto or custom 1–60s |
| Prompt Enhancer | ✅ Shipping | AI rewrite with revert |
| Transparent background export | ✅ Shipping | MOV, Pro tier |
| MP4 / GIF export | ✅ Shipping | Free + Pro |
| 1080p + 4K export | ✅ Shipping | Pro tier |
| Version history + restore | ✅ Shipping | 50 versions, server-side |
| Agent Mode | ✅ Shipping | Plan → Execute flow |
| Point & Prompt (click-to-edit) | ✅ Shipping | Element-scoped AI edit |
| Element controls (color, transform, text) | ✅ Shipping | Full panel |
| Auto-save | ✅ Shipping | 2s debounce |
| Undo / Redo | ✅ Shipping | 50 steps |
| Template library | ✅ Shipping | Browse, favorite, use, save |
| Explore / community feed | ✅ Shipping | Public, Remix enabled |
| Share link (view-only) | ✅ Shipping | No account required to view |
| Google OAuth | ✅ Shipping | Primary auth method |
| Dark / Light mode | ✅ Shipping | All screens |
| Usage metering (plan) | ✅ Shipping | Settings → Plan section |
| Stripe billing portal | ✅ Shipping | Paid users only |
| Brand kit (logos, fonts, full colors) | 🔜 Post-MVP | V1 milestone |
| Chart / data animation module | 🔜 Post-MVP | V1 milestone |
| Map animation module | 🔜 Post-MVP | V1 milestone |
| Audio sync | 🔜 Post-MVP | V1.5 milestone |
| Timeline editor | 🔜 Post-MVP | V1.5 milestone |
| NLE plugin (Premiere) | 🔜 Post-MVP | V2 milestone |
| Team collaboration | 🔜 Post-MVP | V2 milestone |
| Mobile creation (native app) | 🔜 Post-MVP | V3 milestone |

---

## The MVP Tech Stack

| Layer | Decision | Why |
|---|---|---|
| **Frontend** | Next.js (React) + Tailwind CSS | SSR for fast load, App Router for auth guards, Tailwind for rapid iteration |
| **Animation Output** | Lottie / CSS Animations / Canvas (parametric JSON) | Code-based output — editable, crisp at any resolution, lightweight |
| **AI Model** | LLM (Claude / GPT-4) → structured Animation JSON → renderer | LLM interprets prompt, outputs JSON; custom renderer converts to Lottie/Canvas |
| **Auth** | Supabase Auth or Clerk | Google OAuth + email/password out of the box |
| **Database** | Supabase (PostgreSQL) | Row-level security, real-time subscriptions for auto-save |
| **Storage** | Supabase Storage or AWS S3 | Animation JSON, uploaded assets, exported files |
| **Video Rendering** | Remotion (server-side) | Headless render of animation JSON → MP4/MOV. Never in browser. |
| **Deployment** | Vercel (frontend) + Supabase (backend) | Zero-config Next.js; Supabase handles DB, auth, storage, real-time |
| **Payments** | Stripe | Subscription billing, metered usage, self-serve billing portal |
| **Email** | Resend or SendGrid | Password reset, verification, export completion |

---

# 06 · UNIQUE ADVANTAGE

## The Core Technical Moat: Parametric JSON, Not Pixels

The single most defensible technical advantage in this space is generating **structured, editable, parametric code** instead of pixel-level video. This matters for one critical reason:

Generative video companies (Sora, Runway, Pika) generate pixels. We generate structure. These are fundamentally different architectures with different training objectives and different outputs. A video diffusion model cannot produce a JSON with `{ element: "bar_chart", value: 47, color: "#0F3460", timing: 1.2s }` — it produces a blurry approximation of a bar chart rendered as pixels. Ours is exact, editable, and repeatable. **They cannot pivot to this easily.**

## Our Five Unfair Advantages (To Build Toward)

**Advantage 1: Version History + Restore**
No serious motion tool gives creators a genuine version history with named, restorable states. Ours does. Every prompt creates a version. Users iterate freely because they know they can always go back. This builds creative confidence and drives more generations.

**Advantage 2: Point & Prompt (Click-to-Edit)**
Select any element on the canvas, type a targeted change. The AI updates only that element — the rest of the animation is untouched. This is the reliable, surgical edit loop that Hera's users are frustrated they don't have. We are building this from day one.

**Advantage 3: Agent Mode (Plan → Execute)**
For complex animations, the AI doesn't just generate — it plans first. User reviews and edits the plan before execution. This builds user trust, produces better complex outputs, and differentiates us from every single-shot generation tool.

**Advantage 4: Transparent Export from Day One**
Transparent MOV/alpha export is a Pro feature in MVP. This is the feature that makes us useful inside professional video production workflows. Without it, you are a toy. With it, every video editor on the planet is a potential user.

**Advantage 5: Workflow Completeness (The Path Forward)**
Hera stops at the silent overlay. Our roadmap goes: audio sync (V1.5) → NLE plugin (V2) → script-aware animation (V2) → full video pipeline (V3). Every milestone moves us closer to being the tool that helps creators **finish the whole video**, not just one asset.

---

# 07 · MARKET SIZE

## The Creator Economy Context

| Market Segment | Size | Relevance |
|---|---|---|
| Global creator economy | $250B+ (2024) | Macro tailwind |
| Video editing software market | ~$900M (2024), growing to $1.5B+ by 2029 | Direct category |
| YouTube active creators globally | 70M+ | Primary distribution channel |
| Motion graphics / animation software | ~$350M standalone | Adjacent category |

## Serviceable Market by Tier

**Tier 1 — Solo Creators (MVP TAM)**
- 50M+ active YouTubers globally; ~5–10M in "serious creator" tier
- At $20–50/month ARPU → **$1.2B–$6B annual revenue opportunity**

**Tier 2 — Marketing Teams & Agencies (Mid-Term TAM)**
- Tens of millions of marketing teams globally producing video content
- At $200–500/month team pricing → **Multi-billion addressable**

**Tier 3 — Enterprise (Long-Term TAM)**
- Any large organization producing video at scale: media, news, e-learning, corporate communications
- At $499–$2,000+/month → **Enterprise SaaS market**

## Why Now — Three Converging Forces

**1. Creator content output is accelerating.** Platforms reward volume. Creators need to publish more, faster. Manual motion design doesn't scale.

**2. AI capability has crossed the quality threshold.** Generative models are now good enough to produce broadcast-quality motion graphics from text — something not possible 18 months ago.

**3. The professional-amateur gap is closing.** Audiences expect polished video. Creators who look amateur lose viewers to creators who look professional. Quality is no longer optional.

---

# 08 · BUSINESS MODEL

## Revenue Architecture

### Free Tier — Growth Engine

**Purpose:** Acquire users, demonstrate value, seed viral distribution.

| What You Get | Limits |
|---|---|
| AI generation | ~10/day generation cap |
| Export quality | 720p MP4 only |
| Export branding | Watermarked |
| Template access | All templates (browse, use) |
| Explore / Remix | Full access |
| Brand kit | ❌ |
| Transparent export | ❌ |

**Conversion triggers:** Generation limit hit mid-project, watermark embarrassment on public posts, wanting transparent export for real NLE workflow.

---

### Pro Tier — $49–$79/month

**Purpose:** Serve professional creators and designers. The "working creator" tier.

| What You Get |
|---|
| Unlimited generations |
| 1080p + 4K export |
| Transparent MOV (alpha channel) — the workflow-unlocking feature |
| No watermark |
| MOV + GIF + MP4 export |
| Priority rendering |
| Custom template saving |
| Version history (50 versions per project) |
| Manage billing via Stripe portal |

---

### Enterprise Tier — $499–$2,000+/month (custom)

**Purpose:** High-volume organizations. Highest ARPU, highest retention.

| What You Get |
|---|
| Unlimited everything |
| AI trained on brand guidelines |
| API access for pipeline integration |
| Custom integrations (CMS, DAM, video pipelines) |
| Access management + audit logs |
| Dedicated engineering support |
| SSO + advanced security |
| Unlimited brand kits |

---

## Monetization Mechanics (Conversion Levers)

| Lever | How It Creates Conversion Pressure |
|---|---|
| **Generation cap** | Free users hit ~10/day and feel the wall mid-project |
| **Watermark** | Every free export visibly prompts upgrade when sharing publicly |
| **Resolution gate** | 720p forces upgrade for anyone with quality standards |
| **Transparent export gate** | Professional users must upgrade for the overlay workflow — non-negotiable for NLE users |
| **Result quality** | High-quality first generation → emotional buy-in → paid conversion |

## Unit Economics Targets

| Metric | Target |
|---|---|
| Free → Paid conversion | 8–15% |
| Monthly churn (paid) | < 5% |
| Net Revenue Retention | > 110% |
| CAC (paid social) | < $40 for solo tier |
| LTV:CAC | > 3:1 |
| Payback period | < 6 months |

## Growth Model

**Phase 1 (MVP → 6 months): Creator-led viral growth**
Free tier watermark on every export generates brand impressions. Distribution via YouTube creator communities, Twitter/X, Reddit (r/editors, r/youtube, r/marketing). The Explore feed and Remix feature are our built-in distribution engine — every public animation is a product demo.

**Phase 2 (6–18 months): B2B upmarket motion**
Agency and team deals drive higher ARPU. Inbound from creators recommending to employers and agencies.

**Phase 3 (18M+): Enterprise platform**
API integrations, brand AI training, and white-label options drive enterprise contracts.

---

# 09 · COMPETITORS

## Tier 1 — Direct Competitors

**Hera.video** *(closest direct competitor)*
YC-backed, code-based animations, strong traction (100K waitlist in 8 weeks, 200K+ animations in first 2 weeks).
- *Their strengths:* Speed, chart/map features, brand kit, transparent export
- *Their weaknesses:* No audio, unreliable prompt-edit loop, no version history, no Agent Mode, English-only, no NLE plugin
- *Our move:* Beat them on reliable editing (Point & Prompt + Version Control), Agent Mode, and workflow completion path

**Jitter**
Motion design SaaS with clean UI. Good for UI/web animations.
- *Our move:* Win on AI generation quality and creator-specific features (charts, maps, version history)

**Lovart AI**
Conversational AI design agent. Fully chat-based.
- *Our move:* Offer both AI-generated AND manually controllable canvas editing

---

## Tier 2 — Indirect Competitors

| Competitor | Their Strength | Why We Win |
|---|---|---|
| **Adobe After Effects** | Industry standard, maximum power | We're 80% of the output for 20% of the effort and time |
| **Canva** | Easy, versatile, huge user base | Canva's animations are cosmetic — we're broadcast-quality motion design |
| **CapCut / InVideo** | Full editing suite, audio, captions | Not a dedicated motion engine. We're their best motion graphics add-on. |
| **Runway / Pika / Sora** | Cinematic generative video | Wrong category — they generate footage, not editable motion graphics |
| **Motion Array / Envato** | Huge pre-built template libraries | Still requires After Effects skill. We're the "make it in 60 seconds" alternative. |

---

## Competitive Positioning Matrix

| | AI-Powered | Editable Output | Version History | Agent Mode | Transparent Export | Audio | NLE Plugin |
|---|---|---|---|---|---|---|---|
| **Our Product (MVP)** | ✅ | ✅ | ✅ | ✅ | ✅ (Pro) | 🔜 V1.5 | 🔜 V2 |
| Hera.video | ✅ | ✅ | ❌ | ❌ | ✅ (Pro) | ❌ | ❌ |
| Adobe After Effects | ⚠️ Limited | ✅ | ✅ | ❌ | ✅ | ✅ | Native |
| Canva | ⚠️ Basic | ⚠️ Limited | ❌ | ❌ | ❌ | ⚠️ Basic | ❌ |
| Runway / Sora | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ Basic | ❌ |
| CapCut | ⚠️ Basic | ⚠️ Limited | ❌ | ❌ | ❌ | ✅ | ❌ |
| Jitter | ⚠️ Limited | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## The Five Market Gaps Nobody Has Closed (Our Opportunity)

> These are not features a competitor is building — these are category gaps that exist in the entire market right now.

**Gap A: Script-to-Animation** — No tool reads your video script and auto-generates timed motion graphics. Charts appear when data is mentioned. Lower thirds drop when a name is introduced. This is the biggest untapped workflow. *(Our V2 roadmap target.)*

**Gap B: Audio-Visual Sync** — No motion design tool properly syncs animation timing to music or speech cadence. CapCut does basic beat sync but not for professional motion graphics. *(Our V1.5 roadmap target.)*

**Gap C: Series Style Lock** — No tool learns your channel's visual style from video one and auto-applies it to all future animations. Brand kit is part of the answer. Series Style Lock is the full answer. *(Post-V2.)*

**Gap D: Reliable Prompt Editing** — Hera's #1 user complaint. We solve this in MVP with Point & Prompt (element-scoped AI edits) and Agent Mode (plan-before-execute). This is a day-one differentiator.

**Gap E: End-to-End Creator Pipeline** — No tool takes you from script → animation → audio → complete export-ready video without jumping between 3–5 apps. *(Our V3 vision.)*

---

# 10 · VISION

## The 3-Year Vision

> **Become the motion layer for every video on the internet.**

Today, most videos on YouTube, Instagram, TikTok, and LinkedIn are produced without any motion graphics — not because creators don't want them, but because creating them is too hard and too slow. The vision is to remove that friction entirely: every creator, everywhere, can produce professional-quality motion graphics as naturally as they type a message.

In three years:
- A solo creator in Indonesia publishes a data-rich educational YouTube video in their language with animated charts, maps, and lower thirds — produced in 20 minutes, start to finish
- A 5-person marketing agency delivers branded animated content for 30 clients, all on-brand, without hiring a motion designer
- A news publisher auto-generates animated data visualizations the moment a story breaks, synced to the anchor's script
- The product lives as a native panel inside Premiere Pro — every video editor on the planet has it in their toolkit

## The Full Product Roadmap

```
MVP (Now)              V1                  V1.5                V2                   V3
───────────────────────────────────────────────────────────────────────────────────────
Prompt-to-animation    Brand kit (full)    Audio sync          NLE plugin           Full video pipeline
Transparent export     Chart animations    Simplified          Script-aware         Mobile app (iOS)
Reference images       Map animations      timeline editor     animation
Asset uploads          Reliable CSV data   Logo animation      Multi-language        Series Style Lock
Version history        upload              generator           prompts (full)        (AI style memory)
Agent Mode                                                     Team collab
Point & Prompt                                                 Real-time comments    Enterprise brand AI
Templates (20+)                                                API (public)          training
Explore + Remix
Auth + Settings
```

## The Non-Functional Targets We're Committed To

| Metric | Target |
|---|---|
| Home screen load | < 2 seconds (LCP) |
| Canvas editor load | < 3 seconds |
| AI generation time | < 45 seconds |
| Export (1080p, 30fps, 30s) | < 60 seconds |
| Auto-save latency | < 500ms |
| Supported browsers | Chrome 110+, Firefox 115+, Safari 16+, Edge 110+ |
| Minimum viewport | 1280px (desktop-first) |
| Accessibility | WCAG 2.1 AA |
| Security | TLS 1.3, bcrypt (cost 12), JWT in HttpOnly cookies, CSRF protection |

## What "Winning" Looks Like

**At MVP launch:** Product is in the hands of 500+ beta users. First public review says "This is the Hera with version history and reliable editing."

**At 18 months:** 500K+ registered users, $2M+ ARR. "Use [Product Name]" is a standard recommendation in YouTube creator subreddits and Discord servers.

**At 3 years:** 5M+ users globally, $20M+ ARR, plugins in Adobe Premiere and DaVinci Resolve. The product is what "making a motion graphic" means for a new generation of creators.

**Long term:** The motion layer of the creator economy — the product that every video creator uses to add visual dynamism to their work, as naturally as adding a subtitle.

## The Founding Principle

> The real competition isn't After Effects. It's inertia.
>
> Most creators just don't use motion graphics because the friction is too high. You're not convincing After Effects users to switch. You're unlocking a creative behavior that wasn't happening at all — and doing it for hundreds of millions of people who've never been able to create at this level before.
>
> That's what makes this worth building.

---

*Document Version: 2.0 · Updated March 2026*
*Sources: MVP Feature Specification v1.1 + Hera.video PM Teardown (V1 + V2)*
