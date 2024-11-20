import { TWeapon } from "../types-interfaces/types";
import { WeaponTraitsList } from "../constants/WeaponTraitsList";

type props = {weapon: TWeapon, clickHandler(): TWeapon}

export default function ComWeapon({weapon, clickHandler}: props) {
  return (
    <div className="grid grid-cols-6 items-center bg-gray-200 rounded-md border-2 border-black min-h-24 m-1">
      <h4 className="font-semibold text-lg text-center max-md:col-span-6">
        {weapon.techLevel.toUpperCase()} {weapon.type.toUpperCase()} (
        {weapon.subtype?.toUpperCase()})
      </h4>
      <div>
        <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">
          {weapon.numAttack}
        </div>
        <p className="font-semibold text-center">Attacks</p>
      </div>
      <div>
        <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">
          {weapon.damage}
        </div>
        <p className="font-semibold text-center">Damage</p>
      </div>
      <div className="min-h-24 col-span-3">
        <h4>Weapon Traits {weapon.equippedTraits ? weapon.equippedTraits.length : 0}/{weapon.numTraits}</h4>
        {WeaponTraitsList.map((trait) => {
          return (
            <p className="text-sm m-2">
              <b>{trait.name}: </b> {trait.description}
            </p>
          );
        })}
      </div>
    </div>
  );

}