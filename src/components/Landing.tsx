import styled from "styled-components";
import StyledArrow from "./Styled-Arrow";
import { Link } from "react-scroll";

const LandingWrapper = styled.div`
    height: calc(100svh - 4rem);
    display: flex;
    align-items: center;
    position: relative;

    h1 {
        font-weight: bold;
        font-size: 2.5rem;
        border-bottom: 4px ${props => props.theme.secondary} solid;
        display: inline-block;
    }

    a {
        right: calc(50% - 20px);
        width: 40px;
        bottom: 40px;
        position: absolute;
    }
`;

const LandingContent = styled.div`
    animation-name: load;
    animation-duration: 1s;

    @keyframes load {
        from {
            opacity: 0;
            margin-bottom: 3rem;        
        }

        to {
            opacity: 1;
            margin-bottom: 0;
        }
    
    }
`;

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
            <Link to="content-start" smooth="true" offset={-32}>
                <StyledArrow/>
            </Link>
        </LandingWrapper>
    )
}