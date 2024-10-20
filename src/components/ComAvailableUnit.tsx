import IUnit from "../interfaces/IUnit";

interface UnitProps {
  unit: IUnit;
  handleAddUnit: (unit: IUnit) => void
}

export default function ComAvailableUnit({ unit, handleAddUnit }: UnitProps) {
  let equipList;
  if (unit.availableWeapons) {
    const items = unit.availableWeapons.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    equipList = (
      <>
        {items}
      </>
    );
  }
  return (
    <div className="flex gap-2 border-b border-black p-2 items-center">
      <h4 className="font-semibold text-lg">{unit.type}</h4>
      {equipList}
      <p>{unit.numTraits} trait(s)</p>
      <button className="text-sky-600 font-semibold" onClick={() => {handleAddUnit(unit)}}>add</button>
    </div>
  );
}
