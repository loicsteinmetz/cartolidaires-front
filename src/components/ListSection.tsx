import {SectionLayout} from "./SectionLayout.tsx";
import {SECTIONS} from "../constants/sections.ts";
import styled from "styled-components";

const Container = styled.div`
    height: 800px;
`

export const ListSection = () => {
    return (
        <SectionLayout id={SECTIONS.list}>
            <Container>List</Container>
        </SectionLayout>
    )
}
