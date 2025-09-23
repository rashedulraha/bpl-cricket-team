import { useState } from "react";

const SinglePlayer = ({
  singPlayer,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const { name, img, country, price, rating, role, battingStyle } = singPlayer;

  const [isSelected, setIsSelected] = useState(false);

  const ChoosePlayers = () => {
    if (availableBalance < price) {
      alert("Not enough coins");
      return;
    }
    setAvailableBalance(availableBalance - price);
    setIsSelected(!isSelected);

    const newPlayersData = [...purchasedPlayers, singPlayer];
    setPurchasedPlayers(newPlayersData);
    // console.log(newPlayersData);
  };

  return (
    <div>
      <div className="card  w-full h-auto shadow-sm p-4 bg-white text-zinc-900">
        <figure className="w-full  h-[240px] overflow-hidden object-cover rounded-lg">
          <img className="w-full h-full object-cover" src={img} alt="Shoes" />
        </figure>
        <div className="mt-4 space-y-3">
          <h2 className="card-title">
            <i className="bi bi-person"></i> {name}
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-zinc-500">
              <i className="bi bi-flag"> </i>
              <span>{country}</span>
            </p>
            <span className="bg-white border border-gray-100 px-3 py-1 rounded-lg font-medium text-lg text-purple-500">
              {role}
            </span>
          </div>
          <hr className="text-zinc-300 " />
          <div className="flex  items-center justify-between">
            <p className="text-lg font-bold text-zinc-700">
              Rating{"  "}
              <span className="px-2 py-1 rounded-full bg-purple-50 text-purple-500">
                {rating}
              </span>
            </p>
            <span className="space-x-1 text-yellow-400">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-zinc-700 ">Left-Hand-Bat</p>
            <p className="text-zinc-500 text-lg font-medium"> {battingStyle}</p>
          </div>

          <div className=" flex items-center justify-between mt-5">
            <span className="text-lg font-bold text-zinc-700"> $ {price}</span>
            <button
              disabled={isSelected}
              onClick={ChoosePlayers}
              className={`btn  bg-white text-lg border  font-bold    shadow-none border-gray-200 hover:bg-zinc-200 ${
                isSelected ? "text-green-300 " : "text-zinc-700"
              }`}
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
