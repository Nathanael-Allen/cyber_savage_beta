import { useState } from "react";
import { TForce } from "../types/types";


type props = {handleNewArmy: (forceName: string) => void, handleLoadArmy: (force: TForce) => void}

export default function ComMainMenu({handleNewArmy, handleLoadArmy}: props) {
  const [newForceModal, setNewForceModal] = useState(false)
  const [loadModal, setLoadModal] = useState(false)
  const [forceNameState, setForceNameState] = useState('')
  const forcesJSON = localStorage.getItem("forces");
  const availableForces: TForce[] = forcesJSON ? JSON.parse(forcesJSON) : [];
  const disabledCSS = "bg-gray-400 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md";
  const enabledCSS = "bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"

  return (
    <div className="">
      {!newForceModal && !loadModal && 
      <div className="w-full max-w-2/3 h-80 flex flex-col justify-center items-center gap-4">
        <button onClick={() => setNewForceModal(true)} className="w-2/3 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">New Force</button>
        {availableForces.length <=0 && <p className="w-2/3 bg-gray-200 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">Load Force</p>}
        {availableForces.length > 0 && <button onClick={() => setLoadModal(true)} className="w-2/3 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">Load Force</button>}        
      </div>}
      {newForceModal && (
        <div className="flex flex-col justify-center items-center gap-2">
          <h4 className="font-semibold text-4xl">New Force</h4>
          <input onChange={e => setForceNameState(e.target.value)} className="w-2/3 border-2 border-gray-800 rounded-md p-2" type="text" placeholder="Name..." />
          <button onClick={() => handleNewArmy(forceNameState)} disabled={forceNameState.length > 0 ? false : true} className={forceNameState.length > 0 ? enabledCSS : disabledCSS}>Create Force</button>
        </div>
      )}
      {loadModal &&
        <div className="text-center">
          <h4 className="font-semibold text-4xl">Load Force</h4>
          <ul className="max-w-2/3">
            {availableForces.map((force) => {
              return (
                <li className="text-xl cursor-pointer border border-gray-800 bg-gray-700 text-white p-2" onClick={() => handleLoadArmy(force)}>{force.forceName}</li>
              )
            })}
          </ul>
        </div>
      }

    </div>
  )
}