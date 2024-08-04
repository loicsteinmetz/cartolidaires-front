import {SectionLayout} from "./SectionLayout.tsx";
import {SECTIONS} from "../constants/sections.ts";
import styled from "styled-components";
import {Map} from "./Map.tsx";
import {mediaQuery, THEME} from "../constants/theme.ts";

const TitleContainer = styled.div`
    width: 100%;
    background-color: ${THEME.colors.dark300};
    height: 200px;
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

const MapContainer = styled.div`
    max-width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s3});
    background-color: ${THEME.colors.dark100};
    width: calc(100% - ${THEME.spacing.s3});
    padding: ${THEME.spacing.s3};
    margin-top: -120px;
    clip-path: polygon(0% 1%, 99.6% 0, 100% 99%, 0% 100%);
    z-index: 2;

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        padding: ${THEME.spacing.s2};
        width: calc(100% - ${THEME.spacing.s2});
    }
`

const RedBg = styled.div`
    width: 100%;
    height: 150px;
    background-color: ${THEME.colors.primary};
    margin-top: -100px;
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);

    @media ${mediaQuery(THEME.breakpoints.m)} {
        margin-top: -125px;
    }
`

export const MapSection = () => {
    return (
        <SectionLayout id={SECTIONS.map}>
            <TitleContainer>
                <Title>La carte</Title>
            </TitleContainer>
            <MapContainer>
                <Map/>
            </MapContainer>
            <RedBg/>
        </SectionLayout>
    )
}
