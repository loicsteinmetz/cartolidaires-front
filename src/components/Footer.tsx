import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";
import logo from "../assets/logo-white.png";

const Container = styled.footer`
    background-color: ${THEME.colors.dark300};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${THEME.spacing.s4} 0;
    border-top: 10px solid ${THEME.colors.primary};
    gap: ${THEME.spacing.s5};

    @media ${mediaQuery(THEME.breakpoints.s)} {
        flex-direction: column;
        gap: ${THEME.spacing.s4};
    }
`

const Logo = styled.img`
    width: 300px;

    &:hover {
        cursor: pointer;
    }

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        width: 200px;
    }
`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${THEME.spacing.s3};
    
    @media ${mediaQuery(THEME.breakpoints.s)} {
        text-align: center;
    }
`

const LinkEntry = styled.li`
    list-style-type: none;
`

const Link = styled.a`
    color: ${THEME.colors.white};
    font-family: ${THEME.fonts.text};
    font-size: ${THEME.fontSize.s2};
    text-decoration: underline;
`

export const Footer = () => {
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Container>
            <Logo src={logo} alt={'Cartolidaires'} onClick={scrollToTop} onKeyUp={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    scrollToTop();
                }
            }} tabIndex={0}
                  aria-label={'Cartolidaires, remonter en haut de page'} role={'button'}/>
            <Links>
                <LinkEntry>
                    <Link href={'https://solidairesinformatique.org/'} target={'_blank'}>Solidaires Informatique</Link>
                </LinkEntry>
                <LinkEntry>
                    <Link href={'https://solidaires.org/'} target={'_blank'}>Union Syndicale Solidaires</Link>
                </LinkEntry>
            </Links>
        </Container>
    )
}