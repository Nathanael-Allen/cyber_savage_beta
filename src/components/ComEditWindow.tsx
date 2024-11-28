import { useEffect, useState } from "react";
import { TCharacteristics, TSpells, TUnit, TWeapon } from "../types/types";
import { SpellsList } from "../constants/SpellsList";
import ComWeapon from "./ComWeapon";
import { CharacteristicsList } from "../constants/CharacteristicsList";
type props = { unit: TUnit; mainHandler(unit: TUnit): void };

export default function ComEditWindow({ unit, mainHandler }: props) {
  const {
    unitClass,
    level,
    diceDefense,
    diceMelee,
    diceRanged,
    diceWillpower,
    numCharacteristics,
    numSpells,
    health,
    speed,
    equippedSpells,
    equippedCharacteristics,
    equippedWeapons,
    id,
  } = unit;

  // Click handlers
  function getUnit() {
    return {
      ...unit,
      equippedCharacteristics: stateCharacteristics,
      health: stateHealth,
      speed: stateSpeed,
      equippedSpells: stateSpells,
      equippedWeapons: stateWeapons,
    };
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
      setStateCharacteristics(
        stateCharacteristics?.filter(
          (equippedChar) => equippedChar.name != char.name
        )
      );
    } else {
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
  const [stateCharacteristics, setStateCharacteristics] = useState(
    equippedCharacteristics ? equippedCharacteristics : []
  );
  const [stateHealth, setStateHealth] = useState(health);
  const [stateSpeed, setStateSpeed] = useState(speed);
  const [stateSpells, setStateSpells] = useState(
    equippedSpells ? equippedSpells : []
  );
  const [stateWeapons, setStateWeapons] = useState(equippedWeapons);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  // Updates the unit in top level when a click handler is triggered
  // useEffect(
  //   () => mainHandler(getUnit()),
  //   [stateCharacteristics, stateWeapons, stateSpells]
  // );

  // Lists of equipped attributes names
  const equippedCharNames = stateCharacteristics.map((char) => char.name);
  const equippedSpellNames = stateSpells.map((spell) => spell.name);

  // Dynamic CSS
  const characteristicCSS =
    "text-sm p-3 border border-black cursor-pointer hover:bg-blue-100";
  const equippedCharacteristicCSS =
    "text-sm p-3 border border-black cursor-pointer bg-blue-200";

  return (
    <div>
      <h2 className="font-bold text-2xl text-center">{unitClass}</h2>
      <div className="relative rounded-md border-2 border-black m-2 bg-gray-200">
        <div
          onClick={() => {
            dropdownHandler("char");
          }}
          className="bg-gray-700 text-white text-center p-1 rounded-t-sm sticky top-0 font-semibold text-lg cursor-pointer flex justify-center items-center"
        >
          <h4>
            Characteristics {stateCharacteristics.length}/{numCharacteristics}
          </h4>
          <button>
            <svg
              width="32"
              height="32"
              fill="none"
              transform={openDropdowns.includes('char') ? "rotate(270)" : "rotate(180)" }
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
        <div className="max-h-96 overflow-scroll">
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
      {stateSpells.length > 0 && (
        <div className="relative rounded-md border-2 border-black m-2 bg-gray-200">
          <div
            onClick={() => {
              dropdownHandler("spell");
            }}
            className="bg-gray-700 text-white text-center p-1 rounded-t-sm sticky top-0 font-semibold text-lg cursor-pointer flex justify-center items-center"
          >
            <h4>
              Spells {stateSpells.length}/{numSpells}
            </h4>
            <button>
            <svg
              width="32"
              height="32"
              fill="none"
              transform={openDropdowns.includes('spell') ? "rotate(270)" : "rotate(180)" }
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
          <div className="max-h-96 overflow-scroll">
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
              transform={openDropdowns.includes('weapons') ? "rotate(270)" : "rotate(180)" }
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
      <button className="absolute bottom-6 right-6 font-semibold text-2xl bg-gray-800 text-white p-3 rounded-lg">
        Save
      </button>
    </div>
  );
}
