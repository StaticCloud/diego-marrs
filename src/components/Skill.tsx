import styled from "styled-components";
import skill from "../utils/skills-interface";

const SkillWrapper = styled.div`
    flex: 1 0 50%;
    padding: 0 1.5rem 1.5rem 0;
`;

const SkillHeading = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: .5rem;

    i[class^="devicon-"] {
        font-size: 1.6rem;
        margin-right: 7px;
        color: ${props => props.theme.secondary}
    }
`;

export default function Skill({ skill }: { skill: skill }) {
    return (
        <SkillWrapper>
            <SkillHeading>
                <i className={`devicon-${skill.icon}`}></i>
                <h3>{skill.skill}</h3>
            </SkillHeading> 
            <p>{skill.description}</p>
        </SkillWrapper>
    );
}