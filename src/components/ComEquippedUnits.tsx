import IUnit from "../interfaces/IUnit";
import ComUnit from "./ComUnit";

type TProps = {unitList: IUnit[]; deleteHandler(id: string | number): void}

export default function ComEquippedUnits({unitList, deleteHandler}: TProps) {
  return (
    <div className="">
      <h4 className="mt-4 text-lg font-bold text-center border-b border-black">Units</h4>
      {unitList.map((unit, index) => {
        return <ComUnit key={unit.type + index} unit={unit} deleteHandler={deleteHandler} />;
      })}
    </div>
  );
}
