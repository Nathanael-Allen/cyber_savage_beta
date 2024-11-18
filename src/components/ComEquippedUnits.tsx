import { TUnit } from "../types-interfaces/TUnit";
import ComUnit from "./ComUnit";
import { TEquippedUnitsProps } from "../App";

type TListProps = {
  unitList: TUnit[];
  unitProps: TEquippedUnitsProps;
}

export default function ComEquippedUnits({unitList ,unitProps}: TListProps ) {
  
  const unitListComponents = unitList.map((unit) => {
    return <ComUnit key={unit.id!} unit={unit} equippedUnitProps={unitProps}  />;
  })

  
  return (
    <div className="">
      <button></button>
      <h4 className="mt-4 text-lg font-bold text-center border-b border-black">Units</h4>
      {unitListComponents}
    </div>
  );
}


