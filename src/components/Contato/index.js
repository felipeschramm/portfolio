import React, { Component } from 'react';
import "./styles.css";
import insta from "../../img/insta.jpg";
import face from "../../img/face.png";
import git from "../../img/git.png";
import link from "../../img/link.png";

class Contato extends Component {
    render() {
        return (
            <>
                <section>
                    <div id="contato">
                        <div className="container">
                            <h2 className="textoBranco">CONTATO</h2>
                            <div className="row">
                                <div className="column col-sm-6 padin">
                                    <p className="textoBranco">Fique a vontade para me contatar, segue ao lado o formulário de envio, espero que possamos trabalhar juntos!!<br /><br /> Me procure também nas redes sociais, os links estão abaixo:</p>
                                    <div id="links" className="row">
                                        <a href="https://www.instagram.com/felipecschramm" target="blank"><img src={insta} alt="link insta" ></img></a>
                                        <a href="https://www.facebook.com/felipe.schramm1999" target="blank"><img src={face} alt="link face" ></img></a>
                                        <a href="https://github.com/felipeschramm" target="blank"><img src={git} alt="link github" ></img></a>
                                        <a href="https://www.linkedin.com/in/felipe-cabreira-schramm-4399ba160/" target="blank"><img src={link} alt="link linkedin" ></img></a>
                                    </div>
                                </div>



                                <div className="column col-sm-6 padin">
                                    <form action="https://formspree.io/felipecschramm@hotmail.com" method="POST">
                                        <div className="row form-group">
                                            <label className="textoBranco">NOME</label>
                                            <input type="text" className="form-control" placeholder="Nome"></input>
                                        </div>
                                        <div className="row form-group">
                                            <label className="textoBranco">E-MAIL</label>
                                            <input type="email" name="email" className="form-control" placeholder="Email"></input>
                                        </div>
                                        <div className="row form-group">
                                            <label className="textoBranco">ASSUNTO</label>
                                            <input type="text" className="form-control" placeholder="Assunto"></input>
                                        </div>
                                        <div className="row form-group">
                                            <label className="textoBranco">MENSAGEM</label>
                                            <textarea placeholder="Mensagem" name="message" className="form-control"></textarea>
                                        </div>
                                        <div className="row">
                                            <button type="submit" className="btn branco btn-primary">ENVIAR</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Contato;