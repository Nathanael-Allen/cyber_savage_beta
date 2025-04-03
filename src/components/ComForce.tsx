import { TForce } from "../types/types";
import Force from "../classes/Force";

type props = { force: TForce, dispatch: () => void };

export default function ComForce({ force }: props) {
  return (
    <>
      <div>
        <h1>{force.forceName}</h1>
        <h2>Points: {Force.getTotalPoints(force)}</h2>
        <h2>
          Combat Discipline: {force.discipline ? force.discipline : "None"}
        </h2>
      </div>
      <div>
        <ul>
          <li>
            <button></button>
          </li>
        </ul>
      </div>
    </>
  );
}
