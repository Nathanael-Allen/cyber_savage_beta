import TUnit from "../types-interfaces/TUnit";


type TAttributeType = "traits" | "spells" | "flaw"
type TProps = { numSpells?: number; equippedList: string[]; attributeType: TAttributeType; numTraits?: number; };

export default function ComEquippedAttributes({ numSpells, equippedList, attributeType, numTraits }: TProps) {
  let attribute;
  let title;
  switch (attributeType) {
    case "traits":
      attribute = numTraits;
      title = "Traits"
      break
    case "spells":
      attribute = numSpells
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
