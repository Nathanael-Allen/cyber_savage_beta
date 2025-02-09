import { useState, useEffect } from "react";
import { TForce } from "../types/types";

type props = {
  force: TForce;
  renameHandler: (force: TForce) => void;
  closeCallback: () => void;
};

export default function ComRenameForceModal({
  force,
  renameHandler,
  closeCallback,
}: props) {
  const [newNameState, setNewNameState] = useState<string>("");
  const [validName, setValidName] = useState(false);

  const disabledCSS =
    "bg-gray-400 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md";
  const enabledCSS =
    "bg-sky-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom";

  useEffect(() => {
    if (newNameState.length > 0) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  }, [newNameState]);

  function renameForce(newName: string) {
    renameHandler({
      ...force,
      forceName: newName,
    });
  }

  return (
    <div className="fixed z-10 left-0 top-0 w-full h-full bg-opacity-40 bg-black overflow-auto flex justify-center items-center">
      <div className="relative bg-gray-800 border-white rounded-md w-4/5 max-w-lg p-4 flex flex-col justify-center gap-2">
        <h1 className="text-white font-semibold text-xl">Rename force</h1>
        <input
          onChange={(e) => setNewNameState(e.target.value)}
          className="w-2/3 border-2 border-gray-800 rounded-md p-2 mx-auto"
          type="text"
          placeholder="Name..."
        />
        <button
          disabled={!validName}
          className={validName ? enabledCSS : disabledCSS}
          onClick={() => renameForce(newNameState!)}
        >
          Save
        </button>
        <button onClick={closeCallback} className="absolute top-1 left-1 text-red-600">
          Cancel
        </button>
      </div>
    </div>
  );
}
