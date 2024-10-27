import IUnit from "../interfaces/IUnit";
import ComUnit from "./ComUnit";

type TProps = {unitList: IUnit[]}

export default function ComEquippedUnits({unitList}: TProps) {
  return (
    <div className="">
      <h4 className="mt-4">Unit List</h4>
      {unitList.map((unit, index) => {
        return <ComUnit key={unit.type + index} unit={unit} />;
      })}
    </div>
  );
}
