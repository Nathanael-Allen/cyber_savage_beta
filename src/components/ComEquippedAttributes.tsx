import IUnit from "../interfaces/IUnit";

type TProps = { unit: IUnit; equippedList: string[] };

export default function ComEquippedAttributes({ unit, equippedList }: TProps) {
  return (
    <>
      <p
        className={
          equippedList.length > unit.numTraits ? "text-red-500" : "text-black"
        }
      >
        Traits {equippedList.length}/{unit.numTraits}
      </p>
      {equippedList.map((trait) => {
        return <p key={trait + "equippedTrait"}>{trait}</p>;
      })}
    </>
  );
}
