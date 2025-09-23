import HeroSection from "../HeroSection/HeroSection";
import SelectedSinglePlayers from "./SelectedSinglePlayers";

const SelectedPlayers = (purchasedPlayers, removePlayer) => {
  const singleSelectedPlayersData = purchasedPlayers.purchasedPlayers;

  return (
    <div className="mt-5">
      {/* <HeroSection />  */}
      <div className="grid grid-cols-1 space-y-4">
        {singleSelectedPlayersData.map((singlePlayerData) => (
          <SelectedSinglePlayers
            key={singlePlayerData.name}
            removePlayer={removePlayer}
            singlePlayerData={singlePlayerData}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
