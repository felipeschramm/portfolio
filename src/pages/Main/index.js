import React,{Component} from 'react';
import Menu from "../../components/Menu";
import Home from "../../components/Home";
import Habilidades from "../../components/Habilidades";
import Blogs from "../../components/Blogs";
import Portfolio from "../../components/Portfolio";
import Mais from "../../components/Mais";
import Contato from "../../components/Contato";
import Footer from "../../components/Footer";

class Main extends Component{
    render(){
        return(
            <>
            <Menu/>
            <Home/>
            <Habilidades/>
            <Blogs/>
            <Portfolio/>
            <Mais/>
            <Contato/>
            <Footer/>
            </>
        );
    };
};

export default Main;