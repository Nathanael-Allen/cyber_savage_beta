import { useEffect, useState } from "react";
import { TForce } from "../types/types";

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
    "bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom";

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
            className="w-2/3 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
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
              className="w-2/3 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
            >
              Load Force
            </button>
          )}
        </div>
      )}
      {newForceModal && (
        <div className="flex flex-col justify-center items-center gap-2">
          <button
            onClick={() => setNewForceModal(false)}
            className="absolute right-2 top-14 font-semibold text-red-600 text-xl hover:text-red-700"
          >
            Cancel
          </button>

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
        </div>
      )}
      {loadModal && (
        <div className="text-center relative">
          <button
            onClick={() => setLoadModal(false)}
            className="absolute right-2"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="h-11 fill-red-800 hover:fill-red-600"
            >
              <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
            </svg>
          </button>
          <h4 className="font-semibold text-4xl mb-8">Load Force</h4>
          <ul className="max-w-2/3">
            {availableForces.map((force) => {
              return (
                <li
                  className="text-xl cursor-pointer border border-gray-800 bg-gray-700 text-white flex"
                >
                  <button className="text-left w-full p-2" onClick={() => handleLoadArmy(force)}>{force.forceName}</button>
                  <button
                    className="text-red-500 ml-auto hover:text-red-600 p-2"
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
