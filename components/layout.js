import Head from "next/head";
import styles from "./layout.module.css";
import utileStyles from "../styles/utiles.module.css";
import Link from "next/link";

const name = "Kkr Oga";

export const siteTitle = "Next.js Blog";

export default function layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/fabicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utileStyles.borderCircle} ${styles.headerHomeImage}`}
              src="/images/profile.png"
            />
            <h1 className={utileStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              className={`${utileStyles.borderCircle}`}
              src="/images/profile.png"
            />
            <h1 className={utileStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←　ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}
