import { useState } from "react";
import { TWeapon, TWeaponTrait } from "../types/types";
import Weapon from "../classes/Weapon";
import ComWeaponTraitModal from "./UtilityComponents/ComWeaponTraitModal";

type props = {weapon: TWeapon}

export default function ComWeapon({weapon}: props) {
  const [description, setDescription] = useState<TWeaponTrait | null>(null)
  
  function closeModal() {
    setDescription(null)
  }
  
  return (
    <div className="flex bg-slate-600 text-white rounded-md max-w-[500px] m-auto">
      <div className="bg-slate-900 flex flex-col justify-center items-center p-2 rounded-l-md">
        <h2 className="font-semibold text-lg">{weapon.type}</h2>
        <h3>{weapon.techLevel}</h3>
        <p>{weapon.subtype}</p>
      </div>
      <div className="flex flex-col justify-center items-center text-lg p-2">
        <span className="rounded-full bg-slate-900 h-8 w-8 flex justify-center items-center font-bold">{Weapon.getTotalAtks(weapon)}</span>
        <p>atk</p>
        <span className="rounded-full bg-slate-900 h-8 w-8 flex justify-center items-center font-bold">{Weapon.getTotalDmg(weapon)}</span>
        <p>dmg</p>
      </div>
      <div className="m-2 w-full">
        <div className="">
          <h3 className="text-center font-semibold text-lg bg-slate-900 rounded-t-md">traits</h3>
          <ul className="bg-slate-100 text-black text-center *:border-b *:border-black max-h-24 rounded-b-md overflow-scroll">
            {weapon.equippedTraits?.map((trait, index) => {
              return (
                <li key={index} className=""><button className="underline decoration-dashed py-1 w-full hover:text-sky-800" onClick={() => setDescription(trait)}>{trait.name.toLowerCase()}</button></li>
              )
            })}
          </ul>
        </div>
        {description && (
          <ComWeaponTraitModal trait={description} closeModal={closeModal} />
      )}
     </div>
    </div>
  )
}