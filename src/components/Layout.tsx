import styled from "styled-components";
import {THEME} from "../constants/theme.ts";

export type LayoutProps = {
    children: React.ReactNode;
}

const Container = styled.div`
    background-color: ${THEME.colors.dark200};
`

export const Layout = ({children}: LayoutProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
