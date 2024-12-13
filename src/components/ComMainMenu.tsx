

type props = {handleNewArmy: () => void, handleLoadArmy: () => void}

export default function ComMainMenu({handleNewArmy, handleLoadArmy}: props) {
  const armiesJson = localStorage.getItem("myArmy");
  const availableArmies = armiesJson ? JSON.parse(armiesJson) : [];

  return (
    <div className="max-w-2/3 h-80 flex flex-col justify-center items-center gap-4">
      <button onClick={handleNewArmy} className="w-2/3 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">New Force</button>
      {availableArmies.length <=0 && <p className="w-2/3 bg-gray-200 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">Load Force</p>}
      {availableArmies.length > 0 && <button onClick={handleLoadArmy} className="w-2/3 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">Load Force</button>}
    </div>
  )
}