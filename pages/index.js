import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState } from 'react'
import ProgressBar from './components/ProgressBar'

export default function Home() {
 
  const [completed, setCompleted] = useState(0);
  const [loaded, isLoaded] = useState(true)
  let interval;

  useEffect(() => {
      const interval = setInterval(() => setCompleted((prev) => {
        if (prev === 99) {
          clearInterval(interval);
          setTimeout(() => {
          isLoaded(false)
          }, 1000)
        }
        return prev + 1;
      }), 100);
  }, [interval]);
  
  const callAPI = async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();
      console.log(data);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Vote Here!</title>
        <meta name="description" content="Voting App made with NextJS and MongoDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

    
        { loaded ?  <ProgressBar bgcolor="#e0e0de" completed={completed} loaded={loaded} />  : 
        <header className="flex border-8 items-center justify-evenly border-sky-500 py-2" >
            <button className="border-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded">
              Menu
            </button>
            <button className="border-4 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border-green-500 hover:border-transparent rounded">Login</button>
        </header>
        }   
      
      </main>
     

  
    </div>
  )
}
