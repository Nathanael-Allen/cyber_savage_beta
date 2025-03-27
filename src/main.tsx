import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ComCharacterPreview from "./components/ComCharacterPreview.tsx"; 
import { TUnit } from "./types/types.ts";

const unit: TUnit = {
  unitName: "Schmooly",
  level: 2,
  unitClass: "Warrior",
  equippedWeapons: [{ type: "melee", techLevel: "standard" }],
  numCharacteristics: 2,
  numSpells: 0,
  speed: 7,
  health: 14,
  diceMelee: "d12",
  diceRanged: "d12",
  diceDefense: "d12",
  diceWillpower: "d12",
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
    <ComCharacterPreview unit={unit} />    
    </div>
  </StrictMode>
);
