import Link from 'next/link'

export default function AboutMe() {
    return (
        <>
          <h1>First Post</h1>
          <h2>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </h2>
        </>
      )
  }