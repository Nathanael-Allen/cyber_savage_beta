import React, { useEffect, useRef, useState } from "react";
import { TUnit } from "../types/types";
import ComCharacterDetailModal from "./UtilityComponents/ComCharacterDetailModal";
import { TForceAction } from "../reducers/forceReducer";
import ComAlert from "./ComAlert";

type props = { characters: TUnit[], dispatch: React.Dispatch<TForceAction> };

export default function ComAddCharacters({ characters, dispatch }: props) {
  return (
    <div className="w-4/5 mt-4 mx-auto">
      <div></div>
      <ComLevelDropdown level={1} characters={characters} dispatch={dispatch} />
      <ComLevelDropdown level={2} characters={characters} dispatch={dispatch} />
      <ComLevelDropdown level={3} characters={characters} dispatch={dispatch} />
      <ComLevelDropdown level={4} characters={characters} dispatch={dispatch} />
    </div>
  );
}

type LevelDropdownProps = { level: number; characters: TUnit[], dispatch: React.Dispatch<TForceAction> };

function ComLevelDropdown({ level, characters, dispatch }: LevelDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<TUnit | null>(null);
  const [alert, setAlert] = useState<string | null>(null);
  const alertTimer = useRef<number>();
  
  useEffect(() => {
    if (alert) {
      alertTimer.current = setTimeout(() => {
        setAlert(null);
      }, 20000);
      return () => clearTimeout(alertTimer.current);
    }
  }, [alert]);

  function handleAddChar(character: TUnit) {
    dispatch({type: "addCharacter", character: character});
    setAlert(character.unitClass + " added to force!");
    
  }

  return (
    <div>
      <button
        className="bg-slate-900 border border-slate-900 border-b-white text-white py-2 flex justify-center items-center text-center w-full hover:border-sky-500"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold mr-2">Level {level}</span>
        {open ? " close" : " open"}
        {/* <svg
          fill="none"
          transform={open ? "rotate(270)" : "rotate(180)"}
          viewBox="0 0 24 24"
          className={openInfo !== null ? "hidden" : "w-5 h-5 mt-1"}
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            d="m15 6-6 6 6 6"
          />
        </svg> */}
      </button>
      {open && (
        <ul className="bg-white">
          {characters.map((char, index) => {
            if (char.level === level) {
              return (
                <li key={index} className="bg-slate-600 text-white border-b flex items-center">
                  <button className="px-1 py-2 flex gap-1 group w-4/5" onClick={() => handleAddChar(char)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="800"
                      height="800"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 stroke-sky-400 group-hover:stroke-sky-600 mt-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 12h12m-6-6v12"
                      />
                    </svg>
                    {char.unitClass}
                  </button>
                  <button
                    className="text-sky-400 text-right pr-2 w-1/5"
                    onClick={() => setOpenInfo(char)}
                  >
                    info
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
      {openInfo && (
        <ComCharacterDetailModal
          character={openInfo}
          closeModal={() => setOpenInfo(null)}
        />
      )}
      {alert && <ComAlert message={alert!} />}
    </div>
  );
}
