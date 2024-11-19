import styled from "styled-components";
import project from "../utils/projects-interface";

const SingleProjectWrapper = styled.div`
    padding: 3rem 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

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

    @media screen and (min-width: 690px) {
        flex: 2 0;
        margin-left: 2rem;
    }
`;

const ProjectPreview = styled.div<{ $image: string }>`
    aspect-ratio: 1;
    width: 100%;
    background-image: url(${props => props.$image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-bottom: 2px ${props => props.theme.secondary} solid;
    margin-bottom: 2rem;

    @media screen and (min-width: 690px) {
        flex: 1 0;
        margin-bottom: 0;
    }
`;

export default function Project({ project }: { project: project }) {
    return (
        <SingleProjectWrapper>
            <ProjectPreview $image={project.preview}/>
            <SingleProjectDetails>
                <span>
                    <h2>{project.title}</h2>
                    {project.github && (
                        <a href={project.github} target="_blank">
                            <i className="devicon-github-original"></i>
                        </a>
                    )}
                </span>
                <p>{project.description}</p>
                {project.deployedPage && (
                    <a href={project.deployedPage} target="_blank">
                        <h3>Visit Project</h3>
                    </a>
                )}
            </SingleProjectDetails>
        </SingleProjectWrapper>
    );
}