import styled from "styled-components";
import Heading from "./Styled-Heading";
import avatar from '../assets/images/avatar.jpg';

const AboutWrapper = styled.div``;

const AboutContent = styled.div`
    display: flex;
    padding: 4rem 0;
    align-items: center;
`;

const AboutText = styled.div`
    margin-left: 2rem;
    flex: 2 0;

    h2 {
        color: ${props => props.theme.secondary};
    }
`;

const Avatar = styled.div`
    aspect-ratio: 1;
    flex: 1 0;;
    background-image: url(${avatar});
    background-size: contain;
    border-radius: 50%;
    border: 4px ${props => props.theme.secondary} solid;
`;

export default function About() {
    return (
        <AboutWrapper>
            <Heading>About</Heading>
            <AboutContent>
                <Avatar/>
                <AboutText>
                    <h2>My name is Diego Marrs, I am a software engineer.</h2>
                    <br/>
                    <p>I am a early-career software engineer with a passion for solving business problems and bringing ambitious ideas to life. I've had exposure to various technologies working as an instruction specialist for edX's software development bootcamps, and I continue to learn and grow outside of work by building projects that challenge and encourage me to further understand unfamiliar yet powerful technologies.</p>
                </AboutText>
            </AboutContent>
        </AboutWrapper>
    );
}