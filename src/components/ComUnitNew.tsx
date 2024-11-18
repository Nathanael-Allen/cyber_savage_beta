import { TUnit } from "../types-interfaces/TUnit";

type props = {unit: TUnit}

export default function ComUnitNew({unit}: props) {
  const {
    type,
    level,
    diceDefense,
    diceMelee,
    diceRanged,
    diceWillpower,
    health,
    speed,
    equippedSpells,
    equippedTraits,
    equippedWeapons
  } = unit;

  
  return (
    <div className="relative max-w-4xl w-4/5 m-auto mb-10 border-2 border-black rounded-md p-4 gap-1 sm:grid sm:grid-cols-4">
      <div className="grid grid-cols-4 bg-gray-700 rounded-md sm:col-start-1 sm:col-span-2 sm:row-start-1 sm:row-span-2">
        <div className="bg-white h-36 w-36 rounded-full col-start-1 row-span-4 m-2"></div>
        <p className="text-white font-semibold text-2xl mt-3 col-start-3 col-span-2 row-start text-center">{type}</p>
        <p className="text-white font-semibold text-lg mt-3 col-start-3 col-span-2 text-center">Level {level}</p>
      </div>
      <div className="grid grid-cols-2 bg-gray-200 rounded-md p-2 gap-2 items-center border-2 border-black max-sm:mt-4 sm:col-span-2 sm:col-start-3 sm:row-start-1 sm:row-span-2">
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">{health}</div>
          <p className="font-semibold text-center">Health</p>
        </div>
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">{speed}</div>
          <p className="font-semibold text-center">Speed</p>
        </div>
      </div>
      <div className="col-span-4 row-start-4 grid grid-cols-4 bg-gray-200 rounded-md p-2 mt-4 gap-2 border-2 border-black">
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">{diceMelee}</div>
          <p className="font-semibold text-center">Melee</p>
        </div>
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">{diceRanged}</div>
          <p className="font-semibold text-center">Ranged</p>
        </div>
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">{diceDefense}</div>
          <p className="font-semibold text-center">Defense</p>
        </div>        
        <div>
          <div className="flex justify-center items-center rounded-full w-14 h-14 m-auto bg-white border-2 border-black text-lg font-semibold">{diceWillpower}</div>
          <p className="font-semibold text-center">Willpower</p>
        </div>        
      </div>
      <div className="min-h-36 border-2 border-black rounded-md mt-4 sm:row-start-5 sm:col-span-4 md:col-span-2">
        <h4 className="font-semibold text-center border-b border-black text-xl bg-gray-700 text-white">Characteristics</h4>
        {equippedTraits?.map((trait) => {
          return (
            <p className="text-sm m-2"><b>{trait}: </b>This is a trait description placeholder...</p>
          )
        })}
      </div>
      <div className="min-h-36 border-2 border-black rounded-md mt-4 sm:row-start-6 sm:col-span-4 md:col-start-3 md:col-span-2 md:row-start-5">
      <h4 className="font-semibold text-center border-b border-black text-xl bg-gray-700 text-white">Spells</h4>
        {equippedSpells?.map((spell) => {
          return (
            <p className="text-sm m-2"><b>{spell}: </b>This is a spell description placeholder...</p>
          )
        })}
      </div>
      <div className="min-h-56 border-2 border-black rounded-md mt-4 sm:col-span-4 sm:row-start-7">
        <h4 className="font-semibold text-center border-b text-xl border-black pb-1 mb-4 bg-gray-700 text-white">Weapons</h4>
        {equippedWeapons.map((weapon) => {
          return (
            <div className="grid grid-cols-6 items-center bg-gray-200 rounded-md border-2 border-black min-h-24 m-1">
              <h4 className="font-semibold text-lg text-center max-md:col-span-6">{weapon.techLevel.toUpperCase()} {weapon.type.toUpperCase()} ({weapon.subtype?.toUpperCase()})</h4>
              <div>
                <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">{weapon.numAttack}</div>
                <p className="font-semibold text-center">Attacks</p>
              </div> 
              <div>
                <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">{weapon.damage}</div>
                <p className="font-semibold text-center">Damage</p>
              </div> 
              <div className="min-h-24 col-span-3">
                {weapon.equippedTraits?.map((trait) => {
                  return (
                    <p className="text-sm m-2"><b>{trait}: </b>This is a weapon trait description placeholder...</p>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}