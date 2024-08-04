import {MapContainer, TileLayer} from "react-leaflet";
import styled from "styled-components";
import {mediaQuery, THEME} from "../constants/theme.ts";

const Container = styled.div`
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
`
export const Map = () => {
    return (
        <Container>
            <MapContainer center={[47, 2.333]} zoom={6}>
                <TileLayer
                    url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
                />
            </MapContainer>
        </Container>
    );
}