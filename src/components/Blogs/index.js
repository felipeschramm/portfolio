import React, { Component } from 'react';
import "./styles.css";
import chrome from "../../img/2.webp";
import net from "../../img/3.jpg";
import lean from "../../img/2.png";

class Blogs extends Component {
    render() {
        return (
            <>
                <section>
                    <div id="blogs">
                        <div className="container">
                            <h2>BLOGS</h2>
                            <div className="central row" >
                                <div className="column col-sm-4">
                                    <h3>TECMUNDO</h3>
                                    <a href="https://www.tecmundo.com.br/internet/142021-5g-coisa-passado-moda-trabalhar-6g.htm" target="blank"><img className="fotoBlog" src={net} alt="blog1" ></img><br />5G É COISA DO PASSADO, A MODA AGORA É TRABALHAR COM 6G<br /><br /><p>por Felipe Payão</p></a>
                                </div>
                                <div className="column col-sm-4">
                                    <h3>INFOQ</h3>
                                    <a href="https://www.infoq.com/br/articles/lean-agile-design-thinking/" target="blank"><img className="fotoBlog" src={lean} alt="blog2" ></img><br />LEAN, ÁGIL OU DESIGN THINKING?<br /><br /><p>por Edeilson Silva</p></a>
                                </div>

                                <div className="column col-sm-4">
                                    <h3>TECNOBLOG</h3>
                                    <a href="https://tecnoblog.net/292696/google-aumenta-seguranca-chrome-web-store/" target="blank"><img className="fotoBlog" src={chrome} alt="blog3" ></img><br />GOOGLE AUMENTA REGRAS PARA DEIXAR EXTENSÕES DO GOOGLE CHROME MAIS SEGURAS<br /><br /><p>por Emerson Alecrim</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Blogs;