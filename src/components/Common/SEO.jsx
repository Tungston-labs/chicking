import { Helmet } from "react-helmet-async";

const DEFAULT_SITE_NAME = "Chicking";
const DEFAULT_TITLE = "Chicking - Global Halal Quick-Service Restaurant Franchise";
const DEFAULT_DESCRIPTION =
  "Explore Chicking franchise opportunities with a global halal quick-service restaurant brand backed by proven operations and international growth support.";
const SITE_URL = "http://178.248.112.5";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "",
  image = "/images/logo.svg",
  type = "website",
  noIndex = false,
  schema = null,
}) => {
  const pageTitle = title ? `${title}` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${canonicalPath || (typeof window !== "undefined" ? window.location.pathname : "")}`;
  const imageUrl = image?.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data Groundwork */}
      {schema ? (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Chicking",
            "url": SITE_URL,
            "logo": `${SITE_URL}/images/logo.svg`,
            "description": DEFAULT_DESCRIPTION,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+971-4-259-4808",
              "contactType": "franchise inquiry",
              "email": "franchise@chickingglobal.com",
            },
          })}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
