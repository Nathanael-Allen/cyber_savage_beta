import { useId, useState } from "react";
import IUnit from "../interfaces/IUnit";
import traitListConstants from "../constants/traitListConstants";

interface IUnitProps {
  unit: IUnit;
}

type TDropdown = "availableTraits" | "flaws";

let initialAvailableTraits = traitListConstants.sort();

export default function ComUnit({ unit }: IUnitProps) {
  unit.id = unit.type + useId();
  const availableWeapons = unit.availableWeapons.map((weapon) => {
    return <p>{weapon}</p>;
  });
  const [equippedTraits, setEquippedTraits] = useState<string[]>([]);
  const [availableTraits, setAvailableTraits] = useState<string[]>(
    initialAvailableTraits
  );
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

  function removeTraitHandler(trait: string) {
    const newEquippedTraits = equippedTraits.filter((traitInList) => {
      return traitInList !== trait;
    });
    if (!newEquippedTraits) {
      setEquippedTraits([]);
    } else {
      setEquippedTraits(newEquippedTraits);
    }
    setAvailableTraits([...availableTraits, trait].sort());
  }

  function equipTraitHandler(trait: string) {
    const newEquippedTraits = [...equippedTraits, trait];
    setEquippedTraits(newEquippedTraits);
    setAvailableTraits(() => {
      const newAvailableTraits = availableTraits.filter((trait) => {
        return !newEquippedTraits.includes(trait);
      });
      return newAvailableTraits;
    });
  }

  if (unit.equippedTraits) {
    setEquippedTraits([...unit.equippedTraits]);
    const newAvailableTraits = availableTraits.filter((trait) => {
      return !equippedTraits.includes(trait);
    });
    setAvailableTraits(newAvailableTraits);
  }

  return (
    <div className="border border-black rounded-sm grid grid-cols-3 gap-2 m-2 p-2">
      <h4 className="font-semibold text-lg col-span-3 border-b border-black mb-1">
        {unit.type}
      </h4>
      <div className="col-start-1">
        {availableWeapons}
        <div className="bg-gray-100 rounded-md">
          <p
            className={
              equippedTraits.length > unit.numTraits
                ? "text-red-500"
                : "text-black"
            }
          >
            Traits {equippedTraits.length}/{unit.numTraits}
          </p>
          {equippedTraits.map((trait) => {
            return (
              <p>
                <button
                  onClick={() => {
                    removeTraitHandler(trait);
                  }}
                >
                  {trait}
                </button>
              </p>
            );
          })}
        </div>
      </div>
      <div className="col-start-2 col-span-2">
        <div className="bg-gray-100">
          <span className="flex gap-2 cursor-pointer hover:bg-gray-200">
            <h4
              className="font-semibold text-lg"
              onClick={() => {
                toggleDropdown("availableTraits");
              }}
            >
              Available Traits
            </h4>
            <button
              onClick={() => {
                toggleDropdown("availableTraits");
              }}
            >
              show
            </button>
          </span>
          <div>
            {openDropdown.includes("availableTraits") &&
              availableTraits.map((trait) => {
                return (
                  <p>
                    <button
                      onClick={() => {
                        equipTraitHandler(trait);
                      }}
                    >
                      {trait}
                    </button>
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
