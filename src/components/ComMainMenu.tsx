import { useEffect, useState } from "react";
import { TForce } from "../types/types";
import getForcePointTotal from "../utils/getForcePointTotal";
import ComRenameForceModal from "./ComRenameForceModal";

type props = {
  handleNewArmy: (forceName: string) => void;
  handleLoadArmy: (force: TForce) => void;
};

export default function ComMainMenu({ handleNewArmy, handleLoadArmy }: props) {
  const [newForceModal, setNewForceModal] = useState(false);
  const [loadModal, setLoadModal] = useState(false);
  const [forceNameState, setForceNameState] = useState("");
  const [validName, setValidName] = useState(false);
  const [forceToRename, setForceToRename] = useState<TForce>();
  const forcesJSON = localStorage.getItem("forces");
  const [availableForces, setAvailableForces] = useState<TForce[]>(
    forcesJSON ? JSON.parse(forcesJSON) : []
  );
  const disabledCSS =
    "bg-gray-400 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md";
  const enabledCSS =
    "bg-black font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom";

  useEffect(() => {
    if (forceNameState.length > 0) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [forceNameState]);

  function handleDelete(ID: string) {
    const updatedForces = availableForces.filter(
      (force) => force.forceID != ID
    );
    setAvailableForces(updatedForces);
    localStorage.setItem("forces", JSON.stringify(updatedForces));
  }

  function closeModal() {
    setForceToRename(undefined)
  }

  function renameHandler(force: TForce) {
    const updatedForces = availableForces.map((existingForce) => {
      if (existingForce.forceID === force.forceID) {
        return force;
      } else {
        return existingForce;
      }
    })
    setAvailableForces(updatedForces)
    localStorage.setItem("forces", JSON.stringify(updatedForces));
    closeModal();
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
              className="text-xl underline font-semibold hover:text-gray-800"
            >
              Main Menu
            </button>
          <h4 className="font-semibold text-4xl mb-8">Load Force</h4>
          <ul className="max-w-2/3">
            {availableForces.map((force, index) => {
              return (
                <li
                  key={index}
                  className="relative items-center cursor-pointer border border-white bg-gray-800 m-2 text-white"
                >
                  <div>
                    <h4
                      className="text-center p-2 m-auto text-2xl w-1/2"
                    >
                      {force.forceName}
                    </h4>
                    <div className="flex justify-center">
                      <p className="p-2 text-base">
                        Points: {getForcePointTotal(force)}
                      </p>
                      <p className="p-2 text-base">
                        Discipline: {force.discipline}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 ml-auto text-xl hover:text-red-600 p-2 absolute top-1 left-1"
                    onClick={() => handleDelete(force.forceID)}
                  >
                    Delete
                  </button>
                  <div>
                    <button
                      onClick={() => setForceToRename(force)}
                     className="text-lg text-sky-800 p-2 m-2 bg-gray-300 rounded-md hover:bg-gray-700 hover:text-sky-400">
                      Rename Force
                    </button>
                    <button
                      onClick={() => handleLoadArmy(force)}
                      className="text-lg text-sky-800 p-2 m-2 bg-gray-300 rounded-md hover:bg-gray-700 hover:text-sky-400"
                    >
                      Load Force
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          {forceToRename && (<ComRenameForceModal force={forceToRename} renameHandler={renameHandler} closeCallback={closeModal} />)}
        </div>
      )}
    </div>
  );
}
