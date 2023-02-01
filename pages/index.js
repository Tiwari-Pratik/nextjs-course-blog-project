import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-01-31",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-01-31",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-01-31",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with NextJs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a react framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2023-01-31",
  },
];
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
