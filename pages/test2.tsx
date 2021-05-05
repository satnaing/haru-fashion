import { GetStaticProps } from "next";

export default function Home() {
  return <div>Hello World</div>;
}

export async function getServerSideProps(context) {
  console.log(context.req.cookies);
  return {
    props: {}, // will be passed to the page component as props
  };
}
