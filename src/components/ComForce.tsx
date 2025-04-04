import { TForce, TForceViews } from "../types/types";
import Force from "../classes/Force";

type props = { force: TForce; forceDispatch: () => void, viewHandler: (view: TForceViews) => void };

export default function ComForce({ force, viewHandler }: props) {

  
  return (
    <div className="m-8">
      <div className="text-center">
        <h1 className="font-anta text-3xl underline mb-4">{force.forceName}</h1>
        <h2>Points: {Force.getTotalPoints(force)}</h2>
        <h2>
          Combat Discipline: {force.discipline ? force.discipline : "None"}
        </h2>
      </div>
      <div>
        <ul className="*:my-4">
          <li>
            <button className="w-full py-2 text-xl bg-slate-900 text-white rounded-md font-anta hover:shadow-custom hover:underline" onClick={() => {viewHandler("equippedCharacters")}}>Characters</button>
          </li>
          <li>
          <button className="w-full py-2 text-xl bg-slate-900 text-white rounded-md font-anta hover:shadow-custom hover:underline" onClick={() => {viewHandler("equippedCharacters")}}>Add Characters</button>
          </li>
          <li>
          <button className="w-full py-2 text-xl bg-slate-900 text-white rounded-md font-anta hover:shadow-custom hover:underline" onClick={() => {viewHandler("equippedCharacters")}}>Combat Disciplines</button>
          </li>
          <li>
          <button className="w-full py-2 text-xl bg-slate-900 text-white rounded-md font-anta hover:shadow-custom hover:underline" onClick={() => {viewHandler("equippedCharacters")}}>Print Force</button>
          </li>
          <li>
          <button className="w-full py-2 text-xl bg-slate-900 text-white rounded-md font-anta hover:shadow-custom hover:underline" onClick={() => {viewHandler("equippedCharacters")}}>Save Force</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
