import {SectionLayout} from "./SectionLayout.tsx";
import {SECTIONS} from "../constants/sections.ts";
import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";
import {List} from "./List.tsx";

const TitleContainer = styled.div`
    width: 100%;
    background-color: ${THEME.colors.dark300};
    height: 300px;
    padding-top: ${THEME.spacing.s3};
    display: flex;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
`

const Title = styled.h2`
    font-family: ${THEME.fonts.text};
    color: ${THEME.colors.white};
    font-size: ${THEME.fontSize.s2};
    text-align: center;
    width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s3});
    display: flex;
    justify-content: center;
    gap: ${THEME.spacing.s3};
    max-width: ${THEME.sizes.sectionMaxWidth};
    margin: 0 ${THEME.spacing.s3};
    
    &:before, &:after {
        content: '';
        flex: 1;
        height: 2px;
        background-color: ${THEME.colors.white};
        margin-top: 9px;
    }

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        margin: 0 ${THEME.spacing.s2};
        gap: ${THEME.spacing.s2};
    }
`

const ListBg = styled.div`
    max-width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s3});
    background-color: ${THEME.colors.dark100};
    width: calc(100% - ${THEME.spacing.s3});
    padding: ${THEME.spacing.s3};
    margin-top: -220px;
    clip-path: polygon(0% 1%, 99.6% 0, 100% 99%, 0% 100%);
    z-index: 2;

    @media ${mediaQuery(THEME.breakpoints.s)} {
        padding: ${THEME.spacing.s3} ${THEME.spacing.s2};
        width: calc(100% - ${THEME.spacing.s2});
    }
`

const ListContainer = styled.div`
    background-color: ${THEME.colors.dark300};
    padding: ${THEME.spacing.s3} ${THEME.spacing.s4};

    @media ${mediaQuery(THEME.breakpoints.m)} {
        padding: ${THEME.spacing.s3} ${THEME.spacing.s3};
    }
`

const RedBg = styled.div`
    width: 100%;
    height: 250px;
    background-color: ${THEME.colors.primary};
    margin-top: -200px;
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);

    @media ${mediaQuery(THEME.breakpoints.m)} {
        margin-top: -225px;
    }
`

export const ListSection = () => {
    return (
        <SectionLayout id={SECTIONS.list}>
            <TitleContainer><Title>La liste</Title></TitleContainer>
            <ListBg><ListContainer><List /></ListContainer></ListBg>
            <RedBg />
        </SectionLayout>
    )
}
