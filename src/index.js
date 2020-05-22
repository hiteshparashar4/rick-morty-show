import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import RickMortyShow from "./components/Home";
import Footer from './components/Footer';
import "./styles/global.scss";
import "../assets/favicon.png";

class App extends React.Component {
    render() {
        return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" style={{padding: 0}}>
                <RickMortyShow />
            </Container>
            <Footer/>
        </React.Fragment>
        );
    }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
