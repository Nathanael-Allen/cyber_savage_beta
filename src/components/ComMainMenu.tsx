import { useEffect, useState } from "react";
import { TForce } from "../types/types";
import getForcePointTotal from "../utils/getForcePointTotal";

type props = {
  handleNewArmy: (forceName: string) => void;
  handleLoadArmy: (force: TForce) => void;
};

export default function ComMainMenu({ handleNewArmy, handleLoadArmy }: props) {
  const [newForceModal, setNewForceModal] = useState(false);
  const [loadModal, setLoadModal] = useState(false);
  const [forceNameState, setForceNameState] = useState("");
  const [validName, setValidName] = useState(false);
  const forcesJSON = localStorage.getItem("forces");
  const [availableForces, setAvailableForces] = useState<TForce[]>(forcesJSON ? JSON.parse(forcesJSON) : []);
  const forceNames: string[] = availableForces.map((force) => force.forceName);
  const disabledCSS =
    "bg-gray-400 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md";
  const enabledCSS =
    "bg-black font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom";

  useEffect(() => {
    if (forceNameState.length > 0 && !forceNames.includes(forceNameState)) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [forceNameState]);

  function handleDelete(ID: string) {
    const updatedForces = availableForces.filter((force) => force.forceID != ID);
    setAvailableForces(updatedForces);
    localStorage.setItem("forces", JSON.stringify(updatedForces))
  }

  return (
    <div className="">
      {!newForceModal && !loadModal && (
        <div className="w-full max-w-2/3 h-80 flex flex-col justify-center items-center gap-4">
          <button
            onClick={() => setNewForceModal(true)}
            className="w-2/3 bg-black font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
          >
            New Force
          </button>
          {availableForces.length <= 0 && (
            <p className="w-2/3 bg-gray-200 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom">
              Load Force
            </p>
          )}
          {availableForces.length > 0 && (
            <button
              onClick={() => setLoadModal(true)}
              className="w-2/3 bg-black font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
            >
              Load Force
            </button>
          )}
        </div>
      )}
      {newForceModal && (
        <div className="flex flex-col justify-center items-center gap-2">

          <h4 className="font-semibold text-4xl">New Force</h4>
          <input
            onChange={(e) => setForceNameState(e.target.value)}
            className="w-2/3 border-2 border-gray-800 rounded-md p-2"
            type="text"
            placeholder="Name..."
          />
          <button
            onClick={() => handleNewArmy(forceNameState)}
            disabled={!validName}
            className={validName ? enabledCSS : disabledCSS}
          >
            Create Force
          </button>
          <button
            onClick={() => setNewForceModal(false)}
            className="font-semibold text-red-600 text-xl mt-4 hover:text-red-700"
          >
            Cancel
          </button>
        </div>
      )}
      {loadModal && (
        <div className="text-center relative">
          <button
            onClick={() => setLoadModal(false)}
            className="absolute left-4 text-xl text-red-600 font-semibold"
          >
            cancel
          </button>
          <h4 className="font-semibold text-4xl mb-8">Load Force</h4>
          <ul className="max-w-2/3">
            {availableForces.map((force, index) => {
              return (
                <li
                  key={index}
                  className="items-center cursor-pointer border border-gray-800 bg-black text-white"
                >
                  <div
                  onClick={() => handleLoadArmy(force)}
                  >
                    <button className="text-left p-2 text-2xl" onClick={() => handleLoadArmy(force)}>{force.forceName}</button>
                    <div className="flex justify-center">
                      <p className="p-2 text-base">Points: {getForcePointTotal(force)}</p>
                      <p className="p-2 text-base">Discipline: {force.discipline}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 ml-auto text-xl hover:text-red-600 p-2"
                    onClick={() => handleDelete(force.forceID)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
