import React, { Component } from 'react';
import "./styles.css";
import montanha from "../../img/mountain3.png"
import block from "../../img/block.png";
import geo from "../../img/g.jpg";

class Portfolio extends Component {
    render() {
        return (
            <>
                <section>
                    <div id="portfolio">
                        <div className="container">
                            <h2>PORTFÓLIO</h2>
                            <h4>AQUI ESTÃO ALGUNS TRABALHOS DESENVOLVIDOS POR MIM:</h4><br />
                            <div className="central row" >
                                <div className="column col-sm-4">
                                    <a href="https://github.com/felipeschramm/Site-Casamento-Web1" target="blank" className="branco"><img className="fotoBlog" src={geo} alt="por1" ></img><br />SITE DE CASAMENTO GEOVANNA GARCIA</a>
                                </div>
                                <div className="column col-sm-4">
                                    <a href="https://github.com/felipeschramm/Minicurso-Blockchain" target="blank" className="branco"><img className="fotoBlog" src={block} alt="por2" ></img><br />DESENVOLVIMENTO DE UMA BLOCKCHAIN</a>
                                </div>

                                <div className="column col-sm-4">
                                    <a href="https://github.com/felipeschramm/backpacking" target="blank" className="branco"><img className="fotoBlog" src={montanha} alt="por3" ></img><br />SISTEMA WEB PARA HOSPEDAR VIAJANTES DE TODO MUNDO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Portfolio;