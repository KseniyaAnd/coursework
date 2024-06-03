import "./museum-about-us-subscribe.css"
import {MuseumAboutUsSubscribeForm} from "../museum-about-us-subscribe-form/museum-about-us-subscribe-form";

export const MuseumAboutUsSubscribe = () => {
    return (
        <div className="museum-about-us-subscribe">
            <div className="museum-about-us-subscribe-tittle">
                Подпишитесь на рассылку
            </div>
            <MuseumAboutUsSubscribeForm/>
        </div>
    )
}
