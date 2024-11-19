import down from "../assets/images/chevron-down.svg";
import styled from "styled-components";

const StyledArrow = styled.div`
    background-image: url(${down});
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: ${props => props.theme.secondary};
    aspect-ratio: 1;
    width: 40px;
    position: relative;

    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    &:hover {
        cursor: pointer;
    }

    @keyframes bounce {
        0% {
            top: 0px;
        }

        50% {
            top: -5px;
        }

        100% {
            top: 0px;    
        }
    
    }
`

export default StyledArrow;