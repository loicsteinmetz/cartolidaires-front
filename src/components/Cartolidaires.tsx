import {Layout} from "./Layout.tsx";
import {Header} from "./Header.tsx";
import {HeadingSection} from "./HeadingSection.tsx";
import {MapSection} from "./MapSection.tsx";
import {ListSection} from "./ListSection.tsx";
import {AboutSection} from "./AboutSection.tsx";
import {Footer} from "./Footer.tsx";
import styled from "styled-components";
import {THEME} from "../constants/theme.ts";

const Main = styled.main`
    margin-top: 150px;
    
    &:before {
        content: "";
        display: block;
        height: ${THEME.header.heightExpanded}px;
        margin-top: -${THEME.header.heightExpanded}px;
        background-color: ${THEME.colors.dark200};
    }
`
export const Cartolidaires = () => {
    return (
        <Layout>
            <Header/>
            <Main>
                <HeadingSection/>
                <MapSection/>
                <ListSection/>
                <AboutSection/>
            </Main>
            <Footer/>
        </Layout>
    )
}
