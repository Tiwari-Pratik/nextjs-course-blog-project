import { Fragment } from "react";
import PostContent from "../../../components/posts/post-detail/PostContent";
import { getPostData, getPostFiles } from "../../../lib/posts-util";
import Head from "next/head";

const SinglePostPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};
export const getStaticProps = (context) => {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  const filePaths = slugs.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: filePaths,
    fallback: false,
  };
};

export default SinglePostPage;
