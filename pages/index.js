import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
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
