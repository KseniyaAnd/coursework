import React, {useState, useEffect, useRef} from "react";
import {MenuBtn} from "../menu-btn/menu-btn";
import "./header.css";
import {useClickOutside} from "../hooks/use-click-outside";
import {ReactComponent as LogoImg} from "../../assets/img/logo-icon.svg";

export const Header = () => {
    const [isOpen, setOpen] = useState();
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (isOpen) setTimeout(() => setOpen(false), 500);
    })

    useEffect(() => {
        let startTouchY = 0;
        let endTouchY = 0;
        let startTouchX = 0;
        let endTouchX = 0;

        const handleTouchStart = (event) => {
            startTouchY = event.changedTouches[0].pageY;
            startTouchX = event.changedTouches[0].pageX;
        };

        const handleTouchEnd = (event) => {
            endTouchY = event.changedTouches[0].pageY;
            endTouchX = event.changedTouches[0].pageX;
            if (startTouchY < 450 && endTouchY > startTouchY) setOpen(true);
            if (
                startTouchY < 650 &&
                Math.abs(endTouchX - startTouchX) < 10 &&
                endTouchY < startTouchY
            )
                setOpen(false);
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);

        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="header">
            <div className="header-panel">
        <span className="header-logo">
          <LogoImg className="header-logo-img"/>
          <div>We Are Heritage</div>
        </span>
                <MenuBtn isActive={isOpen} onClick={() => setOpen(!isOpen)}/>
            </div>
            <nav className={`header-nav ${isOpen ? "active" : ""}`} ref={menuRef}>
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <a href="#about-museum">Музей</a>
                    </li>
                    <li className="header-nav-item">
                        <a href="#museum-exhibitions">Выставки</a>
                    </li>
                    <li className="header-nav-item">
                        <a href="">События</a>
                    </li>
                    <li className="header-nav-item">
                        <a href="">О нас</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
