import { TUnit, TEditViews } from "../../types/types";
import ComCharacterStatHeader from "../ComCharacterStatHeader";

type props = {character: TUnit, handleViewChange: (view: TEditViews) => void}

export default function ComEditMain({character, handleViewChange}: props) {
  return (
    <>
      <div className="grid grid-cols-2 bg-slate-900">
      </div>
      <ComCharacterStatHeader character={character} />
      <div className="w-full flex flex-col gap-8 text-white text-lg font-semibold mt-12">
        <button className="w-3/4 m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleViewChange("characteristics")}>
          Characteristics
        </button>
        {character.numSpells > 0 ? (
          <button className="w-3/4 m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleViewChange("spells")}>
            Spells
          </button>
        ) : null}
        <button className="w-3/4 m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700" onClick={() => handleViewChange("weapons")}>
          Weapons
        </button>
      </div>
      <div className="w-full fixed bottom-0 left-0 grid grid-cols-2">
          <button className="py-1 w-full bg-red-900 text-white text-2xl font-semibold">cancel</button>
          <button className="py-1 w-full bg-sky-900 text-white text-2xl font-semibold">save</button>
      </div>
    </>
  );
}
