import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ assays, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    // If empty return all assays
    if (!e.target.value) return setSearchResults(assays)

    const resultsArray = assays.filter(
      (assay) =>
        assay.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        assay.provider.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setSearchResults(resultsArray)
  }

  return (
    <div>
      <form className='search' onSubmit={handleSubmit}>
        <input
          className='search__input'
          type='text'
          id='search'
          onChange={handleSearchChange}
        />
        <button className='search__button'>
          <FaSearch />
        </button>
      </form>
    </div>
  )
}
export default SearchBar
