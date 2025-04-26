import { TUnit } from "../../types/types";

type props = {character: TUnit, closeModal: () => void}

export default function ComCharacterDetailModal({character, closeModal}: props) {
  return (
    <div
      className="z-0 h-full w-full fixed top-0 left-0 bg-white/80 flex justify-center items-center"
      onClick={() => closeModal()}
    >
      <div
        className="z-10 min-h-48 w-56 bg-slate-600 text-white pb-4 flex flex-col text-center rounded-md relative overflow-scroll overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold w-full bg-slate-900 p-1 rounded-t-md">
        {character.unitClass} <span className="text-sm">Level: {character.level}</span>
        </h2>
        <h3 className="font-semibold w-full bg-slate-900 p-1 border-t">stats</h3>
        <ul className="grid grid-cols-3 mb-2">
          <li>HP: {character.health}</li>
          <li>MEL: {character.diceMelee}</li>
          <li>DEF: {character.diceDefense}</li>
          <li>SPD: {character.speed}</li>
          <li>RNG: {character.diceRanged}</li>
          <li>WP: {character.diceWillpower}</li>
        </ul>
        <div>
          <p>Characteristics: {character.numCharacteristics}</p>
          <p>Spells: {character.numSpells}</p>
        </div>
        <ul className="mt-2">
          <h3 className="font-semibold w-full bg-slate-900 p-1">Weapons</h3>
          {character.equippedWeapons.map((w) => {
            if (w.type === "unarmed")
            {
              return <li>{w.techLevel} ranged or melee</li>
            }
            return <li>{w.techLevel} {w.type}</li>
          })}
        </ul>
      </div>
    </div>
  );
}