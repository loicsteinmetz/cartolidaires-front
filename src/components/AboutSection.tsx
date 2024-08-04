import {SectionLayout} from "./SectionLayout.tsx";
import {SECTIONS} from "../constants/sections.ts";
import styled from "styled-components";

const Container = styled.div`
    height: 800px;
`

export const AboutSection = () => {
    return (
        <SectionLayout id={SECTIONS.about}>
            <Container>About</Container>
        </SectionLayout>
    )
}
