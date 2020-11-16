import React from 'react'
import "./index.css"
import Agatsuma from '../../assets/images/Agatsuma.png'
function Menu(){
    return(
    <div className="all">
        <div className="logo">
            <img className="znitsu" src={Agatsuma} alt="logo"/>
        </div>
        <div className="bo">
            <ul>
                <li>inicio</li>
                <li>conteudo</li>
                <li>discussão</li>
                <li>sobre</li>
            </ul>
        </div>
    </div>
    )
}
export default Menu;