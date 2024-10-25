import { useState } from "react";

type TDropdownProps = {
  availableAttributes: string[];
  equippedAttributes: string[];
  attributeClickHandler: (attribute: string, selected: boolean) => void;
}

type TAvailableAttributeProps = {
  attribute: string;
  selected: boolean;
  clickHandler: (attribute: string) => void;
}

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


export default function ComAttributeDropdown({availableAttributes, equippedAttributes, attributeClickHandler}: TDropdownProps) {
  const [open, setOpen] = useState<boolean>(false)
  function openHandler() {
    setOpen(!open)
  }
  
  return (
    <div className="bg-gray-100">
    <span
      className="flex gap-2 cursor-pointer hover:bg-gray-200"
      onClick={openHandler}
    >
      <h4
        className="font-semibold text-lg"
        onClick={openHandler}
    >
        Available Traits
      </h4>
      <button
        className=""
        onClick={openHandler}
      >
        show
      </button>
    </span>
    <div className="max-h-36 overflow-scroll">
      {open  &&
        availableAttributes.map((attribute) => {
          const selected = equippedAttributes.includes(attribute);
          return (
            <ComAvailableAttribute
              key={attribute+"availableattribute"}
              selected={selected}
              attribute={attribute}
              clickHandler={() => {
                attributeClickHandler(attribute, selected);
              }}
            />
          );
        })}
    </div>
    </div>

  )
}