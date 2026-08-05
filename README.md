# Luxury Wedding Invitation Website — Vineeth Babu Akkinapalli & Naga Anusha Kaja

An agency-grade, luxury digital wedding invitation website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **GSAP**, **Framer Motion**, and **Lenis Smooth Scroll**.

---

## 🌟 Features & Highlights

- **Cinematic Entrance Loader**: 2–3 second luxury loading screen featuring couple initials (`A & S`), gold shimmer text effect, and smooth blur/scale exit animation.
- **Global Smooth Scroll & Cursor**: Buttery-smooth scrolling using Lenis integrated with GSAP ScrollTrigger ticker + desktop custom magnetic ring cursor.
- **Transparent Glass Navbar**: Smooth transition from transparent to glassmorphism backdrop with responsive mobile navigation overlay.
- **Cinematic Hero Section**: Animated background with radial lights, slow ambient zoom, drifting flower petals, floating gold sparkles, and desktop mouse parallax.
- **Luxury Invitation Experience**: Paper-textured invitation card, couple details, emotional invitation prose, and a 4-event itinerary summary.
- **Meet the Couple Showcase**: Dual luxury cards for the Bride (*Aurelia Vance*) and Groom (*Sebastian Hayes*) with photo frames, parents' details, and central animated pulsing heart motif.
- **Wedding Events Journey**: Scroll-driven vertical timeline line and glowing nodes showcasing *Engagement*, *Haldi Ceremony*, *Mehendi Ceremony*, and *Wedding Ceremony*.
- **Luxury Venue Experience**: Showcase image frame, address specifications, embedded responsive Google Map, interactive action buttons (*Get Directions*, *Open Maps*, *Copy Address*, *Save Venue*), travel logistics, and convenience cards.
- **Luxury Wedding Memories Gallery**: Responsive 4-column masonry photo grid + interactive fullscreen Lightbox modal with keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`), touch swipe support, and body scroll locking.
- **Luxury RSVP Experience**: Validated form with guest counter (1–10), custom attendance radio buttons, modular EmailJS service integration (with mock fallback), and animated success state.
- **Thank You Section & Premium Footer**: Heartfelt gratitude message, monogram badge, date, venue, social sharing placeholders, and copyright notice.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16.3.0 (App Router)
- **UI Core**: React 19.2.8, TypeScript 5
- **Styling**: Tailwind CSS v4, PostCSS, Custom CSS Variables
- **Animations**: GSAP 3.15.0, Framer Motion 13.0.0
- **Smooth Scroll**: Lenis 1.3.26
- **Icons**: React Icons 5.7.0
- **Utilities**: `clsx`, `tailwind-merge`

---

## 🛠️ Getting Started

### Prerequisites

- Node.js `v20.0.0` or higher
- npm `v10.0.0` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/luxury-wedding-invitation.git
   cd luxury-wedding-invitation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *Note: If EmailJS credentials are omitted, the RSVP form automatically operates in mock demonstration mode.*

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📧 EmailJS RSVP Integration Setup

To connect real email notifications for RSVP submissions:

1. Create a free account on [EmailJS](https://www.emailjs.com/).
2. Create an **Email Service** (e.g. via Gmail or Outlook).
3. Create an **Email Template** with the following template variables:
   - `{{from_name}}` — Guest Full Name
   - `{{phone_number}}` — Guest Phone Number
   - `{{reply_to}}` — Guest Email
   - `{{guest_count}}` — Number of Attending Guests
   - `{{attendance_status}}` — Joyfully Accept / Regretfully Decline / Will Confirm Soon
   - `{{message}}` — Personal Wish / Message
4. Copy your `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` into `.env.local`:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in Vercel settings.
4. Click **Deploy**. Vercel will automatically build and optimize the App Router static bundle.

### Deploy to Netlify / Cloudflare Pages

1. Build command: `npm run build`
2. Publish directory: `.next`

---

## ✅ Production QA & Compliance Summary

- **TypeScript Type Check**: `npx tsc --noEmit` — **0 Errors**
- **ESLint Code Quality**: `npm run lint` — **0 Warnings / 0 Errors**
- **Next.js Production Build**: `npm run build` — **Compiled Cleanly in ~2.0s**
- **SEO & Search Indexing**: Built-in Schema.org JSON-LD `Event` structured data, dynamic `sitemap.xml`, and `robots.txt`.
- **Accessibility (a11y)**: Focus rings, ARIA labels, semantic HTML tags, keyboard navigation, and skip-to-content links.
- **Performance**: 60 FPS CSS/GSAP keyframe animations, lazy-loaded image containers, and layout shift prevention.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for details.
