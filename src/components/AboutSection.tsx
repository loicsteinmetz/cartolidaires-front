import {SectionLayout} from "./SectionLayout.tsx";
import {SECTIONS} from "../constants/sections.ts";
import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";

const GreyBg = styled.div`
    width: 100%;
    background-color: ${THEME.colors.dark100};
    height: 300px;
    padding-top: ${THEME.spacing.s3};
    display: flex;
    justify-content: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 90%);
    position: absolute;
    margin-top: 200px;
`

const About = styled.div`
    max-width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s3});
    background-color: ${THEME.colors.dark300};
    width: calc(100% - ${THEME.spacing.s3});
    padding: ${THEME.spacing.s4} ${THEME.spacing.s5};
    margin-top: ${THEME.spacing.s4};
    clip-path: polygon(0% 1%, 99.6% 0, 100% 99%, 0% 100%);

    @media ${mediaQuery(THEME.breakpoints.s)} {
        padding: ${THEME.spacing.s3} ${THEME.spacing.s4};
        width: calc(100% - ${THEME.spacing.s2});
    }

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        padding: ${THEME.spacing.s3};
    }
`

const Title = styled.h2`
    font-family: ${THEME.fonts.heading};
    color: ${THEME.colors.white};
    font-size: ${THEME.fontSize.s5};
    text-align: center;
    margin-bottom: ${THEME.spacing.s4};
    margin-top: ${THEME.spacing.s2};
    
    @media ${mediaQuery(THEME.breakpoints.s)} {
        margin-bottom: ${THEME.spacing.s3};
        margin-top: ${THEME.spacing.s3};
    }
    
    @media ${mediaQuery(THEME.breakpoints.xs)} {
        margin-bottom: ${THEME.spacing.s2};
        font-size: ${THEME.fontSize.s4};
    }
`

const Paragraph = styled.p`
    font-family: ${THEME.fonts.text};
    color: ${THEME.colors.white};
    line-height: 2;
    margin-top: ${THEME.spacing.s3};
`

export const AboutSection = () => {
    return (
        <SectionLayout id={SECTIONS.about}>
            <GreyBg/>
            <About>
                <Title>LOREM IPSUM LOREM IPSUM</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer porta. Vivamus feugiat. Aliquam
                    velit dui, commodo quis, porttitor eget, convallis et, nisi. Nulla sed lacus. Mauris tempor ultrices
                    justo. In hac habitasse platea dictumst. Sed at turpis vitae velit euismod aliquet. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec gravida, ante vel
                    ornare lacinia, orci enim porta est, eget sollicitudin lectus lectus eget.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer porta. Vivamus feugiat. Aliquam
                    velit dui, commodo quis, porttitor eget, convallis et, nisi. Nulla sed lacus. Mauris tempor ultrices
                    justo. In hac habitasse platea dictumst. Sed at turpis vitae velit euismod aliquet. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec gravida, ante vel
                    ornare lacinia, orci enim porta est, eget sollicitudin lectus lectus eget.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer porta. Vivamus feugiat. Aliquam
                    velit dui, commodo quis, porttitor eget, convallis et, nisi. Nulla sed lacus. Mauris tempor ultrices
                    justo. In hac habitasse platea dictumst. Sed at turpis vitae velit euismod aliquet. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec gravida, ante vel
                    ornare lacinia, orci enim porta est, eget sollicitudin lectus lectus eget.
                </Paragraph>
            </About>
        </SectionLayout>
    )
}
