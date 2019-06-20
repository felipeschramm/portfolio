import React, { Component } from 'react';
import "./styles.css";

class Mais extends Component {
    render() {
        return (
            <>
                <section>
                    <div id="mais">
                        <div className="container">
                            <h2>MAIS</h2>
                            <div className="row">
                                <div className="column col-sm-6 margem">
                                    <h3>BIOGRAFIA</h3>
                                    <p>&nbsp;&nbsp;&nbsp;Minha primeira faculdade foi em Ciência da Computação em 2016 em Campo Mourão-PR, na época não sabia se gostava realmente da área, porém peguei gosto muito rápido. Apesar disso, queria ir para uma área mais prática, gostava mais da parte de software do que hardware, então me transferi para Engenharia De Software em Cornélio Procópio-PR, onde fiquei realmente satisfeito. Gosto muito de programação Mobile, principalmente o que se relaciona com Android. Quando acabar a faculdade pretendo trabalhar nesta área, e num futuro próximo tentar uma pós graduação fora do país.
                            </p>
                                </div>

                                <div className="column col-sm-6 margem">
                                    <h3>TRABALHO</h3>
                                    <p>Não possuo experiência na área, porém desde que me interessei por computação lá no meu ensino médio, curtia aplicações mobile, tentava entender como funcionava á fundo. Um dos motivos de começar a entender mais sobre, foi uma ideia que tive para um app no ensino médio. Á partir daí entrei de cabeça no assunto, e cada dia mais aprendo algo diferente!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Mais;