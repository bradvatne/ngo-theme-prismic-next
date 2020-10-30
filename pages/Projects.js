import { getAllProjectsForHome} from '../lib/api';

const Projects = ({allProjects}) => {
    const heroProject = allProjects[0].node;
    const allProjects = allProjects.slice(1)
    return <div>

    </div>
}

export async function getStaticProps() {
    const allProjects = await getAllProjectsForHome()
    console.log(allProjects);
    return {
        props: {allProjects}
    }
}

export default Projects;

