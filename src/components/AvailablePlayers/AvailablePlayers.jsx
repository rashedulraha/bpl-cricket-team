import { use } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const AvailablePlayers = ({
  AvailablePlayersData,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const PlayersData = use(AvailablePlayersData);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {PlayersData.map((singPlayer) => (
          <SinglePlayer
            key={singPlayer.name}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            singPlayer={singPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
