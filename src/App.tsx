import { useState } from "react"
import { TMainViews, TUnit } from "./types/types"
import ComAvailableUnitList from "./components/ComAvailableUnitList"
import ComUnitNew from "./components/ComUnit"
import getTotalPoints from "./utils/getTotalPoints"
import ComEditWindow from "./components/ComEditWindow"


export default function App() {
  // Click Handlers
  function handleAddUnit(unit:TUnit) {
    const updatedUnit = {
      ...unit,
      id: equippedUnits.length
    }
    setEquippedUnits([...equippedUnits, updatedUnit])
  }

  function editUnit(unit: TUnit) {
    setUnitToEdit(unit);
    setView("editUnit");
  }

  function saveUnit(unit: TUnit) {
    setEquippedUnits(equippedUnits.map((equippedUnit) => {
      if (equippedUnit.id === unit.id) {
        return {
          ...unit
        }
      } else {
        return {
          ...equippedUnit
        }
      }
    }))
    setView("equippedUnits")
  }
  
  // State variables
  const [view, setView] = useState<TMainViews>("addUnits")
  const [equippedUnits, setEquippedUnits] = useState<TUnit[]>([])
  const [unitToEdit, setUnitToEdit] = useState<TUnit>()
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
      {equippedUnits.map((unit, index) => {
          return (
            <ComUnitNew key={index} unit={unit} editCallback={editUnit} />
          )
        })}
      </div>
      }
      {view === "editUnit" && <ComEditWindow unit={unitToEdit!} mainHandler={saveUnit} />}
    </div>

  )
}