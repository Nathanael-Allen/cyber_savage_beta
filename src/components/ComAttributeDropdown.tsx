import { useState } from "react";

type TAttributeType =  "trait" | "flaw" | "spell";

type TDropdownProps = {
  availableAttributes: string[];
  equippedAttributes: string[];
  attributeType: TAttributeType
  title: string;
  attributeClickHandler: (attribute: string, selected: boolean, attributeType: TAttributeType) => void;
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
  const baseCSS = "p-1 w-full cursor-pointer border-b border-gray-700";
  const classUnselected =
    baseCSS + " " + "hover:bg-gray-300";
  const classSelected = baseCSS + " " + "bg-gray-400";
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
  title,
  attributeClickHandler,
}: TDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  function openHandler() {
    setOpen(!open);
  }
  
  const cssClosed = "flex gap-2 cursor-pointer rounded p-2 hover:bg-gray-600 hover:text-white "
  const cssOpen = "flex gap-2 cursor-pointer rounded-t-md p-2 bg-gray-600 text-white "


  return (
    <div className="bg-slate-200 mb-2 rounded-md">
      <span
        className={open ? cssOpen : cssClosed}
        onClick={openHandler}
      >
        <h4 className="font-semibold" onClick={openHandler}>
          {title}
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
