import styles from "./page.module.css";
import Image from "next/image";
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_BLOG_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
    const data = await getBlogList({
        limit: TOP_BLOG_LIMIT,
    });
    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>My Portfolio</h1>
                    <p className={styles.description}>
                        これは、ポートフォリオです。
                    </p>
                </div>
                <Image
                    className={styles.bgimg}
                    src="/img-mv.jpg"
                    alt=""
                    width={4000}
                    height={1200}
                />
            </section>
            <section className={styles.blog}>
                <h2 className={styles.blogTitle}>Blog</h2>
                <BlogList blog={data.contents} />
                <div className={styles.blogLink}>
                    <ButtonLink href="/blog">もっとみる</ButtonLink>
                </div>
            </section>
        </>
    );
}