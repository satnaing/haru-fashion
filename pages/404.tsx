import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => (
  <>
    <Head>
      <title>Page not found!</title>
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
      <h1 className="text-2xl">Oops! Page Not Found!</h1>
      <Image
        src="/bg-img/404.svg"
        alt="404 Page Not Found"
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

export default Custom404;
