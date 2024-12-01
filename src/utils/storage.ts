import { TUnit } from "../types/types";


function setStorage(units: TUnit[]) {
  const jsonUnits = JSON.stringify(units);
  localStorage.setItem("army", jsonUnits);
};

function getStorage() {
  const army = localStorage.getItem("army");
  return army ? JSON.parse(army) : [];
}

export {setStorage, getStorage}