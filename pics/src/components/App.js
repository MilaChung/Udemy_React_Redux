import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

    state = { images:[] };

    onSearchSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query:term },
            headers: {
                Authorization: "Client-ID b4VJEjK74AJCdH_pdJaHYEIFoVMfQujzvkJdxojOEmc"
            }
        })

        this.setState({ images:response.data.results })
    }

    render () {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <span> Results: { this.state.images.length } images was found</span>

                <ImageList foundImages={this.state.images} />
            </div>
        );
    }
}

export default App;