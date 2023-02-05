import PostContent from "../../../components/posts/post-detail/PostContent";

const SinglePostPage = () => {
  return <PostContent />;
};
export const getStaticProps = (context) => {
  const { slug } = context.params;
};

export default SinglePostPage;
