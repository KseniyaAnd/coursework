import "./museum-exhibitions.css"
import {MuseumExhibitionsUnit} from "../museum-exhibitions-unit/museum-exhibition-unit";

export const MuseumExhibitions = ({exhibitions}) => {
    const elements = exhibitions.map(item => {
        const {id, ...itemProps} = item;

        return (
            <MuseumExhibitionsUnit
                key={id}
                {...itemProps}
            />
        )
    })

    return (
        <div className="museum-exhibitions" id="museum-exhibitions">
            <div className="museum-exhibitions-tittle">
                Наши коллекции
            </div>
            <div className="museum-exhibitions-grid">
                {elements}
            </div>
        </div>
    )
}
