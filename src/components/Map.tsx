import {MapContainer, TileLayer} from "react-leaflet";
import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";

const Container = styled.div`
    position: relative;
    width: 100%;
    
    .leaflet-container {
        max-width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s4} - ${THEME.spacing.s3});
        width: calc(100vw - ${THEME.spacing.s4} - ${THEME.spacing.s3});
        max-height: calc(80vh - ${THEME.spacing.s4});
        height: 100vh;
        
        @media ${mediaQuery(THEME.breakpoints.xs)} {
            max-width: calc(${THEME.sizes.sectionMaxWidth} - ${THEME.spacing.s2} - ${THEME.spacing.s3});
            width: calc(100vw - ${THEME.spacing.s2} - ${THEME.spacing.s3});
        }
    }
    
    .leaflet-control-attribution {
        display: none;
    }

    .leaflet-control-zoom-in {
        border-bottom: 2px solid ${THEME.colors.dark300};
    }
    
    .leaflet-control-zoom-in, .leaflet-control-zoom-out {
        background-color: ${THEME.colors.dark100};
        border-radius: 0;
        color: ${THEME.colors.white};
    }

    .leaflet-touch .leaflet-bar a:first-child, .leaflet-touch .leaflet-bar a:last-child; .leaflet-bar {
        border-radius: 0;
    }
`

const SearchInput = styled.input`
    position: absolute;
    z-index: 1000;
    right: 10px;
    top: 10px;
    width: 250px;
    border: 2px solid ${THEME.colors.dark300};
    background-color: ${THEME.colors.dark200};
    color: ${THEME.colors.white};
    padding: 10px ${THEME.spacing.s2} ${THEME.spacing.s1} ${THEME.spacing.s2};
    font-family: sans-serif;
    &:focus-visible {
        outline: none;
        background-color: ${THEME.colors.dark100};
    }
`

export const Map = () => {
    return (
        <Container>
            <SearchInput type={'text'} placeholder={'Rechercher...'}/>
            <MapContainer center={[47, 2.333]} zoom={6}>
                <TileLayer
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </Container>
    );
}