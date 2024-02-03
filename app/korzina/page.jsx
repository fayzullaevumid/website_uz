import React from "react";
import Navbar from "../navbar/page";
import './page.css'

const Korzina = () => {
    return(
        <div>
            <Navbar/>
            <p className="text-korzina">Корзина</p>
            <p className="text-korzina-1">Главная / Корзина</p>
        </div>
    )
}

export default Korzina;