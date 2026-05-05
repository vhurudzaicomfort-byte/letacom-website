# Letacom South Africa — Corporate Website

Production-ready corporate website for Letacom South Africa, an industrial supply, procurement, and distribution partner serving the African continent.

## Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Components:** shadcn/ui base, customized
- **Forms:** Multi-step RFQ form with validation
- **Icons:** 100% custom SVG icon components (zero third-party icon libraries)
- **Email:** Resend integration for form submissions
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build -- --webpack
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email delivery | For email |
| `RFQ_INBOX_EMAIL` | Inbox for RFQ form submissions | For email |
| `CONTACT_INBOX_EMAIL` | Inbox for contact form (falls back to RFQ_INBOX_EMAIL) | Optional |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (no + prefix) | Optional |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | For SEO |

## Project Structure

```
app/
├── (marketing)/           # All public pages
│   ├── page.tsx           # Home
│   ├── about/             # About Letacom
│   ├── industries/        # Industries hub + 4 subpages
│   ├── solutions/         # Solutions overview
│   ├── products/          # Products hub + 7 category pages
│   ├── request-quote/     # Multi-step RFQ form
│   └── contact/           # Contact page
├── api/
│   ├── rfq/               # RFQ form submission endpoint
│   └── contact/           # Contact form endpoint
components/
├── icons/                 # All custom SVG icon components
├── layout/                # Header, Footer, WhatsAppButton
├── sections/              # Hero, Cards, CTABanner, etc.
└── ui/                    # shadcn primitives
```

## Pages

- **Home** — Hero, industries grid, supply categories, advantages, featured solution, process steps
- **About** — Company narrative, mission, differentiators, team placeholders
- **Industries** — Hub + Breweries, Manufacturing, Transport & Logistics, Sales & Distribution
- **Solutions** — 6 capability areas with CTAs
- **Products** — 7 curated categories (not e-commerce)
- **Request a Quote** — Multi-step RFQ form with validation
- **Contact** — Contact info, form, WhatsApp

## Placeholders

Items marked with `[PLACEHOLDER]` need real client data:
- Phone numbers
- Team bios and photos
- Client logos
- Google Maps embed
- Product images

## Deployment

```bash
# Deploy to Vercel
vercel --prod
```

Set environment variables in the Vercel dashboard or via CLI.

## Design System

- **Fonts:** Ubuntu (headings), Inter (body)
- **Colors:** Industrial blue primary (#1E5A96), amber/copper accent (#E07B1F), graphite neutrals
- **Icons:** Custom SVG, 24x24 viewBox, 1.5px stroke, square linecaps
- **Spacing:** 4px base unit, 1280px max container width
- **Borders:** 4-8px radius max (sharp, engineered feel)
