import "./museum-about-us-social-media.css";
import {MuseumAboutUsSocialMediaUnit} from "../museum-about-us-social-media-unit/museum-about-us-social-media-unit";

export const MuseumAboutUsSocialMedia = ({socialMedias}) => {
    const elements = socialMedias.map(item => {
        const {id, ...itemProps} = item;

        return (
            <MuseumAboutUsSocialMediaUnit
                key={id}
                {...itemProps}
            />
        )
    })

    return (
        <div className="museum-about-us-social-media">
            <div className="museum-about-us-social-media-tittle">
                    We Are Heritage в социальных сетях
            </div>
            <div className="museum-about-us-social-media-elements">
                {elements}
            </div>
        </div>
    )
}
