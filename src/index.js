import "./styles/global.scss";
import "../assets/favicon.png";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import RickMortyShow from "./components/Home";
import Footer from './components/Footer';
import Header from "./components/Header";
import Flyout from './components/Flyout';
import SideBarFilters from './components/SideBarFilters';
import { connectState } from './store/connectState';

const App = (props) => {
    const [state, setState] = useState(false);
    const {
        isLoading,
        filters,
        selectedFilters,
        handleFilterChange
    } = props;
    
    return (
        <React.Fragment>
            <CssBaseline />
            <Flyout showFlyout={state} toggleFlyout={() => setState(!state)}>
                <SideBarFilters
                    isLoading={isLoading}
                    filters={filters}
                    selectedFilters={selectedFilters}
                    handleFilterChange={handleFilterChange}
                />
            </Flyout>
            <Header onMenuIconClick={() => setState(!state)} />
            <Container maxWidth="lg" style={{padding: 0}}>
                <RickMortyShow { ...props } />
            </Container>
            <Footer/>
        </React.Fragment>
    );
};

const wrapper = document.getElementById("container");
const Root = connectState(App);
wrapper ? ReactDOM.render(<Root />, wrapper) : false;
