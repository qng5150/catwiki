function SearchResults({breeds}) {
    if (!Array.isArray(breeds) || breeds.length === 0) {
        return (
            <>
                <h2>No Results</h2>
            </>
        );
    }
    return (
        <>
            <h2>Search Results</h2>
            {breeds}
        </>

    );
}
export default SearchResults;