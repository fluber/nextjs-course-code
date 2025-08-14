import { Fragment } from "react";
import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started with Next.js",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production ",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting Started with Next.js",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production ",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs3",
//     title: "Getting Started with Next.js",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production ",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs4",
//     title: "Getting Started with Next.js",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a the React framework for production ",
//     date: "2022-02-10",
//   },
// ];
export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All Posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}
