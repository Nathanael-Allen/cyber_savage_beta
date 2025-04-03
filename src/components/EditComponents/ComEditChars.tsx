import React from "react";
import { CharacteristicsList } from "../../constants/CharacteristicsList";
import { TAction } from "../../reducers/editReducer";
import { TCharacteristics } from "../../types/types";

type props = {
  equippedChars: TCharacteristics[];
  dispatch: React.Dispatch<TAction>;
};

export default function ComEditChars({ equippedChars, dispatch }: props) {
  const equippedCharsNames = equippedChars.map((char) => char.name);

  function removeChar(char: TCharacteristics) {
    dispatch({ type: "removeChar", characteristic: char });
  }

  return (
    <>
      <div className="mb-8 border border-black rounded-md">
        <h2 className="bg-slate-800 text-white text-xl p-1 font-semibold text-center rounded-t-md">
          Equipped
        </h2>
        <ul className="rounded-b-md h-32 overflow-scroll">
          {equippedChars.map((char, index) => {
            return (
              <li key={index} className="group grid grid-cols-6 py-1 border-b border-black bg-sky-100 cursor-pointer hover:bg-white">
                <div className="flex justify-center items-center">
                  <div className="border border-black h-5 w-5 rounded-full flex justify-center items-center">
                    <div className="bg-sky-900 h-4 w-4 rounded-full group-hover:hidden">

                    </div>
                  </div>
                </div>
                <button
                  className="w-full text-right pr-4 text-lg col-start-2 col-span-5"
                  onClick={() => removeChar(char)}
                >
                  {char.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bg-slate-200 border border-black rounded-md">
        <h2 className="bg-slate-800 text-white text-xl p-1 font-semibold text-center">
          Characteristics
        </h2>
        <ul className="max-h-48 overflow-scroll">
          {CharacteristicsList.map((char, index) => {
            if (equippedCharsNames.indexOf(char.name) === -1) {
              return (
                <li key={index} className="group grid grid-cols-6 py-1 border-b border-black cursor-pointer hover:bg-sky-100" onClick={() => dispatch({ type: "addChar", characteristic: char})}>
                <div className="flex justify-center items-center">
                <div className="border border-black h-5 w-5 rounded-full flex justify-center items-center">
                    <div className="bg-transparent h-4 w-4 rounded-full group-hover:bg-sky-900">

                    </div>
                  </div>
                </div>
                <button
                  className="w-full text-right pr-4 text-lg col-start-2 col-span-5"
                >
                  {char.name}
                </button>
              </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
