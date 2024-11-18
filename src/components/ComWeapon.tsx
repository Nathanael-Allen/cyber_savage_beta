import { useState } from "react";
import TWeapon from "../types-interfaces/TWeapon";
import ComAttributeDropdown from "./ComAttributeDropdown";
import weaponTraitConstants from "../constants/weaponTraitConstants";
import ComEquippedAttributes from "./ComEquippedAttributes";
import { TAttributeType } from "../types-interfaces/TAttributeType";

type TProps = { weapon: TWeapon, clickHandler(trait: string, id: number | string, selected: boolean): void, subtypeHandler(weaponID: number, subtype: TSubtype): void; };
type TSubtype = "light" | "medium" | "heavy";

const initialAvailableTraits = weaponTraitConstants;

export default function ComWeapon({ weapon, clickHandler,  subtypeHandler }: TProps) {
  const [availableTraits] = useState<string[]>(
    initialAvailableTraits
  );
  const subtypeOptions: TSubtype[] = ["light", "medium", "heavy"];
  const weaponName = weapon.techLevel + " " + weapon.type;
  
  function attributeClickHandler(attribute: string, attributeType: TAttributeType, selected: boolean) { 
    clickHandler(attribute, weapon.id!, selected)
  }

  return (
  <div className="grid grid-cols-3 border border-black p-2 mt-2 mb-2">
      <h4 className="col-start-1 col-span-3 font-semibold text-lg border-b border-gray-300">{weaponName} ({weapon.subtype})</h4>
      <div className="col-start-1 col-span-3 flex gap-3 items-center">
        <p className="font-semibold">Weapon Subtype: </p>
        {subtypeOptions.map((type) => {
          let cssName = "w-full p-1 m-1 rounded-md hover:bg-gray-300"
        if (weapon.subtype === type) {
            cssName = "w-full p-1 m-1 rounded-md bg-gray-600 text-white"
          }
          return (
            <p key={type}>
              <button
                className={cssName}
                onClick={() => {
                  subtypeHandler(weapon.id!, type);
                }}
              >
                {type}
              </button>
            </p>
          );
        })}
      </div>
      <div className="col-start-1 mr-2">
        {weapon.numTraits! > 0 && <ComEquippedAttributes attributeType="traits" equippedList={weapon.equippedTraits ? weapon.equippedTraits : []} numTraits={weapon.numTraits} />}
      </div> 
      <div className="col-start-2 col-span-2 ml-2">
      {weapon.numTraits! > 0 && <ComAttributeDropdown
          availableAttributes={availableTraits}
          equippedAttributes={weapon.equippedTraits ? weapon.equippedTraits : []}
          attributeType="weaponTrait"
          title="Available Weapon Traits"
          clickHandler={attributeClickHandler}
        />}
      </div>
    </div>
  );
}


export type {TSubtype}