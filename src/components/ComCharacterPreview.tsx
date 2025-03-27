import { useState } from "react";
import { TUnit } from "../types/types";
import ComStatBubble from "./ComStatBubble";

type props = { unit: TUnit };
export default function ComCharacterPreview({ unit }: props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="relative border border-black bg-slate-200 rounded-md max-w-96 m-4 p-2 overflow-scroll">
      <button className="absolute right-0" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 fill-sky-600 hover:fill-sky-900"
          viewBox="0 -960 960 960"
        >
          <path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z" />
        </svg>
      </button>
      <div className="flex gap-2 mb-1 items-center text-lg max-w-56 max-h-28 overflow-hidden flex-wrap break-before-auto">
        <div className="w-12 h-12 bg-white rounded-full"></div>
        <p className="font-bold">{unit.unitName ? unit.unitName : ""}</p>
      </div>
      <div className="flex gap-3 mb-4 items-center text-lg ml-2 justify-center">
        <p className="font-bold">{unit.unitClass}</p>
        <p>level: {unit.level}</p>
      </div>
      {/* <div className="flex gap-2 justify-center">
        <ComStatBubble stat={unit.speed!} statTag="spd" />
        <ComStatBubble stat={unit.health!} statTag="hp" />
        <ComStatBubble stat={unit.diceMelee!} statTag="mel" />
        <ComStatBubble stat={unit.diceRanged!} statTag="rng" />
        <ComStatBubble stat={unit.diceDefense!} statTag="def" />
        <ComStatBubble stat={unit.diceWillpower!} statTag="wp" />
      </div> */}
      <div className="w-full text-center font-bold text-white mt-2">
        <button className="p-2 w-full bg-slate-800 rounded-md">
          Show Full Loadout/Stats
        </button>
      </div>
      {openMenu && (
        <ul className="absolute top-1 text-center right-1 bg-slate-700 z-10 rounded-md">
          <li>
            <button className="rounded-t-md p-2 w-full border-b border-white text-white font-semibold hover:bg-sky-900">
              Edit Loadout
            </button>
          </li>
          <li>
            <button className="p-2 w-full border-b border-white text-white font-semibold hover:bg-sky-900">
              Duplicate
            </button>
          </li>
          <li>
            <button className="rounded-b-md p-2 w-full text-red-500 font-semibold hover:bg-white">
              Delete
            </button>
          </li>
        </ul>
      )}
      {openMenu && (
        <div
          className="h-dvh w-dvw fixed top-0 left-0 bg-white/0"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
