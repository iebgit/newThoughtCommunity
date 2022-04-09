import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>New Thought</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div>
        <div className='px-18 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>
              New Thought
            </span>{' '}
            is a place to connect, learn, and share with the global community 
          </h1>
          <h2>
            It's easy and free to post your thinking on the new thought revolution.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home
