import { useId, useState } from "react";
import IUnit from "../interfaces/IUnit";
import traitListConstants from "../constants/traitListConstants";
import ComEquippedAttributes from "./ComEquippedAttributes";
import ComAttributeDropdown from "./ComAttributeDropdown";

interface IUnitProps {
  unit: IUnit;
}

type TDropdown = "availableTraits" | "flaws";
type TAvailableTraitProps = {
  trait: string;
  selected: boolean;
  clickHandler: (trait: string) => void;
};

let initialAvailableTraits = traitListConstants.sort();

function ComAvailableTrait({
  trait,
  selected,
  clickHandler,
}: TAvailableTraitProps) {
  const baseCSS = "p-1 w-2/4 cursor-pointer";
  const classUnselected =
    baseCSS + " border border-transparent hover:border hover:border-blue-300";
  const classSelected = baseCSS + " border border-blue-300";
  return (
    <p
      onClick={() => {
        clickHandler(trait);
      }}
      className={selected ? classSelected : classUnselected}
    >
      <button
        onClick={() => {
          clickHandler(trait);
        }}
      >
        {trait}
      </button>
    </p>
  );
}

export default function ComUnit({ unit }: IUnitProps) {
  unit.id = unit.type + useId();
  const availableWeapons = unit.availableWeapons.map((weapon) => {
    return <p key={weapon}>{weapon}</p>;
  });
  const [equippedTraits, setEquippedTraits] = useState<string[]>([]);
  const [equippedSpells, setEquippedSpells] = useState<string[]>([]);
  const [equippedFlaw, setEquippedFlaw] = useState<string[]>([]);
  const [availableTraits] = useState<string[]>(initialAvailableTraits);
  const [openDropdown, setOpenDropdowns] = useState<TDropdown[]>([]);

  function toggleDropdown(dropdown: TDropdown) {
    if (openDropdown.includes(dropdown)) {
      setOpenDropdowns(
        openDropdown.filter((listItem) => {
          return listItem != dropdown;
        })
      );
    } else {
      setOpenDropdowns([...openDropdown, dropdown]);
    }
  }

  function traitClickHandler(trait: string, selected: boolean) {
    if (!selected) {
      const equipped = [...equippedTraits, trait];
      setEquippedTraits(equipped);
    } else {
      setEquippedTraits(
        equippedTraits.filter((listItem) => {
          return listItem !== trait;
        })
      );
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
          attributeClickHandler={traitClickHandler}
        />
      </div>
    </div>
  );
}
