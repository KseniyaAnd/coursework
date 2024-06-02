import "./museum-exhibition-unit.css"

export const MuseumExhibitionsUnit = ({imgSrc, title, link}) => {
    return (
        <a href="" className="museum-exhibitions-unit">
            <div>
                <img src={imgSrc} className="museum-exhibitions-unit-img" alt={title}/>
            </div>
            <div className="museum-exhibitions-unit-overlay">
                <div className="museum-exhibitions-unit-header">
                    <svg className="museum-exhibitions-unit-arc">
                    </svg>
                    <div className="museum-exhibitions-unit-header-text">
                        <h3 className="museum-exhibitions-unit-title">{title}</h3>
                    </div>
                </div>
                <p className="museum-exhibitions-unit-description">Перейти →</p>
            </div>
        </a>
    )
}
