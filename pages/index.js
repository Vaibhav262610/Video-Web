import Navbar from '@/components/Navbar'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Experience from '@/components/Experience'
import Work from '@/components/Work'
import WhyMe from '@/components/WhyMe'
import Contact from '@/components/Contact'
// import Parallex from '@/components/Parallex'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
          <title>Vaibhav Rajpoot - Video Editor</title>
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Oswald:wght@400;700&display=swap" rel="stylesheet" />
      <Navbar />
      <Header />
      <Experience />
      <Work />
      <WhyMe />
      <Contact />
      {/* <Parallex /> */}



     
    </>
  )
}
