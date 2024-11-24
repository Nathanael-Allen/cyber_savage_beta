import { TUnit } from "../types/types";

export default function getTotalPoints(unitList: TUnit[]): number{
  let totalPoints: number = 0;
  unitList.forEach((unit) => totalPoints += unit.level)  
  return totalPoints;
}
