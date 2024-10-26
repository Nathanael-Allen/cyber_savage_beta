import IUnit from "../interfaces/IUnit";
import ComAvailableUnit from "./ComAvailableUnit";

interface IUnitListProps {
  unitList: IUnit[];
  handleAddUnit: (unit: IUnit) => void;
}

type TUnitBlockProps = {
  unitList: IUnit[];
  level: number;
  handleAddUnit: (unit: IUnit) => void;
};

function returnLevelList(units: IUnit[], level: number) {
  return units.filter((unit) => {
    return unit.level === level;
  });
}

function ComAvailableUnitBlock({
  unitList,
  level,
  handleAddUnit,
}: TUnitBlockProps) {
  const newUnitList = returnLevelList(unitList, level);
  return (
    <div className="w-11/12 m-auto p-2 mt-2 mb-2 bg-gray-100 border border-black rounded-md">
      <h4 className="font-semibold text-xl p-2 text-center">Level {level}</h4>
      {newUnitList.map((unit) => {
        return (
          <ComAvailableUnit
            key={unit.type}
            unit={unit}
            handleAddUnit={handleAddUnit}
          />
        );
      })}
    </div>
  );
}

export default function ComAvailableUnitList({
  unitList,
  handleAddUnit,
}: IUnitListProps) {
  return (
    <div className="">
      <ComAvailableUnitBlock
        unitList={unitList}
        level={1}
        handleAddUnit={handleAddUnit}
      />
      <ComAvailableUnitBlock
        unitList={unitList}
        level={2}
        handleAddUnit={handleAddUnit}
      />
      <ComAvailableUnitBlock
        unitList={unitList}
        level={3}
        handleAddUnit={handleAddUnit}
      />
      <ComAvailableUnitBlock
        unitList={unitList}
        level={4}
        handleAddUnit={handleAddUnit}
      />
    </div>
  );
}
