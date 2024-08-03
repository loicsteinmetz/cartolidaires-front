import styled from "styled-components";
import logo from '../assets/logo.png'
import {THEME} from "../constants/theme.ts";
import {SECTIONS} from "../constants/sections.ts";
import {useEffect, useState} from "react";

const Container = styled.header<{ expanded: boolean }>`
    background-color: ${THEME.colors.dark300};
    padding: ${THEME.spacing.s2} ${THEME.spacing.s5};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    max-height: ${({expanded}) => expanded ? THEME.header.heightExpanded : THEME.header.height}px;
    transition: max-height 300ms;
`

const Logo = styled.img<{ expanded: boolean }>`
    max-height: ${({expanded}) => expanded ? '60%' : '80%'};
    margin-top: ${({expanded}) => expanded ? '20px' : '5px'};
    margin-bottom: ${({expanded}) => expanded ? '10px' : '0'};
    transition: max-height 300ms, margin-bottom 300ms, margin-top 300ms;
    
    &:hover {
        cursor: pointer;
    }
`

const Links = styled.ul`
    display: flex;
    gap: ${THEME.spacing.s3};

    &:nth-child(1) {
        clip-path: polygon(0 7%, 100% 0, 100% 100%, 2% 97%);
    }

    &:first-child(2) {
        clip-path: polygon(0 4%, 100% 0, 100% 98%, 0 100%);
    }
`

const Link = styled.li`
    list-style-type: none;
`

const Button = styled.button<{ variant: number, action?: boolean }>`
    font-family: ${THEME.fonts.text};
    font-size: ${THEME.fontSize.s2};
    padding: ${THEME.spacing.s2} ${THEME.spacing.s3};
    background-color: ${({action}) => action ? THEME.colors.primary : THEME.colors.dark100};
    color: ${THEME.colors.white};
    clip-path: ${({variant}) => [
        'polygon(0 7%, 100% 0, 100% 100%, 2% 97%)',
        'polygon(0 4%, 100% 0, 100% 98%, 0 100%)',
        'polygon(0 3%, 100% 0, 100% 100%, 0 100%)',
        'polygon(2% 0, 100% 2%, 100% 100%, 0 100%);',
    ][variant]};
    margin-left: ${({action}) => action ? THEME.spacing.s3 : 0};

    &:hover, &:focus {
        background-color: ${({action}) => action ? THEME.colors.primaryDark : THEME.colors.dark200};
        cursor: pointer;
    }
`

export const Header = () => {
    const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    });

    const scrollTo = (id: string) => {
        const elt = document.querySelector('#' + id);
        if (elt) {
            window.scroll({
                top: elt.getBoundingClientRect().top + window.scrollY - THEME.header.height,
                behavior: 'smooth'
            });
        }
    }

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    const expanded = scroll < 300;

    return (
        <Container expanded={expanded}>
            <Logo src={logo} alt={'Cartolidaires'} expanded={expanded} onClick={scrollToTop} tabIndex={1}
                  aria-label={'Cartolidaires, remonter en haut de page'}/>
            <Links role={'navigation'}>
                <Link><Button variant={0} onClick={() => scrollTo(SECTIONS.map)}>La carte</Button></Link>
                <Link><Button variant={1} onClick={() => scrollTo(SECTIONS.list)}>La liste</Button></Link>
                <Link><Button variant={2} onClick={() => scrollTo(SECTIONS.about)}>En savoir plus</Button></Link>
                <Link><Button variant={3} action>Ajouter une initiative</Button></Link>
            </Links>
        </Container>
    )
}
