import Head from "next/head";
import { Fragment } from "react";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";


export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to Fluber's Blog</title>
        <meta name="description" content="Fluber's Blog"/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {  
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  }

}