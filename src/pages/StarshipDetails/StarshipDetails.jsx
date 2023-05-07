import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getStarship } from "../../services/api-calls"
import { Link } from "react-router-dom"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  const { starshipId } = useParams()
  

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId] )
  console.log(starshipDetails);
  if (!setStarshipDetails) return <h1>There is no loading...only load or load not</h1>

  return (     
    <main className="starship-details">
      <div className="starship-container">
      <div>Name: {starshipDetails.name} </div>
      <div>Model: {starshipDetails.model} </div>
      <div><Link to="/starships">Return</Link> </div>
      </div>
    </main>
  )
}
 
export default StarshipDetails;