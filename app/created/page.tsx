import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
        <h1>プロフィールを見に来てくれてありがとう！</h1>
       <Image
          src="/sora.jpg"
          alt="プロフィール写真"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <h2 className={styles.name}>名前</h2>
        <p>柳谷 果音</p>
      </section>

      <section className={styles.hobbies}>
        <h2>学校</h2>
        <p>京都デザイン＆テクノロジー専門学校</p>
      </section>

      <section className={styles.hobbies}>
        <h2>専攻</h2>
        <p>ホワイトハッカー専攻</p>
      </section>

      <section className={styles.hobbies}>
        <h2>学んでいること</h2>
        <p>情報セキュリティについて学んでいます。</p>
      </section>

      <section className={styles.skills}>
        <h2>資格</h2>
        <ul className={styles.skillList}>
          <li>AI900</li>
          <li>Microsoft Office Specialist Excel</li>
          <li>Microsoft Office Specialist PowerPoint</li>
          <li>第一種普通免許</li>
          <li>漢検準2級</li>
          <li>英検準2級</li>
        </ul>
      </section>

      <section className={styles.hobbies}>
        <h2>趣味</h2>
        <p>絵を描くこと、音楽を聴くこと</p>
      </section>

      <section className={styles.create}>
        <h2>制作物</h2>
        <p>
          自己紹介サイト<br />
        </p>
          <a href="https://yanagidani.github.io/about-me/">https://yanagidani.github.io/about-me/</a>
      
        <br />
        <p>ポケモン図鑑サイト<br /></p>   
          <a href="https://yanagidani.github.io/pokemon/">https://yanagidani.github.io/pokemon/</a>
          <br />

        <p>Intel企業プロジェクト 作成中</p>

      </section>

    </div>
  );
}
