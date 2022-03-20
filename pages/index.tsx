import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import Footer from '../components/Footer'
import Page from '../components/Page'



const Home: NextPage = () => { 
  
  return (
    <Page>
      <Head>
        <title>Renato Fekete</title>
        <meta name="description" content="Personal website of Renato Fekete"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I'm Renato!</h1>
        <p>And this is my place where I'll store projects and where I'll play around with technology that I want to learn.</p>
        <p>This website is a constant work in progress, and I'll change it a lot.</p>
      </main>
    </Page>  
  )
}

export default Home
