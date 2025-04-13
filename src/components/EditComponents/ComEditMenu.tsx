import { TUnit, TEditViews } from "../../types/types";
import ComCharacterStatHeader from "../ComCharacterStatHeader";

type props = {character: TUnit, handleEditViewChange: (view: TEditViews) => void}

export default function ComEditMain({character, handleEditViewChange}: props) {
  return (
    <>
      <div className="grid grid-cols-2 bg-slate-900">
      </div>
      <ComCharacterStatHeader character={character} />
      <div className="w-full flex flex-col gap-4 text-white text-lg font-semibold mt-6">
        <button className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleEditViewChange("characteristics")}>
          Edit Characteristics
        </button>
        {character.numSpells > 0 ? (
          <button className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleEditViewChange("spells")}>
            Edit Spells
          </button>
        ) : null}
        <button className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleEditViewChange("weapons")}>
          Edit Weapons
        </button>
        <button className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleEditViewChange("weapons")}>
          Done
        </button>
      </div>
    </>
  );
}
