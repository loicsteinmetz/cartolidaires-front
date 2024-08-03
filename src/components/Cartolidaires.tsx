import {Layout} from "./Layout.tsx";
import {Header} from "./Header.tsx";
import {HeadingSection} from "./HeadingSection.tsx";
import {MapSection} from "./MapSection.tsx";
import {ListSection} from "./ListSection.tsx";
import {AboutSection} from "./AboutSection.tsx";
import {Footer} from "./Footer.tsx";

export const Cartolidaires = () => {
    return (
        <Layout>
            <Header/>
            <HeadingSection/>
            <MapSection/>
            <ListSection/>
            <AboutSection/>
            <Footer/>
        </Layout>
    )
}
