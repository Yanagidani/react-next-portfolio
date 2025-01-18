import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

import Category from "../Category";
import Date from "../Date";

import type { Blog } from "@/app/_libs/microcms";

type Props = {
    blog: Blog[];
};

export default function NewsList({ blog }: Props) {
    if (blog.length === 0) {
        return <p>記事がありません</p>;
    }
    return (
        <ul>
            {blog.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link href={`/blog/${article.id}`} className={styles.link}>
                        {article.thumbnail ? (
                            <Image
                                src={article.thumbnail.url}
                                alt=""
                                className={styles.image}
                                width={article.thumbnail.width}
                                height={article.thumbnail.height}
                            />
                        ) : (
                            <Image
                                className={styles.image}
                                src="/no-mage.png"
                                alt="No Image"
                                width={1200}
                                height={630}
                            />
                        )}

                        <dl className={styles.content}>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category category={article.category} />
                                <Date date={article.publishedAt ??
                                    article.createdAt} />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>

    );
}