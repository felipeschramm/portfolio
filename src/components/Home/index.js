import React, { Component } from 'react';
import "./styles.css";
import minhaFoto from "../../img/1.png";
import curriculo from "../../img/curriculo.pdf";

class Home extends Component {
    render() {
        return (
            <>
                <section>
                    <div id="home">
                        <div className="container">
                            <h2 id="centraliza">SOBRE MIM</h2>

                            <div className="row">
                                <div className="column col-xl-6 col-sm-12 col-12 padin">
                                    <img id="minhaFoto" src={minhaFoto} alt="foto de perfil" />
                                    <p className="marginTop">Me chamo Felipe Cabreira Schramm. Tenho 20 anos. Nasci em Cianorte, no Paraná. Atualmente sou estudante do curso de Engenharia De Software
                                    na UTFPR - Câmpus Cornélio Procópio, cidade que moro no momento.
                                </p><br></br>
                                    <button className="btn">
                                        <a id="curriculo" href={curriculo} download={curriculo}>
                                            DOWNLOAD CURRÍCULO PDF
                                    </a>
                                    </button>
                                </div>

                                <div id="padin1" className="column col-xl-6 col-sm-12 col-12">
                                    <div>
                                        <h2>INTERESSES</h2>
                                        <ul>
                                            <li>Desenvolvimento Mobile</li>
                                            <li>Gerênciamento De Projeto</li>
                                            <li>Desenvolvimento de Jogos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2>IDIOMAS</h2>
                                        <ul id="idiomas">
                                            <li>Português - Nativo</li>
                                            <li>Inglês - Intermediário</li>
                                            <li>Espanhol - Intermediário</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2>FORMAÇÃO</h2>
                                        <ul>
                                            <li>Engenharia De Software - UTFPR (Cursando 6º Semestre)</li>
                                            <li>Ciência Da Computação - UTFPR (Cancelado)</li>
                                            <li>Colégio CEC - Ensino Médio</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2>ATIVIDADES</h2>
                                        <ul>
                                            <li>Desenvolvimento Web</li>
                                            <li>Desenvolvimento Desktop</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Home;