import {SectionLayout} from "./SectionLayout.tsx";
import {SECTIONS} from "../constants/sections.ts";
import styled from "styled-components";

const Container = styled.div`
    height: 800px;
`

export const MapSection = () => {
    return (
        <SectionLayout id={SECTIONS.map}>
            <Container>Map</Container>
        </SectionLayout>
    )
}
