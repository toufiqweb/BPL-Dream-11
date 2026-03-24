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

      <Suspense fallback = {<div className=" flex justify-center items-st h-[50vh]"><span className="loading loading-infinity loading-xl"></span></div>}>
        <Players fetchPlayersData = {fetchPlayersData}/>
      </Suspense>
    </>
  );
}

export default App;
