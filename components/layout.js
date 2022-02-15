import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import TypingName from '../components/typed-intro'


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
      body {
        background-color: white;
      }
    `}</style>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              layout='intrinsic'
              alt={"free cash."}
            />
            <h1 className={utilStyles.headingXl}><TypingName/></h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={heading}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{heading}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  )
}