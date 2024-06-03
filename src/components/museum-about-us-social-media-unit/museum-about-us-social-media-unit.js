import "./museum-about-us-social-media-unit.css"

export const MuseumAboutUsSocialMediaUnit = ({imgSrc, alt, link}) => {
    return (
        <a className="museum-about-us-social-media-unit" href={link}>
            {imgSrc}
        </a>
    )
}
