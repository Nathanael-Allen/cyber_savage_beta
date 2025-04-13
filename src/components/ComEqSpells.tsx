import { useState } from "react";
import { TSpells } from "../types/types";
import ComSpellModal from "./UtilityComponents/ComSpellModal";

type props = { spellList: TSpells[] };

export default function ComEqSpells({ spellList }: props) {
  const [openDescription, setOpenDescription] = useState<TSpells | null>(null);

  function closeModal() {
    setOpenDescription(null)
  }

  return (
    <div className="">
      <h2 className="text-lg text-center font-semibold bg-slate-800 text-white p-1 rounded-t-md">
        Spells
      </h2>
      <ul className="bg-slate-600 text-white rounded-b-md max-h-48 overflow-scroll *:border-b">
        {spellList.map((spell, index) => {
          return (
            <li key={index} className="" >
              <button
                className="py-2 w-full underline decoration-dashed hover:text-sky-200"
                onClick={() => setOpenDescription(spell)}
              >
                {spell.name}
              </button>
            </li>
          );
        })}
      </ul>
      {openDescription && (
        <ComSpellModal spell={openDescription} closeModal={closeModal} />
      )}
    </div>
  );
}
