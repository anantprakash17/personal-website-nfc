import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Typing from '../components/typed-activity'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Anant Prakash</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.p}>I am currently in my third year of <b>Computer Science</b> at McMaster University. Below, 
          you will find links to my social media pages where you can connect with me and we
          can work on some fun stuff together!
        </p>
        <p> Probably working on something related to <Typing/> </p>
      </section>
      <section className={utilStyles.contacts}>
          <div className='row'>
            <div className='column'>
            <Link href='mailto:anantprakash92@gmail.com'>
              <img className='gmail' src='/images/gmail.png'/>
            </Link>
            </div>
            <div className='column'>
              <Link href='https://www.linkedin.com/in/anantprakash17/'>
                <img className='linkedin' src='/images/linkedin.png'/>
              </Link>
            </div>
            <div className='column'>
              <Link href='https://github.com/anantprakash17'>
                <img className='github' src='/images/github.png'/>
              </Link>
            </div>
            <div className='column'>
              <Link href='https://www.instagram.com/anant_701/'>
                <img className='ig' src='/images/ig.png'/>
              </Link>
            </div>
          </div>
        <style jsx>{`
          /* Three image containers (use 25% for four, and 50% for two, etc) */
          .column {
            float: left;
            width: 23%;
            padding: 5px;
          }
          
          /* Clear floats after image containers */
          .row::after {
            content: "";
            clear: both;
            display: table;
          }
          .linkedin{
              width:50%;
              padding-left: 10px;
              height:auto;
          }
          .gmail {
            padding-left: 10px;
            width: 67%;
          }
          .github {
            padding-left: 10px;
            width: 50%;
          }

          .ig {
            padding-left: 10px;
            width: 50%;
          }
          .event-title{
              text-align:center;
          }
        `}
        </style>
      </section>
    </Layout>
  )
}