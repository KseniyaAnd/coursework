import './museum-history-events-unit.css';
import React from 'react';

export const MuseumHistoryEventsUnit = ({ year, title, image }) => {
    return (
        <div className="museum-history-events-unit">
            <div className="museum-history-events-text">
                <div className="museum-history-events-text-year">{year}</div>
                <div>{title}</div>
            </div>
            <div className="museum-history-events-unit-img">
                <img src={image} alt={title}/>
            </div>
        </div>
    );
};