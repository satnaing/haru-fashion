import Image from "next/image";
import Link from "next/link";
import AppHeader from "../components/Header/AppHeader";

const ComingSoon = () => (
  <>
    <AppHeader title="Coming Soon!" />
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
