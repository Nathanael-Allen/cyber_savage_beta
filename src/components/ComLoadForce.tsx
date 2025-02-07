import { TForce } from "../types/types";
import getForcePointTotal from "../utils/getForcePointTotal";

type props = { forces: TForce[]; handleLoadArmy: (force: TForce) => void };

export default function ComLoadForce({ forces, handleLoadArmy }: props) {
  return (
    <ul>
      {forces.map((force, index) => {
        return (
          <li
            key={index}
            className="text-xl flex cursor-pointer border border-gray-800 bg-gray-700 text-white p-2"
            onClick={() => handleLoadArmy(force)}
          >
            <button>{force.forceName} Points: {getForcePointTotal(force)}</button>
            <p></p>
          </li>
        );
      })}
    </ul>
  );
}
