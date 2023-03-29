import {Link} from "react-router-dom";

function SearchResults({breeds}) {
    if (!Array.isArray(breeds) || breeds.length === 0) {
        return (
            <>
                <h2>No Results</h2>
            </>
        );
    }
    const listItems = breeds.map(breed =>
        <SearchItem key={breed.id} breed={breed}/>
    );
    return (
        <>
            <h2>Search Results</h2>
            <div className="columns is-multiline">
                {listItems}
            </div>
        </>
    );
}

function SearchItem({breed}) {
    return (
        <div className="column is-one-fifths">
            <Link to={`/breed/${breed.id}`}>
                <img src={breed.image_url} className="image is-128x128" alt={breed.name}/>
                <p>{breed.name}</p>
            </Link>
        </div>
    );
}
export default SearchResults;