import { useId, useState } from "react";
import IUnit from "../interfaces/IUnit";
import traitListConstants from "../constants/traitListConstants";
import ComEquippedAttributes from "./ComEquippedAttributes";
import ComAttributeDropdown from "./ComAttributeDropdown";
import flawListConstants from "../constants/flawListConstants";

interface IUnitProps {
  unit: IUnit;
}

type TSetterFunction = (list: string[]) => void;

let initialAvailableTraits = traitListConstants.sort();
let initialAvailableFlaws = flawListConstants.sort();


export default function ComUnit({ unit }: IUnitProps) {
  unit.id = unit.type + useId();

  const availableWeapons = unit.availableWeapons.map((weapon) => {
    return <p key={weapon}>{weapon}</p>;
  });
  const [equippedTraits, setEquippedTraits] = useState<string[]>([]);
  const [equippedSpells, setEquippedSpells] = useState<string[]>([]);
  const [equippedFlaw, setEquippedFlaw] = useState<string[]>([]);
  const [availableTraits] = useState<string[]>(initialAvailableTraits);
  const [availableFlaws] = useState<string[]>(initialAvailableFlaws);

  function addAttribute(equippedList: string[], attribute: string, setter: TSetterFunction) {
    const equipped = [...equippedList, attribute];
    setter(equipped)
  }

  function removeAttribute(equippedList: string[], attribute: string, setter: TSetterFunction) {
    const newEquipped =  equippedList.filter((attr) => {
      return attr !== attribute
    })
    setter(newEquipped)
  }

  function attributeToggleHandler(attributeList: string[], attribute: string, selected: boolean, setter: TSetterFunction) {
    if (!selected) {
      addAttribute(attributeList, attribute, setter)
    } else {
      removeAttribute(attributeList, attribute, setter)
    }
  }

  function attributeClickHandler(attribute: string, selected: boolean, attributeType: "trait" | "flaw" | "spell") {
    switch (attributeType) {
      case "trait":
        attributeToggleHandler(equippedTraits, attribute, selected, setEquippedTraits)
        break
      case "flaw":
        attributeToggleHandler(equippedFlaw, attribute, selected, setEquippedFlaw)
        break
      case "spell": 
        attributeToggleHandler(equippedSpells, attribute, selected, setEquippedSpells)
    }
  }

  return (
    <div className="border border-black rounded-sm grid grid-cols-3 gap-2 m-2 p-2">
      <h4 className="font-semibold text-lg col-span-3 border-b border-black mb-1">
        {unit.type}
      </h4>
      <div className="col-start-1">
        {availableWeapons}
        <div className="">
          <ComEquippedAttributes
            unit={unit}
            equippedList={equippedTraits}
            attributeType="traits"
          />
          {unit.numSpells && (
            <ComEquippedAttributes
              unit={unit}
              equippedList={equippedSpells}
              attributeType="spells"
            />
          )}
          <ComEquippedAttributes
            unit={unit}
            equippedList={equippedFlaw}
            attributeType="flaw"
          />
        </div>
      </div>
      <div className="col-start-2 col-span-2">
        <ComAttributeDropdown
          availableAttributes={availableTraits}
          equippedAttributes={equippedTraits}
          attributeType="trait"
          attributeClickHandler={attributeClickHandler}
        />
        <ComAttributeDropdown
          availableAttributes={availableFlaws}
          equippedAttributes={equippedFlaw}
          attributeType="flaw"
          attributeClickHandler={attributeClickHandler}
        />
      </div>
    </div>
  );
}
