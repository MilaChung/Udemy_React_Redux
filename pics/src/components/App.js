import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

    async onSearchSubmit(term) {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query:term },
            headers: {
                Authorization: "Client-ID b4VJEjK74AJCdH_pdJaHYEIFoVMfQujzvkJdxojOEmc"
            }
        })
        console.log(response);
    }

    render () {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;