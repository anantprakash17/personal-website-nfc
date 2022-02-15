import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Typing from '../components/typed-activity'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Free Cash</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.p}>
          You're probably thinking, "no way this is real right?". Well you're wrong. What is it? If you've seen people get free food around
          campus, you've probably heard of <b className={utilStyles.button}>Wealthsimple Cash</b>. If not, here's a quick breakdown. 
        </p>
        <p className={utilStyles.p}>
          Its a service made by Wealthsimple which is essentially trying to replace e-transfer. If it succeeds or not, who knows. But here's 
          the fun part. In an atempt to get more people to use it they're handing out a free $25 sign up bonus. They also have weekly free
          food that they give out.
          <b className={utilStyles.button}> YOU CAN MOVE THE MONEY TO YOUR BANK</b>. Now full disclosure, I also get a $25 for every time
          you use the code, but hey, free money is free money.
        </p>

        <p className={utilStyles.p}> 
          How do you get your money? Simple. Click the button below and make an account. Make sure to select your occupation as Student so
          you can get free food around campus. In case it doesn't give you my code there, here it is: 58XBN1. Enjoy your free money :)
        </p>
        <button type="button" className={utilStyles.button}> <a href='http://ws.cash/invite/$anant_701' target='_blank' className={utilStyles.link}> To the free money! </a> </button>
        <br/>
        <br/>
        <p className={utilStyles.p}> 
          Also, if you have any questions, feel free to DM lol.
        </p>
      </section>
      <section className={utilStyles.contacts}>
            <div className='column'>
              <button type="button" className={utilStyles.button}> <a href='https://www.instagram.com/anant_701/' target='_blank' className={utilStyles.link}> anant_701 </a> </button>
            </div>
        <br/>
        <br/>
        <br/>
        <style jsx>{`
          .column {
            float: left;
            width: 21%;
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
              height:auto;
          }
          .gmail {
            width: 67%;
          }
          .github {
            width: 50%;
          }

          .ig {
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