import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { createClient } from 'contentful'

export const getStaticProps =  async () => {

  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID as string,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN as string,
  })

  const res = await client.getEntries({
    content_type: 'project'
  })

  return {
    props: {
      projects: res.items
    }
  }
}

const Home: NextPage = ({projects} : any) => {
  console.log(process.env.SPACE_ID) 
  console.log(projects)
  

  return (
    <>
      <Head>
        <title>Renato Fekete</title>
        <meta name="description" content="Personal website of Renato Fekete"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I'm Renato!</h1>
        <p>And this is my place where I'll store projects and where I'll play around with technology that I want to learn.</p>
        <p>This website is a constant work in progress, and I'll change it a lot.</p>
        <p>{process.env.NEXT_PUBLIC_SPACE_ID}</p>
      </main>

      <footer>
        <span>Renato Fekete &copy; 2022</span>  
      </footer>
    </>
  )
}

export default Home
