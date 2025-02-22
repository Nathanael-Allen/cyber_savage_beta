import { useState } from "react";
import { TCharacteristics, TSpells, TUnit, TWeapon } from "../types/types";
import { SpellsList } from "../constants/SpellsList";
import ComWeapon from "./ComWeapon";
import { CharacteristicsList } from "../constants/CharacteristicsList";
import checkCharacteristics from "../utils/checkCharacteristics";
import getNumSpells from "../utils/getNumSpells";
import checkFlaw from "../utils/checkFlaw";
type props = {
  unit: TUnit;
  saveHandler(unit: TUnit): void;
  cancelHandler(): void;
};

export default function ComEditWindow({
  unit,
  saveHandler,
  cancelHandler,
}: props) {
  const {
    unitClass,
    unitName,
    numCharacteristics,
    health,
    speed,
    equippedSpells,
    equippedCharacteristics,
    equippedWeapons,
  } = unit;

  // Click handlers
  function getUnit(): TUnit {
    return {
      ...unit,
      unitName: unitNameState,
      equippedCharacteristics: stateCharacteristics,
      health: stateHealth,
      speed: stateSpeed,
      equippedSpells: stateSpells,
      equippedWeapons: stateWeapons,
      extraSpell: stateExtraSpell,
      numSpells: stateNumSpells,
      hasFlaw: stateFlaw,
    };
  }

  function saveUnit() {
    const updatedUnit = getUnit();
    const unitWithBonuses = checkCharacteristics(updatedUnit);
    saveHandler(unitWithBonuses);
  }

  function weaponClickHandler(weapon: TWeapon) {
    const updated = stateWeapons.map((equippedWeapon) => {
      return equippedWeapon.id === weapon.id
        ? { ...weapon }
        : { ...equippedWeapon };
    });
    setStateWeapons(updated);
  }

  function spellClickHandler(spell: TSpells) {
    if (equippedSpellNames.includes(spell.name)) {
      setStateSpells(
        stateSpells.filter((equippedSpell) => equippedSpell.name != spell.name)
      );
    } else {
      setStateSpells([...stateSpells, spell]);
    }
  }

  function characteristicClickHandler(char: TCharacteristics) {
    if (equippedCharNames.includes(char.name)) {
      if (char.name.toLowerCase() === "mystical") {
        setStateExtraSpell(false);
        setStateNumSpells(stateNumSpells - 1);
      }
      if (char.name.toLowerCase() === "extra weapon") {
        setStateWeapons(
          stateWeapons.filter((weapon) => {
            return (
              weapon.extraWeapon === false || weapon.extraWeapon === undefined
            );
          })
        );
      }
      setStateCharacteristics(
        stateCharacteristics?.filter(
          (equippedChar) => equippedChar.name != char.name
        )
      );
    } else {
      if (char.name.toLowerCase() === "mystical") {
        setStateExtraSpell(true);
        setStateNumSpells(stateNumSpells + 1);
      }
      if (char.name.toLowerCase() === "extra weapon") {
        setStateWeapons([
          ...stateWeapons,
          {
            type: "unarmed",
            techLevel: "standard",
            changeType: true,
            numTraits: 1,
            extraWeapon: true,
            id: 69,
          },
        ]);
      }
      setStateCharacteristics([...stateCharacteristics, char]);
    }
  }

  function dropdownHandler(dropdown: "char" | "spell" | "weapons") {
    if (openDropdowns.includes(dropdown)) {
      setOpenDropdowns(
        openDropdowns.filter((openDropdown) => openDropdown != dropdown)
      );
    } else {
      setOpenDropdowns([...openDropdowns, dropdown]);
    }
  }

  // State variables
  const [unitNameState, setUnitName] = useState(unitName ? unitName : "");
  const [stateCharacteristics, setStateCharacteristics] = useState(
    equippedCharacteristics ? equippedCharacteristics : []
  );
  const [stateHealth] = useState(health);
  const [stateSpeed] = useState(speed);
  const [stateExtraSpell, setStateExtraSpell] = useState(unit.extraSpell ? unit.extraSpell : false)
  const [stateNumSpells, setStateNumSpells] = useState(getNumSpells(unit));
  const [stateSpells, setStateSpells] = useState(
    equippedSpells ? equippedSpells : []
  );
  const [stateFlaw, setStateFlaw] = useState<boolean>(unit.hasFlaw ? unit.hasFlaw : false);
  const [stateWeapons, setStateWeapons] = useState(equippedWeapons);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  // Lists of equipped attributes names
  const equippedCharNames = stateCharacteristics.map((char) => char.name);
  const equippedSpellNames = stateSpells.map((spell) => spell.name);

  // Dynamic CSS
  const characteristicCSS =
    "text-sm p-3 border border-black cursor-pointer hover:bg-blue-100";
  const equippedCharacteristicCSS =
    "text-sm p-3 border border-black cursor-pointer bg-blue-200";

  return (
    <div className="mt-12">
      <h2 className="mb-8 font-bold text-3xl text-center">{unitClass}</h2>
      <div className="flex justify-center items-center">
        <input
          className="w-11/12 border text-xl border-black rounded-md p-1"
          onChange={(e) => setUnitName(e.target.value)}
          type="text"
          placeholder={unitName ? unitName : "Unit Name..."}
        />
      </div>
      <div className="flex gap-1 justify-center items-center text-xl py-1">
        <input type="checkbox" checked={stateFlaw} onClick={() => setStateFlaw(!stateFlaw)} id="flaw-checkbox" className="h-5 w-5"/>
        <label htmlFor="flaw-checkbox">Flaw</label>
      </div>
      <div className="relative rounded-md border-2 border-black m-2 bg-gray-200">
        <div
          onClick={() => {
            dropdownHandler("char");
          }}
          className="bg-gray-700 text-white text-center p-1 rounded-t-sm sticky top-0 font-semibold text-lg cursor-pointer flex justify-center items-center"
        >
          <h4>
            Characteristics {stateCharacteristics.length}/{checkFlaw(numCharacteristics, stateFlaw)}
          </h4>
          <button>
            <svg
              width="32"
              height="32"
              fill="none"
              transform={
                openDropdowns.includes("char") ? "rotate(270)" : "rotate(180)"
              }
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="m15 6-6 6 6 6"
              />
            </svg>
          </button>
        </div>
        <div className="max-h-96 overflow-scroll overscroll-contain">
          {openDropdowns.includes("char") &&
            CharacteristicsList.map((char, index) => {
              return (
                <p
                  key={index}
                  className={
                    equippedCharNames.includes(char.name)
                      ? equippedCharacteristicCSS
                      : characteristicCSS
                  }
                  onClick={() => {
                    characteristicClickHandler(char);
                  }}
                >
                  <button
                    onClick={() => {
                      characteristicClickHandler(char);
                    }}
                    className="text-left"
                  >
                    <b>{char.name}: </b> {char.description}
                  </button>
                </p>
              );
            })}
        </div>
      </div>
      {stateNumSpells > 0 && (
        <div className="relative rounded-md border-2 border-black m-2 bg-gray-200">
          <div
            onClick={() => {
              dropdownHandler("spell");
            }}
            className="bg-gray-700 text-white text-center p-1 rounded-t-sm sticky top-0 font-semibold text-lg cursor-pointer flex justify-center items-center"
          >
            <h4>
              Spells {stateSpells.length}/{stateNumSpells}
            </h4>
            <button>
              <svg
                width="32"
                height="32"
                fill="none"
                transform={
                  openDropdowns.includes("spell")
                    ? "rotate(270)"
                    : "rotate(180)"
                }
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.4"
                  d="m15 6-6 6 6 6"
                />
              </svg>
            </button>
          </div>
          <div className="max-h-96 overflow-scroll overscroll-contain">
            {openDropdowns.includes("spell") &&
              SpellsList.map((spell, index) => {
                return (
                  <p
                    key={index}
                    className={
                      equippedSpellNames.includes(spell.name)
                        ? equippedCharacteristicCSS
                        : characteristicCSS
                    }
                    onClick={() => spellClickHandler(spell)}
                  >
                    <button
                      onClick={() => spellClickHandler(spell)}
                      className="text-left"
                    >
                      <b>{spell.name}: </b> Range {spell.range} | Spellocity{" "}
                      {spell.spellocity}
                    </button>
                  </p>
                );
              })}
          </div>
        </div>
      )}
      <div className="m-2 border-2 border-black rounded-md bg-gray-200">
        <div
          onClick={() => {
            dropdownHandler("weapons");
          }}
          className="bg-gray-700 text-white text-center p-1 rounded-t-sm sticky top-0 font-semibold text-lg cursor-pointer flex justify-center items-center"
        >
          <h4>Weapons</h4>
          <button>
            <svg
              width="32"
              height="32"
              fill="none"
              transform={
                openDropdowns.includes("weapons")
                  ? "rotate(270)"
                  : "rotate(180)"
              }
              viewBox="0 0 24 24"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.4"
                d="m15 6-6 6 6 6"
              />
            </svg>
          </button>
        </div>
        {openDropdowns.includes("weapons") &&
          stateWeapons.map((weapon, index) => {
            return (
              <div key={weapon.type + index}>
                <ComWeapon
                  key={index}
                  weapon={weapon}
                  clickHandler={weaponClickHandler}
                />
              </div>
            );
          })}
      </div>
      <button onClick={cancelHandler} className="absolute top-0 left-4 flex items-center font-semibold">
      <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
            >
              <path
                d="M6 12h12M6 12l5-5m-5 5 5 5"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          Characters
      </button>
      <button
        onClick={saveUnit}
        className="fixed bottom-6 right-6 font-semibold text-2xl bg-gray-800 text-white p-3 rounded-lg hover:shadow-custom hover:bg-gray-700"
      >
        Save
      </button>
    </div>
  );
}
