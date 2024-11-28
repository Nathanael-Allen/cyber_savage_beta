import { TUnit } from "../types/types";
import { availableUnits } from "../constants/AllUnitsList";
import ComAvailableUnit from "./ComAvailableUnit";
import { useState } from "react";

type props = { addUnitCallback(unit: TUnit): void };

export default function ComAvailableUnitList({ addUnitCallback }: props) {
  // Click handlers
  function dropdownHandler(level: number) {
    if (openDropdowns.includes(level)) {
      setOpenDropdowns(openDropdowns.filter((dropdown) => dropdown != level));
    } else {
      setOpenDropdowns([...openDropdowns, level]);
    }
  }

  function handleAddUnit(unit: TUnit) {
    const equippedUnit = { ...unit };
    addUnitCallback(equippedUnit);
  }

  // State variables
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  return (
    <div>
      <h1 className="font-semibold text-3xl text-center py-2">Add Units</h1>
      <div className="border-b border-black ">
        <div
          onClick={() => {
            dropdownHandler(1);
          }}
          className="flex justify-center  font-bold text-2xl text-white py-3 bg-gray-800 cursor-pointer hover:shadow-custom"
        >
          <h2 className="pb-1">Level 1</h2>
          <button>
            <svg
              width="32"
              height="32"
              fill="none"
              transform={!openDropdowns.includes(1) ? "rotate(180)" : "rotate(270)"}
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="m15 6-6 6 6 6"
              />
            </svg>
          </button>
        </div>
        {openDropdowns.includes(1) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 1) {
              return (
                <ComAvailableUnit
                  key={index}
                  unit={availUnit}
                  handleAddUnit={handleAddUnit}
                />
              );
            }
          })}
      </div>
      <div className="border-b border-black ">
        <div
          onClick={() => {
            dropdownHandler(2);
          }}
          className="flex justify-center  font-bold text-2xl text-white py-3 bg-gray-800 cursor-pointer hover:shadow-custom"
        >
          <h2 className="pb-1">Level 2</h2>
          <button>
          <svg
              width="32"
              height="32"
              fill="none"
              transform={!openDropdowns.includes(2) ? "rotate(180)" : "rotate(270)"}
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="m15 6-6 6 6 6"
              />
            </svg>
          </button>
        </div>
        {openDropdowns.includes(2) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 2) {
              return (
                <ComAvailableUnit
                  key={index}
                  unit={availUnit}
                  handleAddUnit={handleAddUnit}
                />
              );
            }
          })}
      </div>
      <div className="border-b border-black ">
        <div
          onClick={() => {
            dropdownHandler(3);
          }}
          className="flex justify-center  font-bold text-2xl text-white py-3 bg-gray-800 cursor-pointer hover:shadow-custom"
        >
          <h2 className="pb-1">Level 3</h2>
          <button>
          <svg
              width="32"
              height="32"
              fill="none"
              transform={!openDropdowns.includes(3) ? "rotate(180)" : "rotate(270)"}
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="m15 6-6 6 6 6"
              />
            </svg>
          </button>
        </div>
        {openDropdowns.includes(3) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 3) {
              return (
                <ComAvailableUnit
                  key={index}
                  unit={availUnit}
                  handleAddUnit={handleAddUnit}
                />
              );
            }
          })}
      </div>
      <div className="">
        <div
          onClick={() => {
            dropdownHandler(4);
          }}
          className="flex justify-center  font-bold text-2xl text-white py-3 bg-gray-800 cursor-pointer hover:shadow-custom"
        >
          <h2 className="pb-1">Level 4</h2>
          <button>
          <svg
              width="32"
              height="32"
              fill="none"
              transform={!openDropdowns.includes(4) ? "rotate(180)" : "rotate(270)"}
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="m15 6-6 6 6 6"
              />
            </svg>
          </button>
        </div>
        {openDropdowns.includes(4) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 4) {
              return (
                <ComAvailableUnit
                  key={index}
                  unit={availUnit}
                  handleAddUnit={handleAddUnit}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
