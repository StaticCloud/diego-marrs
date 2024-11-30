import styled from "styled-components";
import { languages, librariesFrameworks, tools } from "../data/skills-data";
import Skill from "./Skill";
import Heading from "./Styled-Heading";

const SkillsWrapper = styled.div``;

const Category = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CategoryHeading = styled.h2`
    margin: 1.5rem 0;
    color: ${props => props.theme.secondary};
`;

export default function Skills() {
    return (
        <SkillsWrapper>
            <Heading>Skills</Heading>
            <CategoryHeading>Languages</CategoryHeading>
            <Category>
                {languages.map((language, i) =>
                    <Skill key={i} skill={language} />
                )}
            </Category>
            <CategoryHeading>Libraries & Frameworks</CategoryHeading>
            <Category>
                {librariesFrameworks.map((libFramework, i) =>
                    <Skill key={i} skill={libFramework} />
                )}
            </Category>
            <CategoryHeading>Tools</CategoryHeading>
            <Category>
                {tools.map((tool, i) =>
                    <Skill key={i} skill={tool} />
                )}
            </Category>
        </SkillsWrapper>
    );
}