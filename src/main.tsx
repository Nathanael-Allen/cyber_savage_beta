import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ComCharacterPreview from "./components/ComCharacterPreview.tsx";
import { TUnit } from "./types/types.ts";
import ComFullCharacter from "./components/ComFullCharacter.tsx";
import ComEdit from "./components/EditComponents/ComEdit.tsx";

const unit: TUnit = {
  unitName: "Schmooly",
  level: 2,
  unitClass: "Warrior",
  equippedWeapons: [
    {
      type: "melee",
      techLevel: "standard",
      subtype: "light",
      numAttack: 4,
      damage: 2,
      numTraits: 1,
      equippedTraits: [
        {
          name: "Chamber",
          description: "Melee actions against this model have unfavorable",
          weaponSubtype: "all",
          weaponType: "both",
        },
        {
          name: "Chamber",
          description: "Melee actions against this model have unfavorable",
          weaponSubtype: "all",
          weaponType: "both",
        },
        {
          name: "Chamber",
          description: "Melee actions against this model have unfavorable",
          weaponSubtype: "all",
          weaponType: "both",
        },
      ],
      },
    {
      type: "melee",
      techLevel: "standard",
      subtype: "light",
      numAttack: 4,
      damage: 2,
      numTraits: 1,
      equippedTraits: [
        {
          name: "Chamber",
          description: "Melee actions against this model have unfavorable",
          weaponSubtype: "all",
          weaponType: "both",
        },
      ],
    },
  ],
  numCharacteristics: 2,
  numSpells: 4,
  speed: 7,
  health: 14,
  diceMelee: "d12",
  diceRanged: "d12",
  diceDefense: "d12",
  diceWillpower: "d12",
  equippedCharacteristics: [
    {
      name: "Horrifying",
      description:
        "Any model targeting this model with a combat action must test willpower vs this model. If failed weaken attack for the combat action.",
    },
    { name: "Hulking Body", description: "+4 Health" },
    {
      name: "Impervious",
      description: "Glancing hits do 0 damage to this model.",
    },
  ],
  equippedSpells: [
    {
      name: "Mystic Haze",
      spellocity: "d4",
      actionType: "utility",
      range: '12"',
      fizzle: "Caster become blind",
      weak: '3"x1" blocking LoS',
      adequate: '6"x1" blocking LoS',
      exemplary: '8"x1" blocking LoS',
    },
    {
      name: "Corrupt",
      spellocity: "d8",
      actionType: "utility",
      range: '12" (Target Terrain)',
      fizzle: "Caster takes 1 dmg",
      weak: "Dangerous d6",
      adequate: "Dangerous d8",
      exemplary: "Dangerous d12",
    },
    {
      name: "Telekinesis",
      spellocity: "target",
      actionType: "utility",
      range: '6"',
      fizzle: "Target immobilized",
      weak: 'Move target 6"',
      adequate: 'Move target 8"',
      exemplary: 'Move target 12"',
    },
  ],
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <ComEdit characterToEdit={unit} />
      {/* <ComCharacterPreview unit={unit} />     */}
    </div>
  </StrictMode>
);
