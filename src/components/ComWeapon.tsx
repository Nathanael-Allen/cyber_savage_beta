import { TWeapon } from "../types-interfaces/types";
import { WeaponTraitsList } from "../constants/WeaponTraitsList";

type props = { weapon: TWeapon; clickHandler?(weapon: TWeapon): TWeapon };

export default function ComWeapon({ weapon, clickHandler }: props) {
  const traitCSS = "text-sm p-3 border border-black cursor-pointer hover:bg-gray-600 hover:text-white";
  const equippedTraitCSS =
    "text-sm p-3 border border-black bg-gray-600";

  function traitHandler(trait: string) {
    let newTraits;
    if (weapon.equippedTraits?.includes(trait)) {
      newTraits = weapon.equippedTraits.filter((equippedTrait) => {
        return equippedTrait != trait;
      })
    } else {
      newTraits = weapon.equippedTraits ? weapon.equippedTraits?.concat([trait]) : [trait]
    }
  }

  return (
    <div className="grid grid-cols-6 items-center bg-gray-200 rounded-md border-2 border-black min-h-24 m-1">
      <h4 className="font-semibold text-lg text-center max-md:col-span-6">
        {weapon.techLevel.toUpperCase()} {weapon.type.toUpperCase()}
      </h4>
      <div className="flex col-span-6 gap-4 m-auto mt-4 mb-4">
        <button className="py-1 px-4 border border-black rounded-lg font-semibold hover:bg-gray-600 hover:text-white">
          Light
        </button>
        <button className="py-1 px-4 border border-black rounded-lg font-semibold hover:bg-gray-600 hover:text-white">
          Medium
        </button>
        <button className="py-1 px-4 border border-black rounded-lg font-semibold hover:bg-gray-600 hover:text-white">
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
          {WeaponTraitsList.map((trait) => {
            // Remove melee traits from list if weapon is ranged and vice versa
            if (trait.weaponType === weapon.type || trait.weaponType === "both") {
              // Filter out subtype specific traits
              if (trait.weaponSubtype === weapon.subtype || trait.weaponSubtype === "all"){
                return (
                  <p
                    className={
                      weapon.equippedTraits?.includes(trait.name)
                        ? equippedTraitCSS
                        : traitCSS
                    }
                  >
                    <button className={weapon.equippedTraits?.includes(trait.name) ? "text-left text-white" : "text-left hover:text-white"}>
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
