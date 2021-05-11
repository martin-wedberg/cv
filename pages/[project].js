import { useRouter } from 'next/router'
import Head from 'next/head'
import BackButton from '../components/projectPage/backButton/backButton'
import ProjectHero from '../components/projectPage/projectHero/projectHero'
import Overview from '../components/projectPage/overview/overview'
import Preview from '../components/projectPage/preview/preview'
import Process from '../components/projectPage/process/process'
import Takeaways from '../components/projectPage/takeaways/takeaways'

export default function ProjectPage(props) {
  console.log(props)

  return (
    <div>
      <Head>
        <title>{props.data.title}</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <BackButton/>
      <ProjectHero title={props.data.title} subtitle={props.data.subtitle} />
      <Overview 
        title={props.data.overview.title} 
        description={props.data.overview.description} 
        role={props.data.overview.role}
        client={props.data.overview.client}
        time={props.data.overview.time}
      />
      <Preview quote={props.data.quote} />
      <Process 
        title={props.data.process.title}
        methods={props.data.process.methods}
        technologies={props.data.process.technologies}
      />
      <Takeaways/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${context.params.project}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
