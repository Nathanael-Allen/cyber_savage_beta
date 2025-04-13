import React, { useState } from "react";
import { TAction } from "../../reducers/editReducer";
import { TWeapon, TEditViews, TWeaponTrait } from "../../types/types";
import Weapon from "../../classes/Weapon";
import { WeaponTraitsList } from "../../constants/WeaponTraitsList";
import ComWeaponTraitModal from "../UtilityComponents/ComWeaponTraitModal";

type equippedWeaponProps = {
  equippedWeapons: TWeapon[];
  dispatch: React.Dispatch<TAction>;
  handleEditViewChange: (view: TEditViews) => void;
};

// Wrapper for all equipped weapons
export default function ComEditWeaponsList({
  equippedWeapons,
  dispatch,
  handleEditViewChange,
}: equippedWeaponProps) {
  return (
    <div>
      {equippedWeapons.map((weapon, index) => {
        return (
          <ComEditWeapon key={index} weapon={weapon} dispatch={dispatch} />
        );
      })}
      <button
        className="w-full text-white font-semibold text-lg py-2 bg-slate-900 rounded-md hover:bg-slate-700"
        onClick={() => handleEditViewChange("main")}
      >
        Done
      </button>
    </div>
  );
}

type weaponProps = {
  weapon: TWeapon;
  dispatch: React.Dispatch<TAction>;
};

// Individual weapon component
function ComEditWeapon({ weapon, dispatch }: weaponProps) {
  const [openTraits, setOpenTraits] = useState<boolean>(false);
  const [description, setDescription] = useState<TWeaponTrait | null>(null);

  function changeWeaponSubtype(e: React.ChangeEvent<HTMLSelectElement>) {
    const newSubtype = e.target.value;
    if (
      newSubtype == "light" ||
      newSubtype == "medium" ||
      newSubtype == "heavy"
    ) {
      dispatch({
        type: "updateWeapon",
        weapon: { ...weapon, subtype: newSubtype },
      });
    }
  }

  function addTrait(trait: TWeaponTrait) {
    dispatch({
      type: "updateWeapon",
      weapon: { ...weapon, equippedTraits: [...weapon.equippedTraits, trait] },
    });
  }

  function removeTrait(trait: TWeaponTrait) {
    dispatch({
      type: "updateWeapon",
      weapon: {
        ...weapon,
        equippedTraits: weapon.equippedTraits.filter(
          (eqTrait) => eqTrait.name !== trait.name
        ),
      },
    });
  }

  function openDescription(e: React.MouseEvent, trait: TWeaponTrait) {
    e.stopPropagation();
    setDescription(trait);
  }

  function closeDescription() {
    setDescription(null);
  }

  return (
    <div className="border border-black my-4 bg-white">
      <div className="bg-slate-900 text-white flex gap-3 justify-center p-1">
        <p>{weapon.techLevel}</p>
        <h2 className="font-bold">{weapon.type}</h2>
      </div>
      <div className="flex gap-3 justify-center p-1">
        <select
          name="subtype"
          id=""
          className="bg-slate-900 text-white p-1"
          value={weapon.subtype === "none" ? "" : weapon.subtype}
          onChange={(e) => changeWeaponSubtype(e)}
        >
          <option value="subtype" hidden>
            subtype
          </option>
          <option value="light">light</option>
          <option value="medium">medium</option>
          <option value="heavy">heavy</option>
        </select>
        <p>
          dmg: <b>{Weapon.getTotalDmg(weapon)}</b>
        </p>
        <p>
          atk: <b>{Weapon.getTotalAtks(weapon)}</b>
        </p>
      </div>
      <div className="">
        <div className="">
          <h3 className="bg-slate-900 text-white p-1 text-center border-r border-black">
            equipped traits
          </h3>
          <div className="bg-white border border-black flex gap-1 flex-wrap text-sm p-2 max-h-28 overflow-scroll overscroll-contain">
            {weapon.equippedTraits.map((trait, index) => {
              return (
                <button
                  key={index}
                  className="p-2 bg-slate-500 border border-slate-500 rounded-md text-white flex items-center gap-1 hover:border-red-400"
                  onClick={() => {
                    removeTrait(trait);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 12h12"
                    />
                  </svg>
                  {trait.name}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <button
            className="bg-slate-900 border border-slate-900 text-white p-1 text-center w-full flex justify-center items-center hover:border-sky-400"
            onClick={() => setOpenTraits(!openTraits)}
          >
            add traits
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24"
              className="w-7 h-7 stroke-sky-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 12h12m-6-6v12"
              />
            </svg>
          </button>
          {openTraits && (
            <ul className="h-36 bg-white border border-black overflow-scroll overscroll-contain text-sm">
              {Weapon.getAvailableTraits(weapon).map((trait, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center  bg-slate-600 text-white border-b border-b-white group"
                  >
                    <button
                      className="flex gap-1 w-4/5 py-2 px-1 group"
                      onClick={() => addTrait(trait)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="800"
                        height="800"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 stroke-sky-400 group-hover:stroke-sky-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 12h12m-6-6v12"
                        />
                      </svg>
                      {trait.name}
                    </button>
                    <button
                      className="text-sky-400 w-1/5 py-2 px-1"
                      onClick={(e) => openDescription(e, trait)}
                    >
                      info
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      {description && (
        <ComWeaponTraitModal
          closeModal={closeDescription}
          trait={description}
        />
      )}
    </div>
  );
}
