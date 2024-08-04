import styled from "styled-components";

export type SectionLayoutProps = {
    children: React.ReactNode;
    id?: string;
}

const Container = styled.section`
`

export const SectionLayout = ({id, children}: SectionLayoutProps) => {
    return (
        <Container id={id}>
            {children}
        </Container>
    )
}
