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

const SingleProjectDetails = styled.div``;

function Project({ project }: { project: project }) {
    return (
        <SingleProjectWrapper>
            <SingleProjectDetails>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </SingleProjectDetails>
        </SingleProjectWrapper>
    );
}

export default function Projects() {
    return (
        <ProjectsWrapper>
            <Heading>Projects</Heading>
            {projects.map((project, i) => 
                <Project project={project} key={i}/>
            )}
        </ProjectsWrapper>
    );
}