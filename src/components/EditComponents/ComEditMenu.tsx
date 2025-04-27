import { TUnit, TEditViews } from "../../types/types";
import ComCharacterStatHeader from "../ComCharacterStatHeader";

type props = {
  character: TUnit;
  handleEditViewChange: (view: TEditViews) => void;
  handleSaveCharacter: (character: TUnit) => void;
};

export default function ComEditMenu({
  character,
  handleEditViewChange,
  handleSaveCharacter,
}: props) {
  return (
    <>
      <div className="grid grid-cols-2 bg-slate-900"></div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold">{character.unitName}</h2>
        <div className="flex gap-6">
          <p className="text-xl font-semibold">{character.unitClass}</p>
          <p className="text-xl">level: {character.level}</p>
        </div>
      </div>

      <ComCharacterStatHeader character={character} />
      <div className="w-full flex flex-col gap-4 text-white text-lg font-semibold mt-6">
        <button
          className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700"
          onClick={() => handleEditViewChange("characteristics")}
        >
          Edit Characteristics
        </button>
        {character.numSpells > 0 ? (
          <button
            className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700"
            onClick={() => handleEditViewChange("spells")}
          >
            Edit Spells
          </button>
        ) : null}
        <button
          className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700"
          onClick={() => handleEditViewChange("weapons")}
        >
          Edit Weapons
        </button>
        <button
          className="w-full m-auto py-2 bg-slate-900 rounded-md hover:bg-slate-700"
          onClick={() => handleSaveCharacter(character)}
        >
          Done Editing
        </button>
      </div>
    </>
  );
}
