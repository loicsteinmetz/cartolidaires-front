import {SectionLayout} from "./SectionLayout.tsx";
import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";

const Container = styled.div`
    padding: ${THEME.spacing.s4} 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: ${THEME.spacing.s3};

    @media ${mediaQuery(THEME.breakpoints.m)} {
        margin-bottom: ${THEME.spacing.s2};
        padding: ${THEME.spacing.s3} 0;
    }

    @media ${mediaQuery(THEME.breakpoints.m)} {
        margin-bottom: ${THEME.spacing.s1};
    }
`

const Heading = styled.h1`
    width: fit-content;
    font-family: ${THEME.fonts.heading};
    font-size: ${THEME.fontSize.s5};
    color: ${THEME.colors.white};
    text-align: center;
    padding: ${THEME.spacing.s3} ${THEME.spacing.s4} calc(${THEME.spacing.s3} - 25px);
    background-color: ${THEME.colors.dark300};
    clip-path: polygon(2% 2%, 99.6% 0, 100% 100%, 0% 100%);
    z-index: 2;
    letter-spacing: 5px;
    
    @media ${mediaQuery(THEME.breakpoints.s)} {
        font-size: ${THEME.fontSize.s4};
        letter-spacing: 3px;
        padding: ${THEME.spacing.s3} ${THEME.spacing.s4} calc(${THEME.spacing.s3} - 15px);
    }
    
    @media ${mediaQuery(THEME.breakpoints.xs)} {
        font-size: ${THEME.fontSize.s3};
        letter-spacing: 2px;
        padding: ${THEME.spacing.s3} ${THEME.spacing.s3} calc(${THEME.spacing.s3} - 15px);
    }
`

const RedBg = styled.div`
    height: 100px;
    margin-top: -60px;
    width: 100%;
    clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);
    background-color: ${THEME.colors.primary};

    @media ${mediaQuery(THEME.breakpoints.s)} {
        height: 50px;
        margin-top: -25px;
    }
`

const GreyBg = styled.div`
    height: 100px;
    margin-top: -120px;
    width: 750px;
    max-width: 100%;
    clip-path: polygon(1% 2%, 99.6% 0, 100% 100%, 0% 100%);
    background-color: ${THEME.colors.dark100};

    @media ${mediaQuery(THEME.breakpoints.s)} {
        height: 50px;
        width: 460px;
        margin-top: -62px;
    }
    
    @media ${mediaQuery(THEME.breakpoints.xs)} {
        width: 300px;
    }
`

export const HeadingSection = () => {
    return (
        <SectionLayout>
            <Container>
                <Heading>
                    FAIRE FRONT ! PARTOUT !
                </Heading>
                <RedBg/>
                <GreyBg/>
            </Container>
        </SectionLayout>
    )
}
