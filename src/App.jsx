import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import AvailablePlayers from "./components/AvailablePlayers/Availableplayers";
import { Suspense, useState } from "react";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";

const allPlayersData = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
// state declare
const AvailablePlayersData = allPlayersData();

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (remove) => {
    console.log(remove);
  };

  const AllPlayersToggle = (toggleResult) => {
    setToggle(toggleResult);
  };

  return (
    <>
      <div className="shadow-sm">
        <div className="max-w-[1440px] w-11/12 mx-auto h-auto">
          <Navbar availableBalance={availableBalance} />

          <HeroSection />

          <div className="mt-5 space-y-3 md:mt-10 md:flex  md:items-center md:justify-between">
            <h2 className=" text-center md:text-left font-medium text-2xl text-zinc-900 capitalize ">
              {toggle
                ? "available players"
                : `"available players (${purchasedPlayers.length}/6)`}
            </h2>
            <div className="flex items-center justify-center">
              <button
                onClick={() => AllPlayersToggle(true)}
                className={`"text-xl font-medium  px-3 py-2 border border-r-0 rounded-l-lg  text-zinc-400  border-zinc-300 capitalize cursor-pointer border-r-0" ${
                  toggle === true ? "bg-[#E7FE29]" : "bg-white text-zinc-900"
                }`}
              >
                available
              </button>
              <button
                onClick={() => AllPlayersToggle(false)}
                className={`"text-xl font-medium  px-3 py-2 border border-l-0 rounded-r-lg  text-zinc-400  border-zinc-300 capitalize cursor-pointer border-r-0" ${
                  toggle === false ? "bg-[#E7FE29]" : "bg-white text-zinc-900"
                }`}
              >
                selected (<span>{purchasedPlayers.length}</span>)
              </button>
            </div>
          </div>

          <div>
            {toggle === true ? (
              <Suspense fallback={"Data loading.."}>
                <AvailablePlayers
                  setAvailableBalance={setAvailableBalance}
                  AvailablePlayersData={AvailablePlayersData}
                  availableBalance={availableBalance}
                  purchasedPlayers={purchasedPlayers}
                  setPurchasedPlayers={setPurchasedPlayers}
                />
              </Suspense>
            ) : (
              <SelectedPlayers
                purchasedPlayers={purchasedPlayers}
                removePlayer={removePlayer}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
