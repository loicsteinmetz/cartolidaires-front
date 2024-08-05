import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";
import {MouseEventHandler, useEffect, useRef} from "react";

export type ModalProps = {
    open: boolean;
    children: React.ReactNode;
    close: () => void;
    title: string;
}

const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: ${THEME.zIndex.modal};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    max-width: ${THEME.sizes.modalMaxWidth};
    background-color: ${THEME.colors.dark300};
    padding: ${THEME.spacing.s3};
    margin: 0 ${THEME.spacing.s3};

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        margin: 0 ${THEME.spacing.s2};
    }

    @media (max-height: 600px) {
        padding: ${THEME.spacing.s2} ${THEME.spacing.s3};
    }
`

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${THEME.colors.dark100};
    margin-bottom: ${THEME.spacing.s3};
    padding-bottom: ${THEME.spacing.s2};
    align-items: center;
`

const Title = styled.h1`
    color: ${THEME.colors.white};
    font-size: ${THEME.fontSize.s3};
    font-family: ${THEME.fonts.text};

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        font-size: ${THEME.fontSize.s2};
    }
`

const Quit = styled.button`
    color: ${THEME.colors.white};
    font-size: ${THEME.fontSize.s3};
    font-family: ${THEME.fonts.text};
    background-color: transparent;
    padding: 5px 10px;
    border: 1px solid ${THEME.colors.white};
    outline: none;

    &:hover, &:focus-within {
        cursor: pointer;
        background-color: ${THEME.colors.white};
        color: ${THEME.colors.dark300};
    }

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        font-size: ${THEME.fontSize.s2};
        padding: 5px 8px;
    }
`

const ContentContainer = styled.div`
    max-height: 70vh;
    overflow: scroll;

    @media (max-height: 600px) {
        max-height: 55vh;
    }
`

export const Modal = ({open, close, title, children}: ModalProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const quitRef = useRef<HTMLButtonElement>(null);

    const getLastFocusableElement = () => {
        const focusableElements = contentRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        return focusableElements && focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : undefined;
    }

    useEffect(() => {
        const onEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        }
        const onLastFocus = () => {
            quitRef.current?.focus();
        }
        const onFirstFocus = () => {
            (getLastFocusableElement() as HTMLButtonElement)?.focus();
        }
        if (open) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', onEscape);
            getLastFocusableElement()?.addEventListener('focusout', onLastFocus);
            quitRef.current?.addEventListener('focusout', onFirstFocus);

        } else {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', onEscape);
            getLastFocusableElement()?.removeEventListener('focusout', onLastFocus);
            quitRef.current?.removeEventListener('focusout', onFirstFocus);
        }
    }, [close, open])

    const clickAway: MouseEventHandler = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
            close();
        }
    }

    if (!open) {
        return null;
    }

    return (
        <Background onClick={clickAway}>
            <Container ref={containerRef} aria-modal="true" aria-labelledby={'modal-title'}>
                <TitleContainer>
                    <Title id={'modal-title'}>{title}</Title>
                    <Quit ref={quitRef} onClick={close} aria-label={'Fermer la fenêtre modale'}>×</Quit>
                </TitleContainer>
                <ContentContainer ref={contentRef}>{children}</ContentContainer>
            </Container>
        </Background>
    )
}