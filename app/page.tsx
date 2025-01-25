import styles from "./page.module.css";
import Image from "next/image";
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import ButtonLink from "@/app/_components/ButtonLink";

function generateStars() {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      const style = {
        top: `-${3}vh`, // ランダムなY位置
        left: `${Math.random() * 100}vw`, // ランダムなX位置
        animationDelay: `${Math.random() * 5}s`, // ランダムな開始タイミング
        animationDuration: `${4 + Math.random() * 3}s`, // ランダムな速度
      };
      stars.push(<div key={i} className={styles.star} style={style}></div>);
    }
    return stars;
  }

export default async function Home() {
  const data = await getBlogList({
    limit: TOP_BLOG_LIMIT,
  });

  return (
    <>
      {/* トップセクション */}
      <section className={styles.top}>
        {/* 星を生成 */}
        {generateStars()}
        <div>
          <h1 className={styles.title}>My Portfolio</h1>
          <p className={styles.description}>
            これは、ポートフォリオです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/a.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>

      {/* ブログセクション */}
      <div className={styles.container}>
            <section className={styles.blog}>
                <h2 className={styles.blogTitle}>Blog</h2>
                <BlogList blog={data.contents} />
                <div className={styles.blogLink}>
                <ButtonLink href="/blog">もっとみる</ButtonLink>
                </div>
            </section>
        </div>
    </>
  );
}
