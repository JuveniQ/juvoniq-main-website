import project1Image from '/JIQ_main_logo.png'
import project2Image from '/projects/gig-kasi.png'
import project3Image from '/projects/jcv.png'

export const webPackages = [
  {
    type: "Web",
    name: "Basic Website",
    description:
      "Approx. 5 pages (Home, About, Contact, 1–2 services); custom UI/UX design; responsive layout; basic SEO; contact form; 1 month maintenance (updates, bug fixes).",
    delivery: "~4–6 weeks",
    oldZar: 15000,
    oldUsd: 1000,
    features: [
      "5-page website",
      "Custom UI/UX",
      "Responsive layout",
      "Basic SEO",
      "Contact form",
      "1 month maintenance",
    ],
  },
  {
    type: "Web",
    name: "Standard Website",
    description:
      "10-page corporate site; professional design; CMS (e.g. WordPress); e-commerce or booking; on-page SEO; 3 months maintenance (minor updates, security patches).",
    delivery: "~8–10 weeks",
    oldZar: 60000,
    oldUsd: 4000,
    features: [
      "10-page corporate site",
      "Professional design",
      "CMS for updates",
      "E-commerce or booking",
      "SEO optimization",
      "3 months maintenance",
    ],
  },
  {
    type: "Web",
    name: "Premium Website",
    description:
      "20+ page enterprise portal or web app; premium UI/UX; custom integrations (CRM, payments); advanced features (user accounts, admin dashboard); 6 months support (major upgrades, priority response).",
    delivery: "~12–16 weeks",
    oldZar: 150000,
    oldUsd: 10000,
    features: [
      "20+ page web app",
      "Premium UI/UX",
      "Custom CRM & payments",
      "Advanced features",
      "Admin dashboard",
      "6 months support",
    ],
  },
];

export const appPackages = [
  {
    type: "App",
    name: "Basic App",
    description:
      "Simple mobile app (React Native) – e.g. informational or portfolio app. Login/sign-up, content feed, push notifications, standard UI, Android & iOS, 1 month bug-fix support.",
    delivery: "~8–10 weeks",
    oldZar: 200000,
    oldUsd: 12000,
    features: [
      "Simple mobile app",
      "Sign-up/login",
      "Basic feed",
      "Push notifications",
      "Android & iOS",
      "1 month bug-fix support",
    ],
  },
  {
    type: "App",
    name: "Standard App",
    description:
      "SME-level app (eCommerce or booking): user profiles, search, shopping cart/booking engine, payment, chat support, custom UI/UX, cross-platform, 3 months maintenance.",
    delivery: "~16 weeks",
    oldZar: 600000,
    oldUsd: 40000,
    features: [
      "eCommerce/booking app",
      "User profiles & chat",
      "Payment integration",
      "Custom UI/UX",
      "Cross-platform",
      "3 months maintenance",
    ],
  },
  {
    type: "App",
    name: "Premium App",
    description:
      "Full-featured enterprise app. Includes all Standard features, plus advanced modules (real-time chat, analytics, admin panel, high security), priority support, 6+ months maintenance.",
    delivery: "~24+ weeks",
    oldZar: 1200000,
    oldUsd: 80000,
    features: [
      "Enterprise features",
      "Real-time chat/analytics",
      "Complex admin panel",
      "High security",
      "Priority support",
      "6+ months maintenance",
    ],
  },
];



export const projects = [
    {
      title: "JuveniQ Company Website",
      description: "The official JuveniQ website showcasing our services, portfolio, and contact information to engage clients and highlight our expertise.",
      image: project1Image,
      technologies: ["React", "Tailwind CSS", "Node.js"],
      category: "Corporate",
      features: [
        "Service showcase",
        "Interactive portfolio gallery",
        "Contact & inquiry forms",
        "Blog section",
        "SEO optimization"
      ],
      impact: "Improved brand visibility.",
      link: null,
    },
    {
      title: "GigKasi",
      description: "A hyper-local platform connecting service providers and seekers in your neighborhood, matching skills to needs instantly.",
      image: project2Image,
      technologies: ["React Native", "Firebase Auth", "Firestore", "Cloud Functions"],
      category: "Marketplace",
      features: [
        "Real-time geolocation matching",
        "In-app chat",
        "Ratings & reviews",
        "Secure payments",
        "Job posting & bidding"
      ],
      impact: "A work in development, Follow our social media accounts for early access and updates",
      link: null,
    },
    {
      title: "Resume / CV Maker",
      description: "A user-friendly application that allows job seekers to create, customize, and download professional resumes and CVs in multiple formats.",
      image: project3Image,
      technologies: ["React", "HTML-to-PDF", "Styled Components", "TailWindcss"],
      category: "Productivity",
      features: [
        "Template selection",
        "Click-and-add editor",
        "PDF export",
      ],
      impact: "Helped users build polished resumes, reducing job application time by 30%.",
      link: "https://jcv-maker.netlify.app/",
    },

  ];
