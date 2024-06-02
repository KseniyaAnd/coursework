import React, {useEffect, useState} from 'react';
import "./museum-history-events.css"
import {MuseumHistoryEventsUnit} from '../museum-history-events-unit/museum-history-events-unit';

export const MuseumHistoryEvents = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [captions, setCaptions] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const currentDate = new Date();
                const month = currentDate.getMonth() + 1; // месяцы начинаются с 0
                const day = currentDate.getDate();
                const url = `https://www.calend.ru/events/${month}-${day}/`;

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Cookie: 'last_uri=%2Fevents%2F6-1%2F; CALEND_PHPSESSID=glrth47kcm4qgbtqqu64vmfobovf77av',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const text = await response.text();
                setData(text);

                // Parse HTML and extract captions and images
                const parser = new DOMParser();
                const htmlDocument = parser.parseFromString(text, 'text/html');
                const captionElements = htmlDocument.querySelectorAll('.caption');

                const captionsArray = Array.from(captionElements).map((element) => {
                    const yearElement = element.querySelector('.year');
                    const titleElement = element.querySelector('.title');
                    return {
                        year: yearElement ? yearElement.textContent : 'No year found',
                        title: titleElement ? titleElement.textContent : 'No title found',
                    };
                });

                const imageElements = htmlDocument.querySelectorAll('[itemprop="image"]');
                const imagesArray = Array.from(imageElements).map((element) => element.getAttribute('src'));

                setCaptions(captionsArray);
                setImages(imagesArray);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const elements = captions.slice(0, 6).map((item, index) => (
        <MuseumHistoryEventsUnit key={index} {...item} image={images[index]}/>
    ));


    return (
        <div className="museum-history-events" id="museum-history-events">
            <div className="museum-history-events-title">Историческое событие сегодня</div>
            <div className="museum-history-events-elements">{elements}</div>
        </div>
    );
};