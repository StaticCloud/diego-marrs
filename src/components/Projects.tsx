import styled from "styled-components";
import projects from "../data/projects-data";
import Project from "./Project";
import Heading from "./Styled-Heading";

const ProjectsWrapper = styled.div``;

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