import { NextPage } from 'next'
import { createClient } from 'contentful'
import Page from '../components/Page'
import Link from 'next/link'
import styles from './projects.module.css'

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
      projects: res.items,
    }
  }
}


const projects: NextPage = ({projects} : any) => {
  return (
    <>
      <Page>
        <div className={styles.list}>
        {projects.map((project: any) => {
          return(
            <p key={project.fields.title}>
              <Link href={`/project/${project.fields.slug}`}>{project.fields.projectTitle}</Link>
            </p>
          )
        })}
        </div>
      </Page>
    </>
  )
}

export default projects