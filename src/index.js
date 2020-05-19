import React from "react";
import ReactDOM from "react-dom";
import './mystyle.scss';
import '../assets/favicon.png';

class MyComponent extends React.Component {

    render() {
        return (
            <h1>Working</h1>
        );
    }

}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<MyComponent />, wrapper) : false;

