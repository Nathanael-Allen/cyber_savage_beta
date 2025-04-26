import React, { MouseEvent, useState } from "react";
import { TAction } from "../../reducers/editReducer";
import { TEditViews, TSpells } from "../../types/types";
import { SpellsList } from "../../constants/SpellsList";
import ComSpellModal from "../UtilityComponents/ComSpellModal";

type props = {
  equippedSpells: TSpells[];
  dispatch: React.Dispatch<TAction>;
  handleEditViewChange: (view: TEditViews) => void;
};

export default function ComEditSpells({
  equippedSpells,
  dispatch,
  handleEditViewChange,
}: props) {
  const equippedSpellsNames = equippedSpells.map((spell) => spell.name);
  const [description, setDescription] = useState<TSpells | null>(null)

  function closeModal() {
    setDescription(null)
  }

  function openModal(e: React.MouseEvent, spell: TSpells) {
    e.stopPropagation();
    setDescription(spell);
  }

  function removeSpell(spell: TSpells, e: MouseEvent) {
    e.stopPropagation();
    dispatch({ type: "removeSpell", spell: spell });
  }

  return (
    <>
      <div className="mb-4 border bg-white border-black rounded-md">
        <h2 className="bg-slate-800 text-white text-xl p-1 font-semibold text-center rounded-t-md">
          Equipped
        </h2>
        <div className="bg-white border border-black flex gap-1 flex-wrap text-sm p-2 h-36 overflow-scroll">
          {equippedSpells.map((spell, index) => {
            return (
              <button
                key={index}
                className="h-min p-2 bg-slate-500 border border-slate-500 rounded-md text-white flex items-center gap-1 hover:border-red-400"
                onClick={(e) => removeSpell(spell, e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-red-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 12h12"
                  />
                </svg>

                {spell.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="bg-slate-200 border border-black rounded-md">
        <h2 className="bg-slate-800 text-white text-xl p-1 font-semibold text-center">
          Spells
        </h2>
        <ul className="max-h-48 overflow-scroll overscroll-contain">
          {SpellsList.map((spell, index) => {
            if (equippedSpellsNames.indexOf(spell.name) === -1) {
              return (
                <li
                  key={index}
                  className="flex items-center  bg-slate-600 text-white border border-slate-600 border-b-white"
                  onClick={() =>
                    dispatch({ type: "addSpell", spell: spell})
                  }
                >
                  <button className="flex gap-1 w-4/5 py-2 px-1 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 stroke-sky-400 group-hover:stroke-sky-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 12h12m-6-6v12"
                      />
                    </svg>

                    {spell.name}
                  </button>
                  <button className="text-sky-400 w-1/5 py-2 px-1" onClick={(e) => openModal(e, spell)}>info</button>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <button
        className="w-full mt-4 py-2 text-xl bg-slate-900 text-white rounded-md font-anta hover:shadow-custom hover:underline"
        onClick={() => handleEditViewChange("main")}
      >
        Done
      </button>
      {description && <ComSpellModal spell={description} closeModal={closeModal} />}
    </>
  );
}
