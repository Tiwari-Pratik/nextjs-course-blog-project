import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostspage = (props) => {
  return <AllPosts posts={props.posts} />;
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
