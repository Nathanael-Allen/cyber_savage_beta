import { useEffect, useState } from "react";
import IWeapon from "../interfaces/IWeapon";
import ComAttributeDropdown from "./ComAttributeDropdown";
import weaponTraitConstants from "../constants/weaponTraitConstants";

type TProps = { weapon: IWeapon };
type TSubtype = "light" | "medium" | "heavy";

const initialAvailableTraits = weaponTraitConstants;

export default function ComWeapon({ weapon }: TProps) {
  const [weaponTraits, setWeaponTraits] = useState<string[]>([]);
  const [availableTraits, setAvailableTraits] = useState<string[]>(
    initialAvailableTraits
  );
  const [weaponSubtype, setWeaponSubtype] = useState<TSubtype>();
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
    <div className="">
      <h2>Weapon</h2>
      <h4>{weaponName}</h4>
      <p>{weaponSubtype}</p>
      <div>
        <h4>
          Traits {weaponTraits.length}/{numTraits}
        </h4>
        {weaponTraits.map((trait) => {
          return <p>{trait}</p>;
        })}
      </div> 
      <ComAttributeDropdown
        availableAttributes={availableTraits}
        equippedAttributes={weaponTraits}
        attributeType="weapon trait"
        attributeClickHandler={traitClickHandler}
      />
       <div>
        {subtypeOptions.map((type) => {
          return (
            <p>
              <button
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
    </div>
  );
}
