import IUnit from "../interfaces/IUnit";


type TAttributeType = "traits" | "spells" | "flaw"
type TProps = { unit: IUnit; equippedList: string[]; attributeType: TAttributeType; numTraits?: number; };

export default function ComEquippedAttributes({ unit, equippedList, attributeType, numTraits }: TProps) {
  let attribute;
  let title;
  switch (attributeType) {
    case "traits":
      attribute = numTraits;
      title = "Traits"
      break
    case "spells":
      attribute = unit.numSpells
      title = "Spells"
      break
    case "flaw":
      attribute = 1
      title = "Flaw"
      break
  }
  
  return (
    <div className="mb-2 bg-gray-100 rounded-md">
      <p
        className={
          equippedList.length > attribute! ? "text-red-500" : "text-black"
        }
      >
        {title} {equippedList.length}/{attribute}
      </p>
      {equippedList.map((trait) => {
        return <p className="pl-2 text-sm text-gray-800" key={trait + "equippedTrait"}>{trait}</p>;
      })}
    </div>
  );
}
