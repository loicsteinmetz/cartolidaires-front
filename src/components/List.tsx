import styled, {keyframes} from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";
import {useState} from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        display: none;
    }
`

const Table = styled.table`
    width: 100%;
    font-family: ${THEME.fonts.text};
    color: ${THEME.colors.white};
    border-collapse: collapse;
`

const THead = styled.thead`
`

const TRowHead = styled.tr`
    border-bottom: 2px solid ${THEME.colors.white};
`

const TdHead = styled.td<{ size: number; noPadding?: boolean }>`
    padding: ${({noPadding}) => noPadding ? 0 : THEME.spacing.s1};
    width: ${props => props.size}%;
    text-align: center;
`

const SearchInput = styled.input`
    width: 100%;
    padding: ${THEME.spacing.s1} ${THEME.spacing.s2};
    font-family: ${THEME.fonts.text};
    color: ${THEME.colors.white};
    background-color: ${THEME.colors.dark300};
    border: 2px solid ${THEME.colors.white};
    border-bottom: none;
    font-size: ${THEME.fontSize.s2};

    &:focus-visible {
        outline: none;
        background-color: ${THEME.colors.dark200};
    }
`

const TRow = styled.tr`
`

const Td = styled.td`
    padding: ${THEME.spacing.s3} ${THEME.spacing.s2} ${THEME.spacing.s2} ${THEME.spacing.s2};
    border-bottom: 2px solid ${THEME.colors.dark100};

    @media ${mediaQuery(THEME.breakpoints.s)} {
        padding: ${THEME.spacing.s3} ${THEME.spacing.s1} ${THEME.spacing.s2} ${THEME.spacing.s1};
    }
`

const SkeletonAnimation = keyframes`
    0%, 100% {
        background-color: ${THEME.colors.dark100};
    }
    50% {
        background-color: ${THEME.colors.dark200};
    }
`;

const Skeleton = styled.div`
    width: 100%;
    height: ${THEME.fontSize.s2};
    background-color: ${THEME.colors.dark100};
    animation: ${SkeletonAnimation} 2s infinite;
`

const PaginationContainer = styled.div`
    background-color: ${THEME.colors.dark100};
    display: inline-block;
    margin-top: ${THEME.spacing.s3};
    clip-path: polygon(0 4%, 100% 0, 98% 100%, 0 100%);

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        margin-bottom: ${THEME.spacing.s2};
    }
`

const PaginationSkeleton = styled.div`
    height: calc(${THEME.fontSize.s2} + ${THEME.spacing.s3});
    width: 200px;
    animation: ${SkeletonAnimation} 2s infinite;
`

const ContainerMobile = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${mediaQuery(THEME.breakpoints.xs)} {
        display: flex;
    }
`

const SearchInputMobile = styled.input`
    width: 100%;
    padding: ${THEME.spacing.s1} ${THEME.spacing.s2};
    font-family: ${THEME.fonts.text};
    color: ${THEME.colors.white};
    background-color: ${THEME.colors.dark300};
    border: 2px solid ${THEME.colors.white};
    font-size: ${THEME.fontSize.s2};

    &:focus-visible {
        outline: none;
        background-color: ${THEME.colors.dark200};
    }
`

const SkeletonMobile = styled.div`
    height: 100px;
    animation: infinite ${SkeletonAnimation} 2s;
    width: 100%;
    margin-top: ${THEME.spacing.s2};
`

export const List = () => {
    const NUMBER_ITEMS = 10
    const [isFirstLoading, setIsFirstLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Container>
                <Table>
                    <THead>
                        <TRowHead>
                            <TdHead size={35} noPadding>
                                <SearchInput type={'text'} placeholder={'Rechercher...'}/></TdHead>
                            <TdHead size={15}>Dép.</TdHead>
                            <TdHead size={25}>Ville</TdHead>
                            <TdHead size={25}></TdHead>
                        </TRowHead>
                        {isLoading ? ([...Array(NUMBER_ITEMS).keys()].map((i) => (
                            <TRow key={i}>
                                <Td><Skeleton/></Td>
                                <Td><Skeleton/></Td>
                                <Td><Skeleton/></Td>
                                <Td><Skeleton/></Td>
                            </TRow>
                        ))) : <></>}
                    </THead>
                </Table>
                <PaginationContainer>
                    {isFirstLoading && (
                        <PaginationSkeleton/>
                    )}
                </PaginationContainer>
            </Container>

            {/* ----------------- */}

            <ContainerMobile>
                <SearchInputMobile type={'text'} placeholder={'Rechercher...'}/>
                {isLoading ? ([...Array(NUMBER_ITEMS).keys()].map((i) => (
                    <SkeletonMobile/>
                ))) : <></>}
                <PaginationContainer>
                    {isFirstLoading && (
                        <PaginationSkeleton/>
                    )}
                </PaginationContainer>
            </ContainerMobile>
        </>
    );
}