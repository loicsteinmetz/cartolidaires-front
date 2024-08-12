import styled, {keyframes} from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";
import {useCallback, useEffect, useState} from "react";
import {siApi} from "../api/siApi.ts";
import {ListItem} from "../types/types.ts";
import {v4 as uuid} from 'uuid';

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

const Td = styled.td<{ center?: boolean, empty?: boolean }>`
    padding: ${THEME.spacing.s3} ${THEME.spacing.s2} ${THEME.spacing.s2} ${THEME.spacing.s2};
    border-bottom: 2px solid ${({empty}) => empty ? 'transparent' : THEME.colors.dark100};
    ${({center}) => center ? 'text-align: center;' : ''} @media ${mediaQuery(THEME.breakpoints.s)}
    padding: ${THEME.spacing.s3} ${THEME.spacing.s1} ${THEME.spacing.s2} ${THEME.spacing.s1};
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

const PaginationWrapper = styled.div`
    padding: ${THEME.spacing.s2} ${THEME.spacing.s3};
    display: flex;
    gap: ${THEME.spacing.s1};
`

const Page = styled.button<{active: boolean}>`
    background: none;
    font-family: ${THEME.fonts.text};
    color: ${({active}) => active ? THEME.colors.primary : THEME.colors.white};
    font-size: ${THEME.fontSize.s2};
    
    &:hover {
        color: ${THEME.colors.primary};
        cursor: pointer;
    }
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
    const [items, setItems] = useState<ListItem[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isFirstLoading, setIsFirstLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchItems = useCallback(() => {
        setIsLoading(true);
        siApi.getList({page}).then((res) => {
            if (res.success) {
                setItems(res.data);
                setPage(res.page);
                setTotalPages(res.nbPages);
                setIsFirstLoading(false);
                setIsLoading(false);
            }
        })
    }, [page])

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

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
                        ))) : items.map((item) => (
                            <TRow key={`items-${uuid()}`}>
                                <Td>{item.name}</Td>
                                <Td center>{item.department}</Td>
                                <Td center>{item.city}</Td>
                                <Td center></Td>
                            </TRow>
                        ))}
                        {!isLoading && items.length < NUMBER_ITEMS && ([...Array(NUMBER_ITEMS - items.length).keys()].map(() => (
                            <TRow key={`items-${uuid()}`} aria-hidden="true">
                                <Td empty></Td>
                            </TRow>
                        )))}
                    </THead>
                </Table>
                <PaginationContainer>
                    {isFirstLoading ? (
                        <PaginationSkeleton/>
                    ) : <PaginationWrapper>{[...Array(totalPages).keys()].map((_, i) => (
                        <Page active={i + 1 === page} onClick={() => setPage(i + 1)}>{i + 1}</Page>
                    ))}</PaginationWrapper>}
                </PaginationContainer>
            </Container>

            {/* ----------------- */}

            <ContainerMobile>
                <SearchInputMobile type={'text'} placeholder={'Rechercher...'}/>
                {isLoading ? ([...Array(NUMBER_ITEMS).keys()].map((i) => (
                    <SkeletonMobile key={i}/>
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