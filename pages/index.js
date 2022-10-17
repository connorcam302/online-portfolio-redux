import Head from 'next/head'
import Image from 'next/image'
import ProjectList from '../components/ProjectList'

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development'></meta>
      </Head>

      <ProjectList projects={data}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects/all')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
