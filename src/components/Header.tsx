import styled from "styled-components";
import logo from '../assets/logo.png'
import {mediaQuery, THEME} from "../constants/theme.ts";
import {SECTIONS} from "../constants/sections.ts";
import {useEffect, useRef, useState} from "react";
import {Modal} from "./Modal.tsx";
import {AddItemForm} from "./AddItemForm.tsx";

const Container = styled.header<{ $expanded: boolean }>`
    z-index: ${THEME.zIndex.header};
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
    max-height: ${({$expanded}) => $expanded ? THEME.header.heightExpanded : THEME.header.height}px;
    transition: max-height 300ms;
    border-bottom: 5px solid ${THEME.colors.dark100};

    @media ${mediaQuery(THEME.breakpoints.m)} {
        padding: ${THEME.spacing.s2} ${THEME.spacing.s4};
    }

    @media ${mediaQuery(THEME.breakpoints.s)} {
        max-height: ${THEME.header.height}px;
    }

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        padding: ${THEME.spacing.s2} 0 ${THEME.spacing.s2} ${THEME.spacing.s3};
    }
`

const Logo = styled.img<{ $expanded: boolean }>`
    max-height: ${({$expanded}) => $expanded ? '60%' : '80%'};
    margin-top: ${({$expanded}) => $expanded ? '20px' : '5px'};
    margin-bottom: ${({$expanded}) => $expanded ? '10px' : '0'};
    transition: max-height 300ms, margin-bottom 300ms, margin-top 300ms;

    &:hover {
        cursor: pointer;
    }

    @media ${mediaQuery(THEME.breakpoints.s)} {
        max-height: 80%;
        margin-top: 5px;
        margin-bottom: 0;
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

    @media ${mediaQuery(THEME.breakpoints.m)} {
        gap: 0;
    }
`

const Link = styled.li`
    list-style-type: none;
`

const Button = styled.button<{ variant: number, $action?: boolean }>`
    font-family: ${THEME.fonts.text};
    font-size: ${THEME.fontSize.s2};
    padding: ${THEME.spacing.s2} ${THEME.spacing.s3};
    background-color: ${({$action}) => $action ? THEME.colors.primary : THEME.colors.dark100};
    color: ${THEME.colors.white};
    clip-path: ${({variant}) => [
        'polygon(0 7%, 100% 0, 100% 100%, 2% 97%)',
        'polygon(0 4%, 100% 0, 100% 98%, 0 100%)',
        'polygon(0 3%, 100% 0, 100% 100%, 0 100%)',
        'polygon(2% 0, 100% 2%, 100% 100%, 0 100%);',
    ][variant]};
    margin-left: ${({$action}) => $action ? THEME.spacing.s3 : 0};
    outline: none;

    &:hover, &:focus-visible {
        background-color: ${({$action}) => $action ? THEME.colors.primaryDark : THEME.colors.dark200};
        cursor: pointer;
    }

    @media ${mediaQuery(THEME.breakpoints.m)} {
        ${({$action}) => !$action && 'display: none;'}
    }

    @media ${mediaQuery(THEME.breakpoints.m)} {
        height: calc(100% + ${THEME.spacing.s2});
        margin-top: -${THEME.spacing.s1};
        padding: ${THEME.spacing.s1} ${THEME.spacing.s2};
    }
    
    @media ${mediaQuery(THEME.breakpoints.xs)} {
        height: calc(100%);
        margin-top: 0;
    }
`

export const Header = () => {
    const openModalButtonRef = useRef<HTMLButtonElement>(null);
    const [scroll, setScroll] = useState(window.scrollY);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setScroll(window.scrollY);
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
    }, []);

    const scrollTo = (id: string) => {
        const elt = document.querySelector('#' + id);
        if (elt) {
            window.scroll({
                top: elt.getBoundingClientRect().top + window.scrollY - THEME.header.height,
                behavior: 'smooth'
            });
            setTimeout(() => {
                const focusableElements = elt.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusableElements.length > 0) {
                    (focusableElements?.[0] as HTMLButtonElement).focus();
                }
            }, 300)
        }
    }

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    const closeModal = () => {
        openModalButtonRef.current?.focus();
        setIsModalOpen(false);
    }

    const expanded = scroll < 200;

    return (
        <Container $expanded={expanded}>
            <Logo src={logo} alt={'Cartolidaires'} $expanded={expanded} onClick={scrollToTop} onKeyUp={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    scrollToTop();
                }
            }} tabIndex={0}
                  aria-label={'Cartolidaires, remonter en haut de page'} role={'button'}/>
            <Links role={'navigation'}>
                <Link><Button variant={0} onClick={() => scrollTo(SECTIONS.map)}>La carte</Button></Link>
                <Link><Button variant={1} onClick={() => scrollTo(SECTIONS.list)}>La liste</Button></Link>
                <Link><Button variant={2} onClick={() => scrollTo(SECTIONS.about)}>En savoir plus</Button></Link>
                <Link><Button ref={openModalButtonRef} variant={3} $action onClick={() => setIsModalOpen(true)}>Ajouter
                    une initiative</Button></Link>
                <Modal open={isModalOpen} close={closeModal} title={'Ajouter une initiative'}>
                    <AddItemForm/>
                </Modal>
            </Links>
        </Container>
    )
}
