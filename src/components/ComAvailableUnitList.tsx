import IUnit from "../interfaces/IUnit";
import ComAvailableUnit from "./ComAvailableUnit";

interface IUnitListProps {
  unitList: IUnit[];
  handleAddUnit: (unit: IUnit) => void;
}

type TLevelProp = { level: number };

function ComLevelHeading({ level }: TLevelProp) {
  return (
    <h4 className="font-semibold text-xl p-2 text-center border-b border-black">
      Level {level}
    </h4>
  );
}

export default function ComAvailableUnits({
  unitList,
  handleAddUnit,
}: IUnitListProps) {
  const levelOneUnits = unitList.map((unit, index) => {
    if (unit.level == 1) {
      return (
        <ComAvailableUnit
          key={"lvl001" + index}
          unit={unit}
          handleAddUnit={handleAddUnit}
        />
      );
    }
  });
  const levelTwoUnits = unitList.map((unit, index) => {
    if (unit.level == 2) {
      return (
        <ComAvailableUnit
          key={"lvl002" + index}
          unit={unit}
          handleAddUnit={handleAddUnit}
        />
      );
    }
  });
  const levelThreeUnits = unitList.map((unit, index) => {
    if (unit.level == 3) {
      return (
        <ComAvailableUnit
          key={"lvl003" + index}
          unit={unit}
          handleAddUnit={handleAddUnit}
        />
      );
    }
  });
  const levelFourUnits = unitList.map((unit, index) => {
    if (unit.level == 4) {
      return (
        <ComAvailableUnit
          key={"lvl004" + index}
          unit={unit}
          handleAddUnit={handleAddUnit}
        />
      );
    }
  });

  return (
    <div>      
      <ComLevelHeading level={1} />
      {levelOneUnits}
      <ComLevelHeading level={2} />
      {levelTwoUnits}
      <ComLevelHeading level={3} />
      {levelThreeUnits}
      <ComLevelHeading level={4} />
      {levelFourUnits}
    </div>
  );
}
