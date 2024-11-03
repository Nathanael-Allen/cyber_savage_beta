import { useEffect, useState } from "react";
import IWeapon from "../interfaces/IWeapon";
import ComAttributeDropdown from "./ComAttributeDropdown";
import weaponTraitConstants from "../constants/weaponTraitConstants";
import ComEquippedAttributes from "./ComEquippedAttributes";

type TProps = { weapon: IWeapon };
type TSubtype = "light" | "medium" | "heavy";

const initialAvailableTraits = weaponTraitConstants;

export default function ComWeapon({ weapon }: TProps) {
  const [weaponTraits, setWeaponTraits] = useState<string[]>(weapon.equippedTraits ? weapon.equippedTraits : []);
  const [availableTraits] = useState<string[]>(
    initialAvailableTraits
  );
  const [weaponSubtype, setWeaponSubtype] = useState<TSubtype | null>(weapon.subtype ? weapon.subtype : null);
  const [numTraits, setNumTraits] = useState<number>();
  const subtypeOptions: TSubtype[] = ["light", "medium", "heavy"];
  const weaponName = weapon.techLevel + " " + weapon.type;

  useEffect(() => {
    switch (weapon.techLevel) {
      case "simple":
        setNumTraits(0);
        break;
      case "standard":
        setNumTraits(1);
        break;
      case "advanced":
        setNumTraits(2);
        break;
    }
  }, [])

  function traitClickHandler(trait: string, selected: boolean) {
    if (!selected) {
      setWeaponTraits([...weaponTraits, trait]);
    } else {
      setWeaponTraits(
        weaponTraits.filter((item) => {
          return item !== trait;
        })
      );
    }
  }


  return (
  <div className="grid grid-cols-3 border border-black p-2 mt-2 mb-2">
      <h4 className="col-start-1 col-span-3 font-semibold text-lg border-b border-gray-300">{weaponName} ({weaponSubtype})</h4>
      <div className="col-start-1 col-span-3 flex gap-3 items-center">
        <p className="font-semibold">Weapon Subtype: </p>
        {subtypeOptions.map((type) => {
          let cssName = "w-full p-1 m-1 rounded-md hover:bg-gray-300"
        if (weaponSubtype === type) {
            cssName = "w-full p-1 m-1 rounded-md bg-gray-600 text-white"
          }
          return (
            <p key={type}>
              <button
                className={cssName}
                onClick={() => {
                  setWeaponSubtype(type);
                }}
              >
                {type}
              </button>
            </p>
          );
        })}
      </div>
      <div className="col-start-1 mr-2">
        {numTraits! > 0 && <ComEquippedAttributes attributeType="traits" equippedList={weaponTraits} numTraits={numTraits} />}
      </div> 
      <div className="col-start-2 col-span-2 ml-2">
      {numTraits! > 0 && <ComAttributeDropdown
          availableAttributes={availableTraits}
          equippedAttributes={weaponTraits}
          attributeType="trait"
          title="Available Weapon Traits"
          attributeClickHandler={traitClickHandler}
        />}
      </div>
    </div>
  );
}
