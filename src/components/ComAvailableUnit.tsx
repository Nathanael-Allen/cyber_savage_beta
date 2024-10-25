import IUnit from "../interfaces/IUnit";

interface UnitProps {
  unit: IUnit;
  handleAddUnit: (unit: IUnit) => void;
}

export default function ComAvailableUnit({ unit, handleAddUnit }: UnitProps) {
  let equipList;
  if (unit.availableWeapons) {
    const items = unit.availableWeapons.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    equipList = <>{items}</>;
  }
  return (
    <div
      onClick={() => handleAddUnit(unit)}
      className="grid grid-cols-4 rounded-md p-2 mt-1 mb-1 border border-black hover:bg-gray-200 cursor-pointer"
    >
      <h4 className="font-semibold col-span-3 text-lg">{unit.type}</h4>
      <div className="flex gap-2  items-center col-span-3 row-start-2">
        {equipList}
        <p>{unit.numTraits} trait(s)</p>
        {unit.numSpells && <p className="text-sky-700">{unit.numSpells} spell(s)</p>}
      </div>
      <button
        className="text-sky-600 text-xl font-semibold col-start-4 row-start-1 row-span-2"
        onClick={() => {
          handleAddUnit(unit);
        }}
      >
        add
      </button>
    </div>
  );
}
