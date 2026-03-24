import "./App.css";
import Navbar from "./components/homepage/navbar/Navbar";
import Hero from "./components/homepage/hero/Hero";
import { Suspense } from "react";
import Players from "./components/players/Players";


const fetchPlayersData = fetch("/playerData.json").then(res => res.json())

function App() {
  return (
    <>
      
      <Navbar/>
      <Hero/>

      <Suspense fallback = {<span className="loading loading-infinity loading-xl"></span>}>
        <Players fetchPlayersData = {fetchPlayersData}/>
      </Suspense>
    </>
  );
}

export default App;
