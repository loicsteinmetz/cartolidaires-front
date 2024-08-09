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

const Line = styled.div`
    width: 100%;
    margin: ${THEME.spacing.s4} 0;
    display: flex;
    justify-content: center;
    
    &:after {
        content: '';
        display: block;
        width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s3});
        height: 4px;
        background-color: ${THEME.colors.dark300};
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
                <Line />
            </Main>
            <Footer/>
        </Layout>
    )
}
