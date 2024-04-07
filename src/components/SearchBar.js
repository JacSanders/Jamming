import './styles/SearchBar.css';

const SearchBar = ({search, setSearch, setResults, getTracks, token}) => {

    const handleChange = ({target}) =>  {
        setSearch(target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await getTracks(search, token);
        setResults(response.tracks.items);
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar" name="search-bar">
            <input type="text" onChange={handleChange} value={search} className='search' />
            <input type="submit" value="Search" className='submit' />
        </form>
    );
}
 
export default SearchBar;