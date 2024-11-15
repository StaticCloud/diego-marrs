import React from "react";
import styled, { css } from "styled-components";

const StyledSection = styled.section<{ $background?: string }>`
    width: 100svw;
    height: 100svh;
    background-color: #1E3554;

    ${(props) => 
        props.$background && css`
            background-image: ${props.$background};
        `
    }
`;

export default function Section({ children, background }: { children: React.ReactNode, background?: string }) {
    return (
        <StyledSection $background={background}>
            {children}
        </StyledSection>
    );
}