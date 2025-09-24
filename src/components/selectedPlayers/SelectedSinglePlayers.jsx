const SelectedSinglePlayers = ({ singlePlayerData, removePlayer }) => {
  //
  const handleClickRemove = () => {
    removePlayer(singlePlayerData);
  };

  const { img, name, battingStyle, role } = singlePlayerData;
  return (
    <>
      <div className="p-4 border border-gray-300 rounded-lg flex items-center justify-between">
        <div className="flex items-start space-x-3">
          <figure className="w-20 h-20 bg-red-500 rounded-lg overflow-hidden ">
            <img className="object-cover h-full w-full" src={img} alt="" />
          </figure>
          <div>
            <h2 className="font-bold text-lg ">{name}</h2>
            <div className="flex items-center space-x-3">
              <p className="text-sm font-medium text-zinc-500 capitalize">
                {battingStyle}
              </p>
              <p className="text-sm font-medium text-zinc-500 capitalize ">
                {role}
              </p>
            </div>
          </div>
        </div>

        <div className="cursor-pointer" onClick={handleClickRemove}>
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </>
  );
};

export default SelectedSinglePlayers;
