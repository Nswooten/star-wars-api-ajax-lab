const baseUrl = "https://swapi.dev/api/"

export async function getStarshipList() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

export async function getStarship(starshipUrl) {
  // const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  console.log("service", starshipUrl)
  
  const res = await fetch(starshipUrl)
  return res.json()
}