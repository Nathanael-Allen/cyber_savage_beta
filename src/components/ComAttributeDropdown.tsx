import { useState } from "react";
import { TAttributeType } from "../interfaces/TAttributeType";
import { TAttributeClickHandler } from "./ComUnit";

type TDropdownProps = {
  availableAttributes: string[];
  equippedAttributes: string[];
  attributeType: TAttributeType;
  title: string;
  clickHandler(
    attribute: string,
    type: TAttributeType,
    selected: boolean
  ): void;
};

type TAttributeProps = {
  attribute: string;
  attributeType: TAttributeType;
  handler: TAttributeClickHandler;
};

function ComSelectedAttribute({
  attribute,
  attributeType,
  handler,
}: TAttributeProps) {
  return (
    <p
      className="p-1 w-full cursor-pointer border-b border-gray-700 bg-gray-400"
      onClick={() => {
        handler(attribute, attributeType, true);
      }}
    >
      <button
        onClick={() => {
          handler(attribute, attributeType, true);
        }}
      >
        {attribute}
      </button>
    </p>
  );
}

function ComAvailableAttribute({
  attribute,
  attributeType,
  handler,
}: TAttributeProps) {
  return (
    <p
      className="p-1 w-full cursor-pointer border-b border-gray-700 hover:bg-gray-300"
      onClick={() => {
        handler(attribute, attributeType, false);
      }}
    >
      <button
        onClick={() => {
          handler(attribute, attributeType, false);
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
  clickHandler,
}: TDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  function openHandler() {
    setOpen(!open);
  }

  const cssClosed =
    "flex gap-2 cursor-pointer rounded p-2 hover:bg-gray-600 hover:text-white ";
  const cssOpen =
    "flex gap-2 cursor-pointer rounded-t-md p-2 bg-gray-600 text-white ";

  return (
    <div className="bg-slate-200 mb-2 rounded-md">
      <span className={open ? cssOpen : cssClosed} onClick={openHandler}>
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
            if (selected) {
              return (
                <ComSelectedAttribute
                  key={attribute}
                  attribute={attribute}
                  attributeType={attributeType}
                  handler={clickHandler}
                />
              ); 
            } else {
              return (
                <ComAvailableAttribute
                  key={attribute}
                  attribute={attribute}
                  attributeType={attributeType}
                  handler={clickHandler}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
