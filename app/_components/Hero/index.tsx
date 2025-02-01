import Image from "next/image";
import styles from "./index.module.css";

type Props ={
    title: string;
    sub: string;
};

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


export default function Hero({ title, sub }: Props) {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.sub}>{sub}</p>
            </div>
            {/* 星を生成 */}
                {generateStars()}       
            <Image
                className={styles.bgimg}
                src="/a.jpg"
                alt=""
                width={4000}
                height={1200}
            />
        </section>
    );
}