import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/myimage.png"
          alt="an image showing Pratik"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I'm Pratik</h1>
      <p>
        I blog about web development - especially about Javascript and React
      </p>
    </section>
  );
};

export default Hero;
