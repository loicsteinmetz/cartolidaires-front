import styled from "styled-components";

export type SectionLayoutProps = {
    children: React.ReactNode;
}

const Container = styled.section`
`

export const SectionLayout = ({children}: SectionLayoutProps) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
