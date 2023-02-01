import styles from "./PostGrid.module.css";
import PostItem from "./Postitem";
const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
