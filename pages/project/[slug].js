import { createClient } from 'contentful'

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

  //const res = await client.getEntry(context.params.id)

  const { items } = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug,
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
    },
  }
}

const SingleProject = ({ project }) => {
  console.log(project.fields.projectTitle)
  return (
    <>
      <h1>Hello from {project.fields.projectTitle}</h1>
    </>
  )
}

export default SingleProject
