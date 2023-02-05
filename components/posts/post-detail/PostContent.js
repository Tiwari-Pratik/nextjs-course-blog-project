import ReactMarkdown from "react-markdown";
import styles from "./PostContent.module.css";
import PostHeader from "./PostHeader";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJs",
  image: "getting-started-nextjs.png",
  date: "2023-01-31",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
