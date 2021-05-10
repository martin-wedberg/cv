import { useRouter } from 'next/router'
import Head from 'next/head'
import BackButton from '../components/projectPage/backButton/backButton'
import ProjectHero from '../components/projectPage/projectHero/projectHero'
import Overview from '../components/projectPage/overview/overview'
import Preview from '../components/projectPage/preview/preview'
import Process from '../components/projectPage/process/process'
import Takeaways from '../components/projectPage/takeaways/takeaways'

export default function ProjectPage() {
  const router = useRouter()
  const { project } = router.query

  return (
    <div>
      <Head>
        <title>{project}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <BackButton/>
      <ProjectHero title={project}/>
      <Overview/>
      <Preview/>
      <Process/>
      <Takeaways/>
    </div>
  )
}
