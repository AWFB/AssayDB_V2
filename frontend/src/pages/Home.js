import { useEffect, useState } from 'react'

import AssayList from '../components/AssayList'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [assays, setAssays] = useState(null)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchAssays = async () => {
      const response = await fetch('/api/assays')

      // response from backend is an array of objects
      const json = await response.json()

      if (response.ok) {
        setAssays(json)
        setSearchResults(json)
      }
    }
    fetchAssays()
  }, [])

  return (
    <>
      <div className='search'>
        <SearchBar assays={assays} setSearchResults={setSearchResults} />
      </div>
      <div className='home'>
        <AssayList searchResults={searchResults} />
      </div>
    </>
  )
}

export default Home
