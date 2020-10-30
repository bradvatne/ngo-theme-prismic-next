import { useRouter } from 'next/router';
import ErrorPage from 'next/error'
import Head from 'next/head';
import { getAllProjectsWithSlug, getProjectAndMoreProjects } from '../../lib/api';

export default function Project({project, moreProjects}) {
    const router = useRouter();
    if (!router.isFallback && !post?._meta?.uid) {
        return <ErrorPage statusCode={404} />
      }
      return (
          <div>

          </div>
      )
}

export async function getStaticProps({params}) {
    const data = await getProjectAndMoreProjects(params.slug)

    return {
        props: {
            project: data?.post ?? null,
            moreProjects: data?.moreProjects ?? [],
        },
    }
}

export async function getStaticPaths() {
    const allProjects = await getAllProjectsWithSlug()
    return {
        paths: allProjects?.map(({node}) => `/projects/${node_meta.uid}`) || [],
        fallback: true,
    }
}

