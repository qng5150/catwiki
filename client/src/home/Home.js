import React, {useState} from "react";
import "./home.scss";
import logo from "../images/logo.svg"
import SearchResults from "./SearchResults";

let apiUrl = process.env.REACT_APP_BASE_URL;

function Home() {
    const [searchResults, setSearchResults] = useState([]);
    function handleTypeAhead(event) {
        fetch(`${apiUrl}/search?breed=${event.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResults(data);
            });
    }

    return (
        <>
            <div className="box has-background-primary is-full m-2">
                <h1 className="has-text-primary-light has-text-left"><span><img src={logo} className="app-logo mr-2" alt="logo" /></span>Cat Wiki</h1>
                <form>
                    <div className="field">
                        <label className="label">Search</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Text input" onChange={handleTypeAhead}/>
                        </div>

                    </div>

                </form>
            </div>
            <div className="box has-background-white is-full m-2">
                <SearchResults breeds={searchResults}>

                </SearchResults>
            </div>
        </>
    );
}

export default Home;