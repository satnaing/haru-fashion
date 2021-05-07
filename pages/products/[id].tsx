import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import Items from "../../components/Util/Items";
// import { getStaticProps } from "../test2";

const Product = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  // console.log(post);
  return (
    <>
      <p>Post haha: {post.title}</p>
      {/* <p>Post id: {id}</p> */}
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const post = await res.json();
  // console.log(params.id);
  return { props: { post } };
}

export default Product;
