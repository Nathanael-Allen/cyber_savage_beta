import { TUnit } from "../types/types";

type props = { unit: TUnit; handleAddUnit(unit: TUnit): void };

export default function ComAvailableUnit({ unit, handleAddUnit }: props) {
  return (
    <div className="grid grid-cols-6 border border-black rounded-md m-2 bg-gray-100">
      <div
        className="group font-semibold col-span-6 text-xl text-center text-white bg-gray-700 py-2 cursor-pointer relative hover:shadow-custom"
        onClick={() => {
          handleAddUnit(unit);
        }}
      >
        <h4 className="text-center">{unit.unitClass}</h4>
        <button className="flex items-center absolute right-0 top-1">
          <svg
            className="stroke-sky-200 h-10 group-hover:stroke-sky-400"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 12h5m0 0h5m-5 0V7m0 5v5"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-6 grid grid-cols-2 gap-1 p-1">
        <p className="text-center">Health: {unit.health}</p>
        <p className="text-center">Speed: {unit.speed}</p>
        <p className="text-center">
          Characteristics: {unit.numCharacteristics}
        </p>
        <p className="text-center">
          Spells: {unit.numSpells ? unit.numSpells : 0}
        </p>
      </div>
      <div className="col-span-6 flex gap-3 py-1 justify-center border-y border-black">
        <p className="">Melee: {unit.diceMelee}</p>
        <p className="">Ranged: {unit.diceRanged}</p>
        <p className="">Defense: {unit.diceDefense}</p>
        <p className="">Willpower: {unit.diceWillpower}</p>
      </div>
      <div className="col-span-6 py-1 flex gap-3 pl-5">
        <p>Weapons:</p>
        {unit.equippedWeapons.map((weapon, index) => {
          return (
            <p key={index}>
              {weapon.techLevel} {weapon.type}
            </p>
          );
        })}
      </div>
    </div>
  );
}
