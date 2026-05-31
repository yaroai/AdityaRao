// Single source of truth for all site content.
// Edit copy here, not in components.
//
// Items marked FIXME are placeholders waiting on Aditya to confirm.

export const siteConfig = {
  name: "Aditya Rao",
  fullName: "Aditya Rao",
  title: "Aditya Rao",
  description:
    "Co-founder and technical operator at Yaro AI. Building Yaro, an AI-native CRM for real estate. Finance and ML at Georgia Tech.",
  // FIXME: confirm final domain (adityarao.com first choice)
  url: "https://adityarao.com",
  email: "aditya@yaro.ai",
  phone: "(470) 531-5289",
  phoneTel: "+14705315289",
  // FIXME: real Calendly URL
  calendlyUrl: "https://calendly.com/adityarao",
  // FIXME: confirm primary social handle (X or Instagram, whichever Aditya posts on most)
  instagram: "https://instagram.com/adityarao.ai",
  instagramHandle: "@adityarao.ai",
  linkedin: "https://linkedin.com/in/adityarao",
  github: "https://github.com/yaroai",
  x: "https://x.com/aditya6352",
  yaroWebsite: "https://www.yaro.ai",
};

export const hero = {
  topline: "Atlanta, GA",
  roles: ["Builder", "Engineer", "Founder"],
  // FIXME: Aditya to write final 3–4 sentence hero paragraph in his voice
  subtitle:
    "I build software, ML systems, and AI-driven products. Currently co-founding Yaro, an AI-native CRM for real estate. Studying Finance and CS at Georgia Tech, with independent work in sports markets and financial NLP.",
  cta: "Book a call",
  ctaSecondary: "or email me directly →",
  currently: "Currently building Yaro · An AI-native CRM for real estate",
  // FIXME: lock final 4 stats with Aditya before launch — each must survive an investor follow-up
  stats: [
    { value: "$60K+", label: "generated at Yaro AI" },
    { value: "3", label: "products shipped" },
    { value: "YHack Yale", label: "Polyedge · 2026" },
    { value: "30+", label: "discovery calls with agents" },
  ],
};

export const yaroCrm = {
  label: "// 01  WHAT I'M BUILDING",
  title: "Yaro. The CRM real estate agents actually want to open.",
  body: "Yaro helps real estate agents stay on top of the people who matter. It automatically captures every call, text, and email, then turns that activity into a clear daily list of who to follow up with and when. One system that replaces the messy stack of disconnected tools agents juggle today.",
  status: "IN PRIVATE BETA",
  features: [
    {
      title: "Ambient capture",
      desc: "every text, call, and email auto-logged",
    },
    {
      title: "AI daily action plan",
      desc: "who to call, who to text, who's slipping",
    },
    {
      title: "Sphere of influence engine",
      desc: "never lose a past client",
    },
    {
      title: "Ask Yaro",
      desc: "natural language across your entire book of business",
    },
  ],
  link: "www.yaro.ai →",
  linkUrl: "https://www.yaro.ai",
  mockActions: [
    {
      name: "Call Sarah M.",
      reason: "Lead from Saturday's open house",
      action: "Call",
    },
    {
      name: "Text Mike R.",
      reason: "2 weeks since last touch, market just shifted in his ZIP",
      action: "Text",
    },
    {
      name: "Follow up: Jennifer L.",
      reason: "Lease ends in 60 days based on her last text",
      action: "Draft msg",
    },
  ],
};

export const projects = {
  label: "// 02  PROJECTS",
  title: "Things I've built.",
  subtitle:
    "Hackathon wins, ML research, and the company I'm building. Each one solved a real problem I cared about.",
  items: [
    {
      name: "Polyedge",
      type: "Hackathon · YHack Yale 2026",
      // FIXME: decide final framing — "Shipped" vs "Featured" vs "Live"
      status: "FEATURED",
      featured: true,
      // FIXME: Aditya to tighten copy and confirm what's accurate
      description:
        "A Polymarket trading intelligence dashboard built at YHack Yale 2026. Aggregates market signals, surfaces edge, and gives traders a real-time read on where the crowd is wrong. Built end-to-end in a weekend.",
      stack: [
        "TypeScript",
        "Next.js",
        "Python",
        "Polymarket API",
        "Tailwind",
      ],
      link: "lineup.wiki →",
      linkUrl: "https://lineup.wiki",
    },
    {
      name: "Yaro AI",
      type: "Startup · Co-founder",
      status: "Live",
      featured: false,
      description:
        "The company I co-founded with Alex. Software studio building custom AI-native tools for founder-led businesses, currently spinning out Yaro, an AI-native CRM for real estate.",
      stack: ["Next.js", "TypeScript", "Supabase", "Anthropic API"],
      link: "www.yaro.ai →",
      linkUrl: "https://www.yaro.ai",
    },
    {
      name: "Sports prediction models",
      // FIXME: confirm sport(s), model type, and an honest accuracy/coverage stat
      type: "Independent ML work",
      status: "Shipped",
      featured: false,
      description:
        "Independent ML models for sports market prediction. Feature engineering, gradient-boosted models, and backtesting on historical lines. Built to learn what edges actually survive out-of-sample.",
      stack: ["Python", "scikit-learn", "XGBoost", "pandas"],
      link: "",
      linkUrl: "",
    },
    {
      name: "NLP for financial markets",
      type: "GT VIP research team",
      // FIXME: confirm framing — "Ongoing" beats "Published" until something is actually published
      status: "Ongoing",
      featured: false,
      // FIXME: confirm scope without overclaiming — no language implying publication
      description:
        "Vertically Integrated Projects team at Georgia Tech researching NLP applications to financial markets. Work-in-progress, not yet published.",
      stack: ["Python", "PyTorch", "Hugging Face"],
      link: "",
      linkUrl: "",
    },
  ],
};

export const about = {
  label: "// 03  ABOUT",
  title: "The short version.",
  // FIXME: Aditya to draft final about prose in his voice — this is a placeholder
  bio: "I'm Atlanta-based, studying Finance and CS at Georgia Tech. I co-founded Yaro AI with Alex — we build custom AI-native tools for founder-led businesses and we're currently building Yaro, an AI-native CRM for real estate agents. Outside the company I do independent ML and NLP work in sports markets and finance. I like building things that have to work in the real world.",
  facts: [
    "Atlanta-based, studying Finance and CS at Georgia Tech",
    "Co-founder and COO at Yaro AI · Currently building Yaro",
    "Independent ML and NLP work in sports markets and finance",
    "Polyedge featured at YHack Yale 2026",
    "Competitive tennis, chess, and poker",
    // FIXME: add languages if relevant, or remove this line
  ],
};

// Experience section on the home page is a small teaser that links to /resume.
// Full experience lives in src/app/resume/page.tsx.
export const experience = {
  label: "// 04  EXPERIENCE",
  title: "Where I've worked.",
  subtitle: "Founder, engineer, researcher. Full timeline on the resume page.",
};

export const contact = {
  headline: "Want to work together?",
  subtitle:
    "Open to investor conversations, founder intros, and inbound from operators who care about shipping.",
  cards: [
    {
      title: "Book a call",
      description:
        "Best for: partnerships, investor conversations, founder intros",
      // FIXME: real Calendly URL
      buttonLabel: "Open Calendly →",
      buttonUrl: "https://calendly.com/adityarao",
    },
    {
      title: "Send a DM",
      description: "Best for: quick questions, intros, vibes",
      // FIXME: pick the primary social Aditya posts on most
      buttonLabel: "@adityarao →",
      buttonUrl: "https://x.com/adityarao",
    },
    {
      title: "Email me",
      description:
        "Best for: serious inquiries with context, recruiting, partnerships",
      // FIXME: confirm primary email
      buttonLabel: "yaroxpo.ai@gmail.com →",
      buttonUrl: "mailto:yaroxpo.ai@gmail.com",
    },
  ],
};

export const partnerships = {
  title: "Working with brands.",
  subtitle: "Rates per Reel, depending on length and format.",
  rows: [
    { format: "Reel under 25 seconds", rate: "$300" },
    { format: "Reel 30 to 60 seconds", rate: "$600" },
    { format: "Reel over 60 seconds", rate: "$1,000" },
    { format: "Multiple videos", rate: "Contact" },
  ],
  note: "Rates are starting points. Final price depends on usage rights, exclusivity, and turnaround. Email me to talk.",
  ctaLabel: "Inquire about a partnership",
  ctaUrl: "/contact",
};

export const timeline = {
  title: "Timeline.",
  subtitle: "A few moments along the way.",
  events: [
    { date: "July 2006", title: "Born (Kentucky, USA)" },
    { date: "July 2014", title: "Moved to Atlanta" },
    { date: "April 2023", title: "First job", detail: "Lifeguard" },
    { date: "December 2023", title: "Accepted into Georgia Tech" },
    { date: "August 2024", title: "Started Georgia Tech" },
    {
      date: "August 2025",
      title: "Started Yaro AI",
      detail: "Consulting + custom software agency",
    },
    {
      date: "May 2026",
      title: "Started Yaro",
      detail: "AI-native layer for real estate software",
    },
  ],
};

export const footer = {
  text: "Aditya Rao · Atlanta, GA · 2026",
};
