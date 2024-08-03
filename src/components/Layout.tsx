import styled from "styled-components";
import {THEME} from "../constants/theme.ts";

export type LayoutProps = {
    children: React.ReactNode;
}

const Container = styled.main`
    background-color: ${THEME.colors.dark200};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: scroll;
`

export const Layout = ({children}: LayoutProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
