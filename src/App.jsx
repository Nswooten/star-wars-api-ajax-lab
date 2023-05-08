// npm modules
import { Route, Routes } from 'react-router-dom'

// components
import NavBar from './components/NavBar/NavBar'

// pages
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

// css
import './App.css'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/starships" element={<StarshipList />} />
        {/* <Route path="/starships/https://swapi.dev/api/starships/:starshipId/" element={<StarshipDetails />} /> */}
        <Route path="/starships/details" element={<StarshipDetails />} />

      </Routes>
    </>
  )
}

export default App
