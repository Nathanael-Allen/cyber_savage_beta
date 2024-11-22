import { TWeapon, TWeaponSubtype, TWeaponTrait } from "../types-interfaces/types";
import { WeaponTraitsList } from "../constants/WeaponTraitsList";

type props = { weapon: TWeapon; clickHandler(weapon: TWeapon): void };

export default function ComWeapon({ weapon, clickHandler }: props) {
  const traitCSS = "text-sm p-3 border border-black cursor-pointer hover:bg-blue-100";
  const equippedTraitCSS =
    "text-sm p-3 border border-black bg-blue-200 cursor-pointer";
  const subtypeCSS = "py-1 px-4 border border-black rounded-lg font-semibold hover:bg-gray-600 hover:text-white"
  const equippedTraitNames = weapon.equippedTraits ? weapon.equippedTraits.map((trait) => {return trait.name}) : [];
  
  function subTypeHandler(subtype: TWeaponSubtype) {
    const newWeapon: TWeapon = {
      ...weapon,
      subtype: subtype 
    }
    clickHandler(newWeapon)
  }

  function traitHandler(trait: TWeaponTrait) {
    let newTraits;
    if (equippedTraitNames.includes(trait.name) && weapon.equippedTraits) {
      newTraits = weapon.equippedTraits.filter((equippedTrait) => {
        return equippedTrait.name != trait.name;
      })
      console.log(newTraits)
    } else {
      newTraits = weapon.equippedTraits ? weapon.equippedTraits?.concat([trait]) : [trait]
    }
    const newWeapon = {
      ...weapon,
      equippedTraits: newTraits
    }
    clickHandler(newWeapon)
  }

  return (
    <div className="grid grid-cols-6 items-center bg-gray-200 rounded-md border-2 border-black min-h-24 m-1">
      <h4 className="font-semibold text-lg text-center max-md:col-span-6">
        {weapon.techLevel.toUpperCase()} {weapon.type.toUpperCase()}
      </h4>
      <div className="flex col-span-6 gap-4 m-auto mt-4 mb-4">
        <button onClick={() => {subTypeHandler("light")}} className={weapon.subtype === "light" ? subtypeCSS + " bg-gray-600 text-white" : subtypeCSS}>
          Light
        </button>
        <button onClick={() => {subTypeHandler("medium")}} className={weapon.subtype === "medium" ? subtypeCSS + " bg-gray-600 text-white" : subtypeCSS}>
          Medium
        </button>
        <button onClick={() => {subTypeHandler("heavy")}} className={weapon.subtype === "heavy" ? subtypeCSS + " bg-gray-600 text-white" : subtypeCSS}>
          Heavy
        </button>
      </div>
      <div className="col-span-6 border border-black rounded-md m-2">
        <h4 className="bg-gray-700 text-white text-center p-1 rounded-t-md">
          Weapon Traits{" "}
          {weapon.equippedTraits ? weapon.equippedTraits.length : 0}/
          {weapon.numTraits}
        </h4>
        <div className="max-h-52 overflow-scroll">
          {WeaponTraitsList.map((trait, index) => {
            // Remove melee traits from list if weapon is ranged and vice versa
            if (trait.weaponType === weapon.type || trait.weaponType === "both") {
              // Filter out subtype specific traits
              if (trait.weaponSubtype === weapon.subtype || trait.weaponSubtype === "all"){
                return (
                  <p 
                    key={index}
                    onClick={() => traitHandler(trait)}
                    className={
                      equippedTraitNames.includes(trait.name)
                        ? equippedTraitCSS
                        : traitCSS
                    }
                  >
                    <button onClick={() => traitHandler(trait)} className={equippedTraitNames.includes(trait.name) ? "text-left" : "text-left"}>
                      <b>{trait.name}: </b> {trait.description}
                    </button>
                  </p>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}
