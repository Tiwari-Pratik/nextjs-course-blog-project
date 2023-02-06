import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Pratik's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const FeaturedPosts = getFeaturedPosts();

  return {
    props: {
      posts: FeaturedPosts,
    },
    revalidate: 1800,
  };
};

export default HomePage;
