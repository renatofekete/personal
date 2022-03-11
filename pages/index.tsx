import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
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
      </main>

      <footer>
        <span>Renato Fekete &copy; 2022</span>  
      </footer>
    </>
  )
}

export default Home
