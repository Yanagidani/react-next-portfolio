import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <section className={styles.intro}>
      <br />
        <h1>プロフィールを見に来てくれてありがとう！<br></br></h1>
        {/* 自己紹介の写真 */}
        <br />
        <br />
        <Image
          src="/profile.jpg" // プロフィール画像のパス
          alt="プロフィール写真"
          width={200}
          height={200}
          className={styles.profileImage}
        />
                <br />
                <br />
        {/* 自己紹介文 */}
        <h2 className={styles.name}>名前</h2>
        <p>柳谷 果音</p>
      </section>
      
      <section className={styles.hobbies}>
        <h2>学校</h2>
        <p>京都デザイン＆テクノロジー専門学校</p>
      </section>
      <br />
      <br />
      <section className={styles.hobbies}>
        <h2>専攻</h2>
        <p>ホワイトハッカー専攻</p>
      </section>
      <br />
      <br />
      <section className={styles.hobbies}>
        <h2>学んでいること</h2>
        <p>情報セキュリティについて学んでいます。<br /></p>
      </section>
        <br />
        <br />
      {/* スキル一覧 */}
      <section className={styles.skills}>
        <h2>資格</h2>
        <ul className={styles.skillList}>
          <li>AI900</li>
          <li>Microsoft Ofice Specialist Excel</li>
          <li>Microsoft Ofice Specialist PowerPoint</li>
          <li>第一種普通免許</li>
          <li>漢検準２級</li>
          <li>英検準２級</li>
        </ul>
      </section>
      <br />
      <br />
      {/* 趣味やその他の情報 */}
      <section className={styles.hobbies}>
        <h2>趣味</h2>
        <p>絵を描くこと、音楽を聴くこと</p>
      </section>
    </div>
  );
}
