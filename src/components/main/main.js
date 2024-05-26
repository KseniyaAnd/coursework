import "./main.css"
import {BasicSlider} from "../basic-slider/basic-slider";
import {AboutMuseum} from "../about-museum/about-museum";

export const Main = ({sliderPics}) => {
    return (
        <main>
            <BasicSlider
                sliderPics={sliderPics}
            />
            <AboutMuseum/>
        </main>
    )
}
