import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <a href="/created">プロフィール</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/blog">ブログ</a>
                    </li>
                    <li className={styles.item}>
                        <a href="/contact">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©︎ SIMPLE. ALL Rights Reserved 2024</p>
        </footer>
    );
}
