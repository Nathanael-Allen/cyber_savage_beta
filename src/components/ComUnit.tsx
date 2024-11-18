import { useState } from "react";
import { TUnit } from "../types-interfaces/TUnit";
import traitListConstants from "../constants/traitListConstants";
import ComEquippedAttributes from "./ComEquippedAttributes";
import ComAttributeDropdown from "./ComAttributeDropdown";
import spellListConstants from "../constants/spellListConstants";
import ComWeapon, { TSubtype } from "./ComWeapon";
import TWeapon from "../types-interfaces/TWeapon";
import { TEquippedUnitsProps } from "../App";
import { TAttributeType } from "../types-interfaces/TAttributeType";

interface TUnitProps {
  unit: TUnit;
  equippedUnitProps: TEquippedUnitsProps;
}

type TAttributeClickHandler = (
  attribute: string,
  type: TAttributeType,
  selected: boolean
) => void;

const initialAvailableTraits = traitListConstants.sort();
const initialAvailableSpells = spellListConstants.sort();

export default function ComUnit({ unit, equippedUnitProps }: TUnitProps) {
  const { handleDeleteUnit, handleAddAttribute, handleRemoveAttribute, handleAddWeaponTrait, handleRemoveWeaponTrait, weaponSubtypeHandler } =
    equippedUnitProps;
  const [availableTraits] = useState<string[]>(initialAvailableTraits);
  const [availableSpells] = useState<string[]>(initialAvailableSpells);

  function attributeClickHandler(
    attribute: string,
    attributeType: TAttributeType,
    selected: boolean
  ): void {
    if (!selected) {
      handleAddAttribute(unit.id!, attribute, attributeType);
    } else {
      handleRemoveAttribute(unit.id!, attribute, attributeType);
    }
  }

  function callbackSubtype(weaponID: number, subtype: TSubtype) {
    weaponSubtypeHandler(unit.id!, subtype, weaponID)
  }
  
  function weaponClickHandler(trait: string, id: number, selected: boolean) {
    if (!selected) {
      handleAddWeaponTrait(unit.id!, trait, id)
    } else { 
      handleRemoveWeaponTrait(unit.id!, trait, id)
    }
  }
  
  const equippedWeapons = unit.equippedWeapons.map(
    (weapon: TWeapon, index: number) => {
      return <ComWeapon key={weapon.type + index} weapon={weapon} subtypeHandler={callbackSubtype} clickHandler={weaponClickHandler} />;
    }
  );

  return (
    <div className="relative border border-black rounded-sm grid grid-cols-3 gap-2 mx-2 my-6 p-2">
      <h4 className="font-semibold text-lg col-span-3 border-b border-black mb-1">
        {unit.type}
      </h4>
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        onClick={() => handleDeleteUnit(unit.id!)}
      >
        DELETE
      </button>
      <div className="col-start-1 col-span-3 p-2 border border-black rounded-md grid grid-cols-3 ">
        <h4 className="col-span-3 text-center font-semibold mb-4 border-b border-black">
          Attributes
        </h4>
        <div className="col-start-1 mr-2">
          <div className="">
            <ComEquippedAttributes
              equippedList={unit.equippedTraits ? unit.equippedTraits : []}
              attributeType="traits"
              numTraits={unit.numTraits}
            />
            {unit.numSpells && (
              <ComEquippedAttributes
                numSpells={unit.numSpells}
                equippedList={unit.equippedSpells ? unit.equippedSpells : []}
                attributeType="spells"
              />
            )}
          </div>
        </div>
        <div className="col-start-2 col-span-2 ml-2">
          <ComAttributeDropdown
            availableAttributes={availableTraits}
            equippedAttributes={unit.equippedTraits ? unit.equippedTraits : []}
            attributeType="trait"
            title="Available Traits"
            clickHandler={attributeClickHandler}
          />
          <button>Roll Flaw</button>
          {unit.numSpells && (
            <ComAttributeDropdown
              availableAttributes={availableSpells}
              equippedAttributes={
                unit.equippedSpells ? unit.equippedSpells : []
              }
              attributeType="spell"
              title="Available Spells"
              clickHandler={attributeClickHandler}
            />
          )}
        </div>
      </div>
      <div className="col-start-1 col-span-3 p-2 border border-black rounded-md">
        <h4 className="col-span-3 text-center font-semibold border-b border-black">
          Weapons
        </h4>
        {equippedWeapons}
      </div>
    </div>
  );
}

export type { TAttributeClickHandler };
