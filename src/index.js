import React, { useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import RickMortyShow from "./components/Home";
import Footer from './components/Footer';
import Header from "./components/Header";
import "./styles/global.scss";
import "../assets/favicon.png";

const App = () => {
    const [state, setState] = useState(false);
    
    return (
        <React.Fragment>
            <Header toggleFlyout={() => setState(!state)}/>
            <CssBaseline />
            <Container maxWidth="lg" style={{padding: 0}}>
                <RickMortyShow toggleFlyout={() => setState(!state)}  showFlyout={state}/>
            </Container>
            <Footer/>
        </React.Fragment>
    );
};

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
