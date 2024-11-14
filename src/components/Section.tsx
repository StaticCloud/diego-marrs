import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`

`;

export default function Section({ children }: { children: React.ReactNode }) {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    );
}