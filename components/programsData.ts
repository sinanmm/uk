export type ProgramModule = {
  title: string;
  items: string[];
};

export type ProgramTheme = {
  accent: string;
  soft: string;
  deep: string;
  gradient: string;
  ring: string;
};

export type Program = {
  slug: string;
  label: string;
  title: string;
  duration: string;
  checkoutUrl: string;
  strapline: string;
  headline: string;
  summary: string;
  audience: string[];
  transformation: string[];
  investment: {
    standard: string;
    offer: string;
    installment: string;
  };
  theme: ProgramTheme;
  modules?: ProgramModule[];
  modulesHeading?: string;
  learningPoints?: string[];
  receivePoints?: string[];
  bonusResources?: string[];
  completionOutcomes: string[];
  purpose?: string[];
  outcomeStatement: string;
  vision?: string;
};

export const programs: Program[] = [
  {
    slug: "startup-foundations",
    label: "Programme 1",
    title: "Startup Foundations Programme",
    duration: "3 Months (12 Weeks)",
    checkoutUrl: "https://buy.stripe.com/dRm28s4kNfIP2NMe2haMU02",
    strapline: "From Business Idea to Launch-Ready Plan",
    headline: "Build the right business before you spend time and money on the wrong one.",
    summary:
      "A practical starter programme for future founders who want clarity, validation, a real plan, and the confidence to launch properly in the UK.",
    audience: [
      "Students",
      "Graduates",
      "Aspiring entrepreneurs",
      "Employees considering self-employment",
      "Individuals with business ideas",
      "Anyone wanting to start a business the right way",
    ],
    transformation: ["Business idea", "Validated opportunity", "Launch-ready roadmap"],
    investment: {
      standard: "GBP 600 + VAT",
      offer: "GBP 300 + VAT",
      installment: "GBP 100 + VAT per month",
    },
    theme: {
      accent: "#2f9424",
      soft: "#edf8ea",
      deep: "#071642",
      gradient: "linear-gradient(145deg,#071642 0%,#0c2662 55%,#2f9424 100%)",
      ring: "rgba(47,148,36,0.18)",
    },
    modulesHeading: "12 implementation-led modules",
    modules: [
      {
        title: "Module 1: Entrepreneurial Mindset & Personal Development",
        items: [
          "Entrepreneurial thinking",
          "Goal setting",
          "Productivity",
          "Time management",
          "Confidence building",
          "Public speaking fundamentals",
          "Building resilience",
        ],
      },
      {
        title: "Module 2: Finding the Right Business Opportunity",
        items: [
          "Business idea generation",
          "Hero idea concept",
          "Identifying problems worth solving",
          "Market gap analysis",
          "Scalability assessment",
          "Choosing the right industry",
        ],
      },
      {
        title: "Module 3: Market Research & Validation",
        items: [
          "Customer research",
          "Competitor analysis",
          "SWOT analysis",
          "Feasibility studies",
          "Market size evaluation",
          "Product-market fit",
        ],
      },
      {
        title: "Module 4: Business Model Development",
        items: [
          "Business model canvas",
          "Revenue streams",
          "Cost structures",
          "Value proposition",
          "Customer segments",
          "Business planning fundamentals",
        ],
      },
      {
        title: "Module 5: Setting Up a Business in the UK",
        items: [
          "Sole trader",
          "Limited company",
          "Partnerships",
          "HMRC basics",
          "VAT basics",
          "Business banking",
          "Intellectual property",
          "Trademark awareness",
        ],
      },
      {
        title: "Module 6: Branding & Professional Presence",
        items: [
          "Business naming",
          "Mission, vision and core values",
          "Personal branding",
          "LinkedIn optimisation",
          "Professional business profiles",
          "Creating trust and credibility",
        ],
      },
      {
        title: "Module 7: Sales Fundamentals",
        items: [
          "Understanding sales",
          "Prospecting",
          "Building relationships",
          "Objection handling",
          "Networking",
          "Follow-up systems",
          "Referral generation",
        ],
      },
      {
        title: "Module 8: Startup Marketing",
        items: [
          "Instagram strategy",
          "Facebook strategy",
          "LinkedIn strategy",
          "WhatsApp marketing",
          "Content creation",
          "Reels and short-form content",
          "Building authority online",
        ],
      },
      {
        title: "Module 9: Finance for Entrepreneurs",
        items: [
          "Revenue vs profit",
          "Cash flow management",
          "Pricing strategies",
          "Budgeting",
          "ROI calculations",
          "Financial forecasting",
        ],
      },
      {
        title: "Module 10: AI & Digital Tools for Entrepreneurs",
        items: [
          "ChatGPT",
          "Canva",
          "CRM systems",
          "Automation tools",
          "Productivity systems",
          "AI for research and content creation",
        ],
      },
      {
        title: "Module 11: Business Planning & Presentation Skills",
        items: [
          "Business plans",
          "DPR preparation",
          "Investor pitch decks",
          "Elevator pitches",
          "Presentation skills",
          "Public speaking practice",
        ],
      },
      {
        title: "Module 12: Launch Preparation",
        items: [
          "Launch checklist",
          "First customer strategy",
          "90-day action plan",
          "Goal setting",
          "Business readiness assessment",
        ],
      },
    ],
    bonusResources: [
      "Business idea workbook",
      "SWOT templates",
      "Business model canvas",
      "Startup checklist",
      "Business plan template",
      "DPR template",
      "Customer interview templates",
      "Sales scripts",
      "AI toolkit guide",
      "LinkedIn optimisation guide",
    ],
    completionOutcomes: [
      "A validated business idea",
      "Business model",
      "Brand identity",
      "Financial forecast",
      "Marketing plan",
      "Sales strategy",
      "Business plan",
      "Launch roadmap",
      "Greater confidence to start",
    ],
    outcomeStatement: "You will not just learn what to do. You will leave knowing how to do it.",
  },
  {
    slug: "startup-launch-growth",
    label: "Programme 2",
    title: "Startup Launch & Growth Programme",
    duration: "6 Months",
    checkoutUrl: "https://buy.stripe.com/7sY7sM4kN1RZewu5vLaMU01",
    strapline: "From Launch to Consistent Growth",
    headline: "Turn a startup plan into paying customers, repeatable systems, and business momentum.",
    summary:
      "A hands-on growth programme for founders who are ready to move beyond planning and start generating sales, structure, and traction.",
    audience: [
      "New business owners",
      "Side hustle founders",
      "Recently launched startups",
      "Self-employed professionals",
      "Entrepreneurs looking for customers",
      "Businesses looking to grow",
    ],
    transformation: ["Idea", "Revenue", "Systems for growth"],
    investment: {
      standard: "GBP 1,200 + VAT",
      offer: "GBP 600 + VAT",
      installment: "GBP 100 + VAT per month",
    },
    theme: {
      accent: "#ff8b2b",
      soft: "#fff1e5",
      deep: "#081a45",
      gradient: "linear-gradient(150deg,#081a45 0%,#15357e 48%,#ff8b2b 100%)",
      ring: "rgba(255,139,43,0.2)",
    },
    modulesHeading: "12 growth-focused modules",
    modules: [
      {
        title: "Module 1: Business Launch Strategy",
        items: [
          "Business launch planning",
          "Setting goals and KPIs",
          "Creating an action plan",
          "Launch execution",
          "Building momentum",
        ],
      },
      {
        title: "Module 2: Customer Acquisition Systems",
        items: [
          "Finding customers",
          "Prospecting strategies",
          "Lead generation",
          "Customer outreach",
          "Referral systems",
          "Networking strategies",
        ],
      },
      {
        title: "Module 3: Advanced Sales Skills",
        items: [
          "Sales psychology",
          "Consultative selling",
          "Handling objections",
          "Negotiation skills",
          "Closing techniques",
          "Customer retention",
        ],
      },
      {
        title: "Module 4: Digital Marketing for Growth",
        items: [
          "Instagram growth",
          "Facebook growth",
          "LinkedIn lead generation",
          "WhatsApp marketing",
          "Content planning",
          "Reels and video marketing",
          "Personal branding",
        ],
      },
      {
        title: "Module 5: Building a Strong Brand",
        items: [
          "Brand positioning",
          "Customer experience",
          "Reputation management",
          "Testimonials",
          "Online presence",
          "Building authority",
        ],
      },
      {
        title: "Module 6: Operations & Systems",
        items: [
          "Creating SOPs",
          "Order management",
          "Customer service systems",
          "Team communication",
          "Delegation basics",
          "Business organisation",
        ],
      },
      {
        title: "Module 7: Financial Management",
        items: [
          "Cash flow planning",
          "Pricing strategies",
          "Profitability analysis",
          "Budget management",
          "Understanding financial reports",
          "Growth planning",
        ],
      },
      {
        title: "Module 8: Productivity & Time Management",
        items: [
          "Managing your time",
          "Prioritisation",
          "Focus and discipline",
          "Productivity systems",
          "Founder effectiveness",
        ],
      },
      {
        title: "Module 9: AI & Automation",
        items: [
          "ChatGPT for business",
          "AI for marketing",
          "CRM systems",
          "Automation tools",
          "Business dashboards",
          "Productivity enhancements",
        ],
      },
      {
        title: "Module 10: Team Building",
        items: [
          "Hiring basics",
          "Delegation",
          "Managing staff",
          "Virtual assistants",
          "Building accountability",
        ],
      },
      {
        title: "Module 11: Networking & Relationship Building",
        items: [
          "Building strategic relationships",
          "Industry networking",
          "Finding mentors",
          "Finding partners",
          "Building influence",
        ],
      },
      {
        title: "Module 12: Business Growth Plan",
        items: [
          "12-month business roadmap",
          "Scaling opportunities",
          "Growth strategies",
          "Future planning",
          "Founder development",
        ],
      },
    ],
    bonusResources: [
      "Sales scripts",
      "Marketing templates",
      "Customer acquisition templates",
      "SOP templates",
      "KPI tracking sheets",
      "Business dashboard templates",
      "AI productivity toolkit",
      "Hiring and interview templates",
    ],
    completionOutcomes: [
      "Paying customers",
      "Improved sales skills",
      "Marketing systems",
      "Operational processes",
      "Greater confidence",
      "Growth roadmap",
      "Better financial understanding",
      "Stronger business foundations",
    ],
    outcomeStatement: "Stop guessing. Start growing. Build a business that generates customers, revenue, and momentum.",
  },
  {
    slug: "entrepreneur-development",
    label: "Programme 3",
    title: "Entrepreneur Development Programme",
    duration: "12 Months",
    checkoutUrl: "https://buy.stripe.com/eVq4gA8B3cwD1JI9M1aMU03",
    strapline: "From Business Owner to Business Leader",
    headline: "Build the leadership, systems, and long-term strategy needed to grow beyond the founder stage.",
    summary:
      "A premium development pathway for serious entrepreneurs who want to scale sustainably, lead with confidence, and create businesses that last.",
    audience: [
      "Serious entrepreneurs",
      "Startup founders",
      "Business owners",
      "Future business leaders",
      "Individuals committed to long-term growth",
      "Those looking to build sustainable businesses",
    ],
    transformation: ["Working in the business", "Leading the business", "Sustainable long-term growth"],
    investment: {
      standard: "GBP 2,400 + VAT",
      offer: "GBP 1,200 + VAT",
      installment: "GBP 100 + VAT per month",
    },
    theme: {
      accent: "#0f8b8d",
      soft: "#e9f8f8",
      deep: "#081533",
      gradient: "linear-gradient(150deg,#081533 0%,#123164 42%,#0f8b8d 100%)",
      ring: "rgba(15,139,141,0.18)",
    },
    purpose: [
      "Starting a business is one challenge.",
      "Growing a business is another.",
      "Building a business that can operate, scale and thrive for years is a completely different challenge.",
      "This programme is designed to help entrepreneurs develop the mindset, leadership skills and business systems required for long-term success.",
    ],
    learningPoints: [
      "Strategic business planning",
      "Leadership and decision making",
      "Team building and delegation",
      "Building systems and processes",
      "Business growth and scaling",
      "Financial planning and business performance",
      "Funding and investment readiness",
      "Networking and relationship building",
      "Personal branding and authority building",
      "Productivity and high-performance habits",
      "Long-term wealth creation",
      "Exit planning and business sustainability",
    ],
    receivePoints: [
      "Live training sessions",
      "Practical assignments",
      "Business templates and resources",
      "Mentorship and guidance",
      "Community support",
      "Accountability sessions",
      "Q&A sessions",
      "Growth planning support",
    ],
    bonusResources: [
      "Startup business checklist",
      "SWOT analysis template",
      "Business plan template",
      "DPR template",
      "Business model canvas",
      "Customer interview templates",
      "Startup financial planning templates",
      "Sales scripts and outreach templates",
      "Social media content planner",
      "AI toolkit for entrepreneurs",
      "LinkedIn optimisation guide",
      "Public speaking and presentation resources",
      "Community and networking opportunities",
    ],
    completionOutcomes: [
      "Stronger leadership skills",
      "Greater business confidence",
      "Better decision-making ability",
      "Improved systems and processes",
      "Clear growth strategies",
      "A long-term business vision",
      "A scalable business framework",
      "A stronger entrepreneurial mindset",
    ],
    outcomeStatement: "Move from working in the business to leading and growing the business.",
    vision:
      "To help develop entrepreneurs who create value, generate employment, build sustainable businesses and make a positive impact on society.",
  },
];

export const programsBySlug = Object.fromEntries(programs.map((program) => [program.slug, program])) as Record<
  string,
  Program
>;

