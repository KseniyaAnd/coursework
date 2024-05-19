import React, {useState} from "react";
import "./menu-btn.css";

export const MenuBtn = ({isActive, onClick}) => {
    const [wasClicked, setWasClicked] = useState(false);

    const handleClick = () => {
        setWasClicked(true); // Устанавливаем флаг, что кнопка была нажата
        onClick(); // Вызываем функцию onClick, переданную из родительского компонента
    };

    return (
        <button
            className={`header-menu-btn ${isActive ? "active" : ""} ${
                !isActive && wasClicked ? "unactive" : "" // Применяем класс unactive только если кнопка была нажата и не активна
            }`}
            onClick={handleClick}
        >
            <span></span>
        </button>
    );
};
