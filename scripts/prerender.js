import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, "../dist");
const SITE_URL = "http://178.248.112.5";

const routes = [
  {
    path: "/",
    title: "Chicking - Global Halal Quick-Service Restaurant Franchise",
    description:
      "Explore Chicking franchise opportunities with a global halal quick-service restaurant brand backed by proven operations and international growth support.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Chicking",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.svg`,
      description:
        "Explore Chicking franchise opportunities with a global halal quick-service restaurant brand backed by proven operations and international growth support.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971-4-259-4808",
        contactType: "franchise inquiry",
        email: "franchise@chickingglobal.com",
      },
    },
  },
  {
    path: "/about-us",
    title: "About Us | Chicking Global Franchise",
    description:
      "Learn about Chicking's 20-year history, mission, operational excellence, and global quick-service restaurant franchise network.",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Us | Chicking Global Franchise",
      description:
        "Learn about Chicking's 20-year history, mission, operational excellence, and global quick-service restaurant franchise network.",
      url: `${SITE_URL}/about-us`,
      publisher: {
        "@type": "Organization",
        name: "Chicking",
        logo: `${SITE_URL}/images/logo.svg`,
      },
    },
  },
  {
    path: "/unique-propositions",
    title: "Unique Propositions | Chicking Franchise",
    description:
      "Discover Chicking's unique competitive advantages, major target markets, and proven halal QSR model across global markets.",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Unique Propositions | Chicking Franchise",
      description:
        "Discover Chicking's unique competitive advantages, major target markets, and proven halal QSR model across global markets.",
      url: `${SITE_URL}/unique-propositions`,
      publisher: {
        "@type": "Organization",
        name: "Chicking",
        logo: `${SITE_URL}/images/logo.svg`,
      },
    },
  },
  {
    path: "/global-presence",
    title: "Global Presence | Chicking Outlets Worldwide",
    description:
      "Explore Chicking's global presence across 36+ countries and 400+ locations in the Middle East, Europe, Africa, and Asia-Pacific.",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Global Presence | Chicking Outlets Worldwide",
      description:
        "Explore Chicking's global presence across 36+ countries and 400+ locations in the Middle East, Europe, Africa, and Asia-Pacific.",
      url: `${SITE_URL}/global-presence`,
      publisher: {
        "@type": "Organization",
        name: "Chicking",
        logo: `${SITE_URL}/images/logo.svg`,
      },
    },
  },
  {
    path: "/bmi",
    title: "Bites, Meals & Innovations (BMI) | Chicking",
    description:
      "Explore Chicking's commitment to culinary excellence, menu innovations, fresh quality ingredients, and 100% Halal certification.",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Bites, Meals & Innovations (BMI) | Chicking",
      description:
        "Explore Chicking's commitment to culinary excellence, menu innovations, fresh quality ingredients, and 100% Halal certification.",
      url: `${SITE_URL}/bmi`,
      publisher: {
        "@type": "Organization",
        name: "Chicking",
        logo: `${SITE_URL}/images/logo.svg`,
      },
    },
  },
  {
    path: "/management",
    title: "Leadership & Management Team | Chicking",
    description:
      "Meet the highly qualified and experienced leadership team behind Chicking's international growth, franchise management, and operational support.",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Leadership & Management Team | Chicking",
      description:
        "Meet the highly qualified and experienced leadership team behind Chicking's international growth, franchise management, and operational support.",
      url: `${SITE_URL}/management`,
      publisher: {
        "@type": "Organization",
        name: "Chicking",
        logo: `${SITE_URL}/images/logo.svg`,
      },
    },
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions (FAQ) | Chicking Franchise",
    description:
      "Find answers to common questions about Chicking franchise requirements, training, equipment, support, and business operations.",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "BFI will provide the design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. BFi will provide the design and 3D of the shop",
          },
        },
        {
          "@type": "Question",
          name: "Does Franchise can appoint the contractor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes.Franchise has to appoint the contractor locally",
          },
        },
        {
          "@type": "Question",
          name: "Who buy the kitchen equipment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Franchise can buy the equipment’s based on the specs approved by BFI. If the franchise needs support, BFI can assist in sourcing the equipment’s .",
          },
        },
        {
          "@type": "Question",
          name: "Gas or Electric?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Either Gas or Electric.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of training is provided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Restaurant Management, Food Safety, SOPs, Customer Service, and POS systems.\n\nTraining Location – Chicking HQ, Dubai.\nTraining Period – 3 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Is Opening Support provided?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Pre-opening and launch support is provided. Associated costs with regard to travel and accommodation shall be provided by the franchise.",
          },
        },
      ],
    },
  },
  {
    path: "/blog",
    title: "Latest News & Franchise Insights | Chicking Blog",
    description:
      "Stay updated with the latest news, industry insights, store openings, franchise opportunities, and behind-the-scenes stories from Chicking.",
  },
  {
    path: "/franchiseform",
    title: "Franchise Application Form | Chicking Opportunity",
    description:
      "Complete the Chicking franchise inquiry form to begin your journey toward owning a successful global QSR franchise outlet.",
  },
];

function prerender() {
  const indexHtmlPath = path.join(DIST_DIR, "index.html");

  if (!fs.existsSync(indexHtmlPath)) {
    console.error(`Dist index.html not found at ${indexHtmlPath}. Build first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(indexHtmlPath, "utf-8");

  for (const route of routes) {
    const canonicalUrl = `${SITE_URL}${route.path === "/" ? "" : route.path}`;

    let html = template;

    // Update <title>
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`);

    // Update <meta name="description">
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta\s+name="description"\s+content=".*?"\s*\/?>/gi,
        `<meta name="description" content="${route.description}" />`
      );
    } else {
      html = html.replace("</head>", `  <meta name="description" content="${route.description}" />\n</head>`);
    }

    // Add canonical & hreflang tags if missing
    const headExtra = `
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hrefLang="en" href="${canonicalUrl}" />
    <link rel="alternate" hrefLang="x-default" href="${canonicalUrl}" />
    ${
      route.schema
        ? `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>`
        : ""
    }
`;
    html = html.replace("</head>", `${headExtra}</head>`);

    // Determine target output directory
    const outputDir =
      route.path === "/" ? DIST_DIR : path.join(DIST_DIR, route.path.replace(/^\//, ""));

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.join(outputDir, "index.html");
    fs.writeFileSync(outputPath, html, "utf-8");
    console.log(`Pre-rendered: ${route.path} -> ${outputPath}`);
  }

  console.log("Static prerendering completed successfully.");
}

prerender();
