import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, my name is Ben; I am web developer from Canada and this is my first time ever using Next.js!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn"> the Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
