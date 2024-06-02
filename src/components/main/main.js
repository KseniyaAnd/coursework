import "./main.css"
import {BasicSlider} from "../basic-slider/basic-slider";
import {AboutMuseum} from "../about-museum/about-museum";
import {MuseumExhibitions} from "../museum-exhibitions/museum-exhibitions";
import {MuseumHistoryEvents} from "../museum-history-events/museum-history-events";

export const Main = ({sliderPics, exhibitions}) => {
    return (
        <main>
            <BasicSlider
                sliderPics={sliderPics}
            />
            <AboutMuseum/>
            <MuseumExhibitions
                exhibitions={exhibitions}
            />
            <MuseumHistoryEvents/>
        </main>
    )
}
