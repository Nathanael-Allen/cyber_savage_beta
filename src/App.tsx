import { useState } from "react"
import { TMainViews, TUnit } from "./types/types"
import ComAvailableUnitList from "./components/ComAvailableUnitList"
import ComUnitNew from "./components/ComUnit"
import getTotalPoints from "./utils/getTotalPoints"


export default function App() {
  // Click Handlers
  function handleAddUnit(unit:TUnit) {
    setEquippedUnits([...equippedUnits, unit])
  }
  
  // State variables
  const [view, setView] = useState<TMainViews>("addUnits")
  const [equippedUnits, setEquippedUnits] = useState<TUnit[]>([])
  const totalPoints = getTotalPoints(equippedUnits);
  
  return (
    <div>
      <header className="w-full flex text-xl bg-gray-800 text-white">
        <button onClick={() => {setView("addUnits")}} className="border-r border-white py-2 px-4 hover:shadow-custom">Add Units</button>
        <button onClick={() => {setView("equippedUnits")}} className="py-2 px-4 border-r border-white hover:shadow-custom">Equipped Units</button>
      </header>

      {view === "addUnits" && <ComAvailableUnitList addUnitCallback={handleAddUnit} />}
      {view === "equippedUnits" && 
      <div>
      <h1 className="font-semibold text-3xl text-center py-2">Equipped Units {totalPoints}/10</h1>
      {equippedUnits.map((unit) => {
          return (
            <ComUnitNew unit={unit} />
          )
        })}
      </div>
      }
    </div>

  )
}