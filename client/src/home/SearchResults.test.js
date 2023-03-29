import {render, screen} from '@testing-library/react'
import SearchResults from "./SearchResults";

test('renders no results', () => {
    const component = render(
        <SearchResults breeds={[]}></SearchResults>
    );
    expect(screen.getByText('No Results')).toHaveTextContent("No Results");
});


test('renders results', () => {
    const component = render(
        <SearchResults breeds={["a","b","c"]}></SearchResults>
    );
    expect(screen.getByText('Search Results')).toHaveTextContent("Search Results");
});