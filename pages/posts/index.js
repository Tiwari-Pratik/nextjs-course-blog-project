import { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/head";

const AllPostspage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all my blogs" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
};

export default AllPostspage;
