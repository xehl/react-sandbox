// login
// information about app
import NavBar from "../components/navbar";
import CountDisplay from "../components/countdisplay";
import PlayerInfo from "../components/playerinfo";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function LandingPage() {
  
  let [players, setPlayers] = useState(null)
  let [isLoading, setIsLoading] = useState(true)
  let [count, setCount] = useState(0)
  console.log("rendered", players)

  // let navigate = useNavigate()

  // function handleClick(e) {
  //   e.preventDefault();
  //   navigate("/dashboard");
  // }

  useEffect(() => {
    axios.get('https://www.balldontlie.io/api/v1/players?per_page=100')
    .then(res => {
      console.log(res.data.data)
      setPlayers(res.data.data)
    }).catch(err => console.log(err));
  }, [])

  useEffect(() => {
    if (players) {
      setIsLoading(false);
    }
  }, [players])

  return (
    <div>
      <NavBar />
      <div className="flex flex-col">
        <div className="text-6xl">Here's some info</div>
        <div>
          Login here:
        </div>
        <button className="btn btn-blue" onClick={() => setCount(count + 1)}>up </button>
        <button className="btn btn-red" onClick={() => setCount(count - 1)}>down</button>
        <CountDisplay count={count} />
        <div>
          {isLoading ? (
            <h1>Loading players...</h1>
          ) : (
            players.map(player => {
              return <PlayerInfo key={player.id} firstname={player.first_name} lastname={player.last_name} feet={player.height_feet} inches={player.height_inches} />
            })
          )}
        </div>
          {/* <div onClick={handleClick}>go to dashboard</div> */}
      </div>
    </div>
  );
}
