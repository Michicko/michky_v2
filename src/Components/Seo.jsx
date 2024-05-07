/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  siteName,
  ogImage,
}) {
  const DOMAIN = "https://michky.netlify.app/";
  const DEFAULT_OG_IMAGE = "/logo512.png";
  return (
    <Helmet>
      <title key="title">Michael Otaigbe (Solomon)- {title}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={'website'} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content={"en_IE"} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={DOMAIN} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content={1200} />
      <meta key="og_image:height" property="og:image:height" content={603} />
      <meta name="robots" content="index,follow" />
      <meta
        key={"twitter:card"}
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key={"twitter:site"} name="twitter:site" content="kellexschools" />
      <meta
        key={"twitter:creator"}
        name="twitter:creator"
        content="kellexschools"
      />
      <meta key={"twitter:title"} name="twitter:title" content={description} />
      <link rel="canonical" href={DOMAIN} />
    </Helmet>
  );
}
