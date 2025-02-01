import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/Image(2).png"
                    alt="土星のアイコン"
                    className={styles.aikon}
                    width={133}
                    height={133}
                    priority
                />
            </Link>
            <Menu />
        </header>
    );
}