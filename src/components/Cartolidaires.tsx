import {Layout} from "./Layout.tsx";
import {Header} from "./Header.tsx";
import {HeadingSection} from "./HeadingSection.tsx";
import {MapSection} from "./MapSection.tsx";
import {ListSection} from "./ListSection.tsx";
import {AboutSection} from "./AboutSection.tsx";
import {Footer} from "./Footer.tsx";
import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";

const Main = styled.main`
    margin-top: ${THEME.header.heightExpanded}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    &:before {
        content: "";
        display: block;
        height: ${THEME.header.heightExpanded}px;
        margin-top: -${THEME.header.heightExpanded}px;
        background-color: ${THEME.colors.dark200};
        width: 100%;
    }

    @media ${mediaQuery(THEME.breakpoints.s)} {
        margin-top: ${THEME.header.height}px;
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
