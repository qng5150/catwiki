import React, {useState} from "react";
import "./home.scss";
import logo from "../images/logo.svg"
import SearchResults from "./SearchResults";

function Home() {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <div className="box has-background-primary is-full m-2">
            <h1 className="has-text-primary-light has-text-left"><span><img src={logo} className="app-logo mr-2" alt="logo" /></span>Cat Wiki</h1>
            <form>
                <div className="field">
                    <label className="label">Search</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input"/>
                    </div>
                    {searchResults}
                </div>
                <SearchResults breeds={searchResults}>

                </SearchResults>
            </form>
        </div>
    );
}

export default Home;