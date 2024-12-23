import { TForce } from "../types/types";

type props = {forces: TForce[], handleLoadArmy: (force: TForce) => void};

export default function ComLoadForce({forces, handleLoadArmy}: props) {
  return (
    <ul>
      {forces.map((force) => {
        return(
          <li className="text-xl cursor-pointer border border-gray-800 bg-gray-700 text-white p-2" onClick={() => handleLoadArmy(force)}>
           <button>{force.forceName}</button> 
          </li>
        )
      })}
    </ul>
  )
}