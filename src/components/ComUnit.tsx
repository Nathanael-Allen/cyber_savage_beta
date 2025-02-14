import { useState } from "react";
import { TUnit } from "../types/types";

type props = {
  unit: TUnit;
  editCallback: (unit: TUnit) => void;
  deleteHandler: (id: number | string) => void;
};

export default function ComUnit({ unit, editCallback, deleteHandler }: props) {
  const [open, setOpen] = useState(false);
  const {
    unitName,
    unitClass,
    level,
    diceDefense,
    diceMelee,
    diceRanged,
    diceWillpower,
    health,
    speed,
    bonusHealth,
    bonusSpeed,
    equippedSpells,
    equippedCharacteristics,
    equippedWeapons,
  } = unit;

  function handleOpen() {
    setOpen(!open);
  }

  function deleteUnit() {
    deleteHandler(unit.id!);
  }

  return (
    <div className="relative max-w-4xl md:w-4/5 m-auto mb-10 border-2 border-black sm:rounded-md p-2 gap-1 sm:grid sm:grid-cols-4">
      <div className="row-start-1 font-semibold text-right px-1 pb-2  sm:col-span-4 flex">
        <button onClick={deleteUnit} className="text-red-700 hover:text-red-800 text-2xl">
          delete
        </button>
        <button
          onClick={() => {
            editCallback(unit);
          }}
          className="text-sky-600 text-xl ml-auto hover:text-sky-800"
        >
          Edit Loadout
        </button>
      </div>
      <div className="grid grid-cols-4 bg-gray-700 rounded-t-md sm:col-start-1 sm:col-span-2 sm:row-start-2 sm:row-span-2">
        <div className="bg-white h-36 w-36 rounded-full col-start-1 row-span-4 m-2 flex items-center justify-center">
          <img src={"/" + unit.imagePath + ".png"} alt="unit icon" className="h-24"/>
        </div>
        {unitName &&
          <p className="text-white font-semibold text-2xl mt-3 col-start-3 col-span-2 text-center">
            {unitName}
          </p>
        }
        <p className="text-white font-semibold text-xl mt-3 col-start-3 col-span-2 text-center">
          {unitClass}
        </p>
        <p className="text-white font-semibold text-lg mt-3 col-start-3 col-span-2 text-center">
          Level {level}
        </p>
        {unit.hasFlaw && 
        <p className="text-white font-semibold text-lg mt-3 col-start-3 col-span-2 text-center">
          (Flawed)
        </p>
        }
      </div>
      <div className="grid grid-cols-2 bg-gray-200 rounded-md p-2 gap-2 items-center border-2 border-black max-sm:mt-4 sm:col-span-2 sm:col-start-3 sm:row-start-2 sm:row-span-2 max-sm:hidden">
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
            {health! + bonusHealth!}
          </div>
          <p className="font-semibold text-center">Health</p>
        </div>
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
            {speed! + bonusSpeed!}
          </div>
          <p className="font-semibold text-center">Speed</p>
        </div>
      </div>
      {open && (
        <div className="sm:col-span-4 sm:grid sm:grid-cols-4 sm:gap-2">
          <div className="grid grid-cols-2 bg-gray-200 rounded-md p-2 gap-2 items-center border-2 border-black max-sm:mt-4 sm:col-span-2 sm:col-start-3 sm:hidden">
            <div>
              <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
                {health! + bonusHealth!}
              </div>
              <p className="font-semibold text-center">Health</p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
                {speed! + bonusSpeed!}
              </div>
              <p className="font-semibold text-center">Speed</p>
            </div>
          </div>
          <div className="col-span-4 row-start-4 grid grid-cols-4 bg-gray-200 rounded-md p-2 mt-4 gap-2 border-2 border-black">
            <div>
              <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
                {diceMelee}
              </div>
              <p className="font-semibold text-center">Melee</p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
                {diceRanged}
              </div>
              <p className="font-semibold text-center">Ranged</p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
                {diceDefense}
              </div>
              <p className="font-semibold text-center">Defense</p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">
                {diceWillpower}
              </div>
              <p className="font-semibold text-center">Willpower</p>
            </div>
          </div>
          {unit.numCharacteristics && (
            <div className="min-h-36 border-2 border-black rounded-md mt-4 sm:row-start-5 sm:col-span-4 md:col-span-2">
              <h4 className="font-semibold text-center border-b border-black text-xl bg-gray-700 text-white">
                Characteristics
              </h4>
              {equippedCharacteristics?.map((characteristic, index) => {
                return (
                  <p className="text-sm m-2" key={index}>
                    <b>{characteristic.name}: </b>
                    {characteristic.description}
                  </p>
                );
              })}
            </div>
          )}
          {unit.numSpells > 0 && (
            <div className="min-h-36 border-2 border-black rounded-md mt-4 sm:row-start-6 sm:col-span-4 md:col-start-3 md:col-span-2 md:row-start-5">
              <h4 className="font-semibold text-center border-b border-black text-xl bg-gray-700 text-white">
                Spells
              </h4>
              {equippedSpells?.map((spell, index) => {
                return (
                  <p className="text-sm m-2" key={index}>
                    <b>{spell.name}: </b>Range {spell.range}, Spellocity{" "}
                    {spell.spellocity}
                  </p>
                );
              })}
            </div>
          )}
          <div className="min-h-56 border-2 border-black rounded-md mt-4 sm:col-span-4 sm:row-start-7">
            <h4 className="font-semibold text-center border-b text-xl border-black pb-1 mb-4 bg-gray-700 text-white">
              Weapons
            </h4>
            {equippedWeapons.map((weapon, index) => {
              const bonusAttacks = weapon.bonusAttacks ? weapon.bonusAttacks : 0;
              const bonusDamage = weapon.bonusDamage ? weapon.bonusDamage : 0;
              const attacks = weapon.numAttack ? weapon.numAttack : 0;
              const damage = weapon.damage ? weapon.damage : 0;
              return (
                <div
                  key={index}
                  className="grid grid-cols-6 items-center bg-gray-200 rounded-md border-2 border-black min-h-24 m-1"
                >
                  <h4 className="font-semibold text-lg text-center max-md:col-span-6">
                    {weapon.techLevel.toUpperCase()} {weapon.type.toUpperCase()}{" "}
                    ({weapon.subtype?.toUpperCase()})
                  </h4>
                  <div>
                    <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">
                      {attacks + bonusAttacks}
                    </div>
                    <p className="font-semibold text-center">Attacks</p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">
                      {damage + bonusDamage}
                    </div>
                    <p className="font-semibold text-center">Damage</p>
                  </div>
                  <div className="min-h-24 col-span-3">
                    {weapon.equippedTraits?.map((trait, index) => {
                      return (
                        <p key={index} className="text-sm m-2">
                          <b>{trait.name}: </b>
                          {trait.description}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div
        onClick={handleOpen}
        className="group flex justify-center items-center flex-row rounded-b-md text-center text-white font-semibold text-lg bg-gray-700 py-2 border-t border-white cursor-pointer sm:col-span-4 sm:row-start-7 hover:shadow-custom"
      >
        <button className="pb-1">{!open ? "Show" : "Hide"} Details </button>
        <svg
          className="stroke-white group-hover:stroke-gray-200"
          width="32"
          height="32"
          fill="none"
          transform={open ? "rotate(90)" : "rotate(270)"}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            d="m15 6-6 6 6 6"
          />
        </svg>
      </div>
    </div>
  );
}
