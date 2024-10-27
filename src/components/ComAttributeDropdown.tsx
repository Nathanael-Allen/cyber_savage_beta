import { useState } from "react";

type TAttributeType =  "trait" | "flaw" | "spell" | "weapon trait";

type TDropdownProps = {
  availableAttributes: string[];
  equippedAttributes: string[];
  attributeType: TAttributeType
  attributeClickHandler: (attribute: string, selected: boolean, attributeType?: TAttributeType) => void;
};

type TAvailableAttributeProps = {
  attribute: string;
  selected: boolean;
  clickHandler: (attribute: string) => void;
};

function ComAvailableAttribute({
  attribute,
  selected,
  clickHandler,
}: TAvailableAttributeProps) {
  const baseCSS = "p-1 w-2/4 cursor-pointer";
  const classUnselected =
    baseCSS + " border border-transparent hover:border hover:border-blue-300";
  const classSelected = baseCSS + " border border-blue-300";
  return (
    <p
      onClick={() => {
        clickHandler(attribute);
      }}
      className={selected ? classSelected : classUnselected}
    >
      <button
        onClick={() => {
          clickHandler(attribute);
        }}
      >
        {attribute}
      </button>
    </p>
  );
}

export default function ComAttributeDropdown({
  availableAttributes,
  equippedAttributes,
  attributeType,
  attributeClickHandler,
}: TDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  function openHandler() {
    setOpen(!open);
  }
  


  return (
    <div className="bg-gray-100 mb-2 ">
      <span
        className="flex gap-2 cursor-pointer rounded-md pl-2 hover:bg-gray-200"
        onClick={openHandler}
      >
        <h4 className="font-semibold text-lg" onClick={openHandler}>
          {attributeType.toUpperCase() + 'S'}
        </h4>
        <button className="" onClick={openHandler}>
          {open ? "hide" : "show"}
        </button>
      </span>
      <div className="max-h-36 overflow-scroll">
        {open &&
          availableAttributes.map((attribute) => {
            const selected = equippedAttributes.includes(attribute);
            return (
              <ComAvailableAttribute
                key={attribute + "availableattribute"}
                selected={selected}
                attribute={attribute}
                clickHandler={() => {
                  attributeClickHandler(attribute, selected, attributeType);
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
