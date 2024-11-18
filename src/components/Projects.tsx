import styled from "styled-components";
import projects from "../data/projects-data";
import project from "../utils/projects-interface";
import Heading from "./Styled-Heading";

const ProjectsWrapper = styled.div``;

const SingleProjectWrapper = styled.div`
    padding: 3rem 0;
    display: flex;
    align-items: center;

    p {
        margin: 1rem 0;
    }
`;

const SingleProjectDetails = styled.div`
    a, a:visited {
        color: ${props => props.theme.secondary};
    }

    i[class^="devicon-"] {
        font-size: 1.6rem;
        margin-right: 7px;
    }

    h2 {
        margin-right: .5rem;
    }

    h3 {
        display: inline-block;
        border-bottom: 2px ${props => props.theme.secondary} solid;
    }

    span {
        display: flex;
    }
`;

function Project({ project }: { project: project }) {
    return (
        <SingleProjectWrapper>
            <SingleProjectDetails>
                <span>
                    <h2>{project.title}</h2>
                    {project.github && (
                        <a href={project.github}>
                            <i className="devicon-github-original"></i>
                        </a>
                    )}
                </span>
                <p>{project.description}</p>
                {project.deployedPage && (
                    <a href="">
                        <h3>Visit Project</h3>
                    </a>
                )}
            </SingleProjectDetails>
        </SingleProjectWrapper>
    );
}

export default function Projects() {
    return (
        <ProjectsWrapper>
            <Heading>Projects</Heading>
            {projects.map((project, i) =>
                <Project project={project} key={i} />
            )}
        </ProjectsWrapper>
    );
}