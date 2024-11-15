import React from "react";
import styled, { css } from "styled-components";

const StyledSection = styled.section<{ $background?: string }>`
    width: 100svw;
    height: 100svh;
    background-color: #24344A;

    ${(props) => 
        props.$background && css`
            background-image: ${props.$background};
        `
    }
`;

const StyledInner = styled.div`
    margin: 0 auto;
    height: 100%;

    @media only screen and (min-width: 910px) {
        width: 910px;
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