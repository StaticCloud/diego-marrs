import styled from "styled-components";

const LandingWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    h1 {
        font-weight: bold;
        font-size: 2.5rem;
        border-bottom: 4px ${props => props.theme.secondary} solid;
        display: inline-block;
    }
`;

const LandingContent = styled.div``;

const Icons = styled.div`
    margin-top: 1rem;

    i[class^="devicon-"] {
        color: white;
        font-size: 1.6rem;
        margin-right: 7px;
    }

    & i:last-child {
        margin-right: 0;
    }
`;

export default function Landing() {
    return (
        <LandingWrapper>
            <LandingContent>
                <p>Hello, my name is</p>
                <h1>Diego Marrs</h1>
                <Icons>
                    <i className="devicon-typescript-plain"></i>
                    <i className="devicon-java-plain"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-postgresql-plain"></i>
                    <i className="devicon-prisma-original"></i>
                    <i className="devicon-spring-original"></i>
                    <i className="devicon-amazonwebservices-plain-wordmark"></i>
                    <i className="devicon-docker-plain"></i>
                </Icons>
            </LandingContent>
        </LandingWrapper>
    )
}