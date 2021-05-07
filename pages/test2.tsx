import { GetStaticProps } from "next";

export default function Home({ post }) {
  return <div>Hello {post.title}</div>;
}

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products/1`);
  const post = await res.json();
  return { props: { post } };
}
