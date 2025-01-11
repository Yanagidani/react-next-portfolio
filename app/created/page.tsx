import Image from "next/image";
import { getCreatedList } from "@/app/_libs/microcms";
import { CREATED_LIST_LIMIT } from "../_constants";
import styles from "./page.module.css";

export default async function Page(){
    const data = await getCreatedList({ limit: CREATED_LIST_LIMIT });
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>作品が登録されていません。</p>
            ):(
                <ul>
                    {data.contents.map((created) => (
                        <li key={created.id} className={styles.list}>
                            <Image
                                src={created.image.url}
                                alt=""
                                width={created.image.width}
                                height={created.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{created.name}</dt>
                                <dd className={styles.position}>{created.position}</dd>
                                <dd className={styles.profile}>{created.profile}</dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}