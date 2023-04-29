import './App.css';
import { useEffect, useState , Suspense} from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  useEffect(() => {
    if (searchTerm) {
      setData(fetchData(searchTerm) )
  }
  }, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }
  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<h1>Loading...</h1>} >
                <Gallery data={data} />
            </Suspense>
        )
    }
}


  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}


export default App;