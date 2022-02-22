import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  desc?: string;
  keywords?: string;
};

const defaultDesc =
  "Discover affordable and fashionable men's and women's clothing online at Haru Fashion. Free Returns ✓ 1000+ New Arrivals Dropped Daily.";
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
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
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
  </Head>
);

export default AppHeader;
