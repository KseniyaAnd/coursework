import "./museum-about-us.css"
import {MuseumAboutUsSocialMedia} from "../museum-about-us-social-media/museum-about-us-social-media";
import {MuseumAboutUsSubscribe} from "../museum-about-us-subscribe/museum-about-us-subscribe";

export const MuseumAboutUs = ({socialMedias}) => {
    return (
        <div className="museum-about-us" id="museum-about-us">
            <MuseumAboutUsSocialMedia
                socialMedias={socialMedias}
            />
            <MuseumAboutUsSubscribe/>
        </div>
    )
}
