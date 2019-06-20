import React, { Component } from 'react';
import "./styles.css"

class Habilidades extends Component {
    render() {
        return (
            <>
                <section>
                    <div id="skills">
                        <div className="container">
                            <div className="column">
                                <h2>HABILIDADES</h2>
                            </div>
                            <div className="row">
                                <div className="column itensSkill col-sm-3">
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                    </ul>
                                </div>

                                <div className="column itensSkill col-sm-3">
                                    <ul>
                                        <li>JAVASCRIPT</li>
                                        <li>SQL</li>
                                    </ul>
                                </div>

                                <div className="column itensSkill col-sm-3">
                                    <ul>
                                        <li>C</li>
                                        <li>JAVA</li>
                                    </ul>
                                </div>

                                <div className="column itensSkill col-sm-3">
                                    <ul>
                                        <li>SELENIUM</li>
                                        <li>ANDROID STUDIO</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Habilidades;