import { TForce } from "../types/types";

export default function getForcePointTotal(force: TForce) {
  let points: number = 0;

  force.units.forEach((unit) => (points += unit.level));

  return points;
}
