
import { getStarshipList } from '../../services/api-calls'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const StarshipList = () => {
  const [starshipList, setStarshipList] =useState([])

  useEffect(()=> {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])


  if(!starshipList.length) return <h1>There is no loading...only load or load not</h1>
  
  return (
    <main className="starship-list">
      <h1>StarShip List (OMG Badass!)</h1>
      {starshipList.map(starship => 
        // console.log(starship);
        <Link  key={starship.url} to={`/starships/details`} state={{url: starship.url}}>
          <div className="link-container">
            {starship.name}
          </div>
        </Link>
        )}
    </main> 
  )
}

export default StarshipList