import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Page from '../../components/Page'
import styles from './single.module.css'

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  })

  const res = await client
    .getEntries({
      content_type: 'project',
    })
    .then((response) => response.items)

  const paths = res.map((project) => {
    return {
      params: {
        slug: project.fields.slug,
      },
    }
  })

  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  })

  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug,
    include: 10,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      project: items[0],
      revalidate: 1,
    },
  }
}

const SingleProject = ({ project }) => {
  if (!project) {
    return (
      <Page>
        <h1>No recipe</h1>
      </Page>
    )
  }

  const { projectDescription, projectTitle } = project.fields

  return (
    <>
      <Page>
        <article className={styles.article}>
          <h1>{projectTitle}</h1>
          <div className={styles.content}>
            {documentToReactComponents(projectDescription)}
          </div>
        </article>
      </Page>
    </>
  )
}

export default SingleProject
