import styled from "styled-components";

export type SectionLayoutProps = {
    children: React.ReactNode;
    id?: string;
}

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionLayout = ({id, children}: SectionLayoutProps) => {
    return (
        <Container id={id}>
            {children}
        </Container>
    )
}
