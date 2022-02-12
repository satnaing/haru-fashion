import Image from "next/image";
import Link from "next/link";
import AppHeader from "../components/Header/AppHeader";

const Custom404 = () => (
  <>
    <AppHeader title="Page Not Found - Haru Fashion" />
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
