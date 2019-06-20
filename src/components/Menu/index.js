import React, { Component } from 'react';
import "./styles.css";

class Menu extends Component {
    render() {
        return (
            <>
                <header>
                    <div id="barra-fixa">
                        <div className="container">
                            <nav>
                                <div>
                                    <ul id="flex">
                                        <li id="felipe"><h2>FELIPE SCHRAMM</h2></li>
                                        <li><a href="#home">SOBRE</a></li>
                                        <li><a href="#skills">HABILIDADES</a></li>
                                        <li><a href="#blogs">BLOGS</a></li>
                                        <li><a href="#portfolio">PORTFÓLIO</a></li>
                                        <li><a href="#mais">MAIS</a></li>
                                        <li><a href="#contato">CONTATO</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <input type="checkbox" id="menu-hamburguer" />
                            <label htmlFor="menu-hamburguer">
                                <div className="menu">
                                    <span className="hamburguer"></span>
                                </div>
                            </label>

                            <ul className="lista-hamburguer">
                                <li><a href="#home">SOBRE</a></li>
                                <li><a href="#skills">HABILIDADES</a></li>
                                <li><a href="#blogs">BLOGS</a></li>
                                <li><a href="#portfolio">PORTFÓLIO</a></li>
                                <li><a href="#mais">MAIS</a></li>
                                <li><a href="#contato">CONTATO</a></li>
                            </ul>
                        </div>

                    </div>
                </header>
            </>
        );
    }
}

export default Menu;