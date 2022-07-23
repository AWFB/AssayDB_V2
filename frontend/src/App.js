import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar';
import CreateAssay from './pages/CreateAssay';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-assay' element={<CreateAssay />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
