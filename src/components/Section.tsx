import React from "react";
import styled, { css } from "styled-components";

const StyledSection = styled.section<{ $background?: string }>`
    width: 100svw;
    background-color: ${props => props.theme.primary};

    ${(props) => 
        props.$background && css`
            background-image: url(${props.$background});
            background-position: center;
            background-size: cover;
        `
    }
`;

const StyledInner = styled.div`
    margin: 0 auto;
    padding: 2rem;

    @media only screen and (min-width: 960px) {
        width: 960px;
    }
`;

export default function Section({ children, background }: { children: React.ReactNode, background?: string }) {
    return (
        <StyledSection $background={background}>
            <StyledInner>
                {children}
            </StyledInner>
        </StyledSection>
    );
}