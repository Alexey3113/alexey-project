import React, { FC, memo } from "react"

import "./sidebar.scss"

import logo from "../../assets/icons/logo.svg"
import { Link, useLocation } from "react-router-dom"

const Sidebar: FC = memo(() => {
    const { pathname } = useLocation()

    return (
        <div className="sidebar">
            <div className="sidebar__avatar">
                <div className="sidebar__avatar-photo">
                    {" "}
                    <img src={logo} alt="" />{" "}
                </div>
            </div>
            <nav className="sidebar__navigation">
                <Link
                    to={"/"}
                    className={`sidebar__link ${
                        pathname === "/" ? "active" : ""
                    }`}
                >
                    Главная
                </Link>
                <Link
                    to={"/generation_password"}
                    className={`sidebar__link ${
                        pathname === "/generation_password" ? "active" : ""
                    }`}
                >
                    Генерация API ключа
                </Link>
                <Link
                    to={"/background_changer"}
                    className={`sidebar__link ${
                        pathname === "/background_changer" ? "active" : ""
                    }`}
                >
                    Генерация фона
                </Link>
                <Link
                    to={"/diagram"}
                    className={`sidebar__link ${
                        pathname === "/diagram" ? "active" : ""
                    }`}
                >
                    Диаграмма
                </Link>
            </nav>
        </div>
    )
})

export default Sidebar
