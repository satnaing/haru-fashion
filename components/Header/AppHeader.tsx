import Head from "next/head";
import React from "react";
import Script from "next/script";

type Props = {
  title?: string;
  desc?: string;
  keywords?: string;
};

// "Discover affordable and fashionable men's and women's clothing online at Haru Fashion. Free Returns ✓ 1000+ New Arrivals Dropped Daily."
const defaultDesc =
  "Haru Fashion e-commerce developed with Next.JS. Coded with 🖤 by Sat Naing (satnaing.dev).";
const defaultKeywords =
  "Women's &amp; Men's Clothing, Shop Online Haru Fashion";

const AppHeader: React.FC<Props> = ({
  title = "Haru Fashion",
  desc = defaultDesc,
  keywords = defaultKeywords,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    {/* Apple Touch Icon  */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />

    {/* To run web application in full-screen */}
    <meta name="apple-mobile-web-app-capable" content="yes" />

    {/* Apple Status Bar Style */}
    <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>

    {/* Open Graph meat tags */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Haru Fashion" />
    <meta property="og:url" content="https://haru-fashion.vercel.app/" />
    <meta
      property="og:image"
      content="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fourshop.cdca0c1d.png&w=3840&q=75"
    />
    <meta property="og:description" content={desc} />

    {/* Twitter Card */}
    <meta name="twitter:card" content="app" />
    <meta name="twitter:site" content="@satnaing.dev" />
    <meta name="twitter:description" content={desc} />

    <meta name="author" content="Sat Naing" />
    <meta name="description" content={desc}></meta>
    <meta name="keywords" content={keywords}></meta>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/manifest.webmanifest" />
    <meta name="theme-color" content="#282828" />

    {/* Google Site Verification */}
    <meta
      name="google-site-verification"
      content="xZHtiBkQ4xQ7IoG0o33E2vfbnx6NHYrGhNu-cjhX8Ng"
    />

    {/* Global site tag (gtag.js) - Google Analytics  */}
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-2GWCTE59TF"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2GWCTE59TF');`}
    </Script>
  </Head>
);

export default AppHeader;
