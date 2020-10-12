import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

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
        
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }

        if(this.state.lat) {           
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <h1> "Please accept location request" </h1>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);