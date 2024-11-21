import styled from "styled-components";
import Heading from "./Styled-Heading";
import avatar from '../assets/images/avatar.jpg';

const AboutWrapper = styled.div``;

const AboutContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 6rem 0;
    align-items: center;
`;

const AboutText = styled.div`
    h2 {
        color: ${props => props.theme.secondary};
    }

    span {
        font-weight: bold;
    }

    @media screen and (min-width: 690px) {
        flex: 2 0;
        margin-left: 2rem;
    }
`;

const Avatar = styled.div`
    aspect-ratio: 1;
    width: 100%;
    background-image: url(${avatar});
    background-size: contain;
    border-radius: 50%;
    margin-bottom: 2rem;

    @media screen and (min-width: 690px) {
        flex: 1 0;
        margin-bottom: 0;
    }
`;

export default function About() {
    return (
        <AboutWrapper id="content-start">
            <Heading>About</Heading>
            <AboutContent>
                <Avatar/>
                <AboutText>
                    <h2>Hello, my name is Diego Marrs.</h2>
                    <br />
                    <p><span>I am a early-career software engineer with a passion for solving business problems and bringing ambitious ideas to life.</span></p>
                    <br />
                    <p>I graduated with a Bachelor of Science in Software Engineering in 2024, and I currently work as a software development instructional specialist at EdX. My responsibilities include teaching students various software development technologies and concepts, troubleshooting and debugging full-stack applications, and reviewing code with best practices for code structure and clarity in mind.</p>
                    <br />
                    <p>I have experience working with TypeScript, Express, React, PostgreSQL, Prisma, Java, Spring Boot, Docker, and various AWS services. I am driven by a desire to solve complex business problems by leveraging my existing skillset, and providing value to teams.</p>
                </AboutText>
            </AboutContent>
        </AboutWrapper>
    );
}