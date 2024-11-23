import { TUnit } from "../types/types";
import { availableUnits } from "../constants/AllUnitsList";
import ComAvailableUnit from "./ComAvailableUnit";
import { useState } from "react";

type props = {addUnitCallback(unit: TUnit): void}

export default function ComAvailableUnitList({addUnitCallback}: props) {
  // Click handlers
  function dropdownHandler(level: number) {
    if (openDropdowns.includes(level)) {
      setOpenDropdowns(openDropdowns.filter((dropdown) => dropdown != level));
    } else {
      setOpenDropdowns([...openDropdowns, level]);
    }
  }

  function addUnitHandler(unit: TUnit) {
    const equippedUnit = {...unit}
    addUnitCallback(equippedUnit) 
  }

  // State variables
  const [openDropdowns, setOpenDropdowns] = useState<number[]>([]);

  return (
    <div>
      <div className="border-b border-black ">
        <div
          onClick={() => {
            dropdownHandler(1);
          }}
          className="flex justify-center  font-bold text-2xl text-white py-3 bg-gray-800 cursor-pointer hover:shadow-custom"
        >
          <h2 className="pb-1">Level 1</h2>
          <button>
            <img
              src={
                openDropdowns.includes(1)
                  ? "src/public/images/chevron-down.svg"
                  : "src/public/images/chevron-right.svg"
              }
              alt="dropdown arrow"
            />
          </button>
        </div>
        {openDropdowns.includes(1) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 1) {
              return <ComAvailableUnit key={index} unit={availUnit} />;
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
            <img
              src={
                openDropdowns.includes(2)
                  ? "src/public/images/chevron-down.svg"
                  : "src/public/images/chevron-right.svg"
              }
              alt="dropdown arrow"
            />
          </button>
        </div>
        {openDropdowns.includes(2) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 2) {
              return <ComAvailableUnit key={index} unit={availUnit} />;
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
            <img
              src={
                openDropdowns.includes(3)
                  ? "src/public/images/chevron-down.svg"
                  : "src/public/images/chevron-right.svg"
              }
              alt="dropdown arrow"
            />
          </button>
        </div>
        {openDropdowns.includes(3) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 3) {
              return <ComAvailableUnit key={index} unit={availUnit} />;
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
            <img
              src={
                openDropdowns.includes(4)
                  ? "src/public/images/chevron-down.svg"
                  : "src/public/images/chevron-right.svg"
              }
              alt="dropdown arrow"
            />
          </button>
        </div>
        {openDropdowns.includes(4) &&
          availableUnits.map((availUnit, index) => {
            if (availUnit.level === 4) {
              return <ComAvailableUnit key={index} unit={availUnit} />;
            }
          })}
      </div>
    </div>
  );
}
