import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  desc?: string;
  keywords?: string;
};

// "Discover affordable and fashionable men's and women's clothing online at Haru Fashion. Free Returns ✓ 1000+ New Arrivals Dropped Daily."
const defaultDesc =
  "Haru Fashion e-commerce developed with Next.JS. Coded with 🖤 by Sat Naing (satnaing.dev).";
const defaultKeywords =
  "Haru Fashion, Online Shop, E-commerce, Sat Naing, NextJS";

const AppHeader: React.FC<Props> = ({
  title = "Haru Fashion",
  desc = defaultDesc,
  keywords = defaultKeywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <meta content={desc} name="description" />
      <meta content={keywords} name="keywords" />

      <meta content="follow, index" name="robots" />
      <meta content="#282828" name="theme-color" />
      <meta content="#282828" name="msapplication-TileColor" />

      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicons/favicon.ico" rel="shortcut icon" />
      <link href="/favicons/site.webmanifest" rel="manifest" />

      <meta property="og:url" content="https://haru-fashion.vercel.app" />
      <link rel="canonical" href="https://haru-fashion.vercel.app" />
      <meta property="og:site_name" content="Haru Fashion" />
      <meta property="og:description" content={desc} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://haru-fashion.vercel.app/og.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@satnaing.dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta
        name="twitter:image"
        content="https://haru-fashion.vercel.app/og.png"
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Head>
  );
};

export default AppHeader;
