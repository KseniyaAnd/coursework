import React, { useState } from "react";
import "./museum-about-us-subscribe-form.css";

export const MuseumAboutUsSubscribeForm = () => {
    const [inputValue, setInputValue] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [isInputInvalid, setIsInputInvalid] = useState(false);
    const [isCheckboxInvalid, setIsCheckboxInvalid] = useState(false);

    const validateEmail = (email) => {
        // Simple email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = () => {
        const inputInvalid = !validateEmail(inputValue);
        const checkboxInvalid = !isChecked;

        setIsInputInvalid(inputInvalid);
        setIsCheckboxInvalid(checkboxInvalid);

        if (!inputInvalid && !checkboxInvalid) {
            console.log(inputValue);
            alert("Данные успешно отправлены!");
        } else {
            if (inputInvalid) {
                setIsInputInvalid(true);
                setTimeout(() => {
                    setIsInputInvalid(false);
                }, 3000);
            }
            if (checkboxInvalid) {
                setIsCheckboxInvalid(true);
                setTimeout(() => {
                    setIsCheckboxInvalid(false);
                }, 3000);
            }
        }
    };

    return (
        <div className="museum-about-us-subscribe-form">
            <div className="museum-about-us-subscribe-form-input">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введите ваши данные"
                    className={isInputInvalid ? "invalid" : ""}
                />
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className={isInputInvalid || isCheckboxInvalid ? "invalid" : ""}
                >
                    Подписаться
                </button>
            </div>
            <div className="museum-about-us-subscribe-form-checkbox">
                <label className={isCheckboxInvalid ? "invalid" : ""}>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        id="checkbox"
                    />
                    <span className="custom-checkbox"></span>
                    Я согласен на использование моих данных
                </label>
            </div>
        </div>
    );
};
