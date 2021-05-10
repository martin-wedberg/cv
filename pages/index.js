import { useEffect, useState } from 'react'
import Head from 'next/head'
import Hero from '../components/startPage/hero/hero'
import Projects from '../components/startPage/projects/projects'
import About from '../components/startPage/about/about'
import Media from '../components/startPage/media/media'
import Footer from '../components/startPage/footer/footer'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export default function HomePage() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getProjects() {
      const allProjects = await fetchEntries()
      setProjects([...allProjects])
    }
    getProjects()
  }, [])

  return (
    <div className={'smooth-scroll'}>
      <Head>
        <title>Martin Wedberg</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Hero/>
      <Projects projectItems={projects} />
      <About/>
      <Media/>
      <Footer/>
    </div>
  )
}
