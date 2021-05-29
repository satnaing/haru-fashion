import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const ComingSoon = () => (
  <>
    <Head>
      <title>Coming Soon!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
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
      <link rel="manifest" href="/favicons/site.webmanifest" />
    </Head>
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-3xl tracking-wider">Coming Soon!</h1>
      <h2 className="text-2xl text-gray500">
        This page has not been created yet!
      </h2>
      <Image
        src="/bg-img/coding.svg"
        alt="Not created yet"
        width={400}
        height={300}
      />
      <span className="text-gray400">
        Go back to{" "}
        <Link href="/">
          <a className="underline font-bold hover:text-gray500">home page</a>
        </Link>
        ?
      </span>
    </div>
  </>
);

export default ComingSoon;
