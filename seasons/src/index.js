import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{

    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: " " };
    }

    componentDidMount() {
        //navigator.geolocation.getCurrentPosition(sucess, error, options)
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage:err.message })
        );
    }

    render() {
        return (
            <div>
            <h1> The latitude is {this.state.lat} </h1>
        </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);