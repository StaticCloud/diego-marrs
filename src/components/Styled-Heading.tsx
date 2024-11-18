import styled from "styled-components";

const Heading = styled.h1`
    font-size: 2rem;
    border-bottom: 4px ${props => props.theme.secondary} solid;
    display: inline-block;
`;

export default Heading;