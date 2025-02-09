import { TSpells, TUnit, TWeaponTrait } from "../types/types";
import { TCharacteristics } from "../types/types";

export default function generateRules(characterList: TUnit[]) {
  const uniqueChars = flattenCharacteristics(characterList);
  const uniqueSpells = flattenSpells(characterList);
  const uniqueTraits = flattenWeaponTraits(characterList);

  return {
    uniqueChars: uniqueChars ? uniqueChars : [],
    uniqueSpells: uniqueSpells ? uniqueSpells : [],
    uniqueTraits: uniqueTraits ? uniqueTraits : [],
  }
}

function flattenCharacteristics(characterList: TUnit[]) {
  let uniqueChars: TCharacteristics[] = [];

  characterList.forEach((char) => {
    char.equippedCharacteristics?.forEach((char) => {
      let exists = uniqueChars.find((newChar) => newChar.name === char.name);
      if (!exists) {
        uniqueChars.push(char);
      }
    });
  });

  return uniqueChars;
}

function flattenSpells(characterList: TUnit[]) {
  let uniqueSpells: TSpells[] = [];

  characterList.forEach((char) => {
    char.equippedSpells?.forEach((spell) => {
      let exists = uniqueSpells.find(
        (newSpell) => newSpell.name === spell.name
      );
      if (!exists) {
        uniqueSpells.push(spell);
      }
    });
  });

  return uniqueSpells;
}

function flattenWeaponTraits(characterList: TUnit[]) {
  let uniqueTraits: TWeaponTrait[] = [];

  characterList.forEach((char) => {
    char.equippedWeapons.forEach((weapon) => {
      weapon.equippedTraits?.forEach((trait) => {
        let exists = uniqueTraits.find(newTrait => newTrait.name === trait.name);
        if (!exists) {
          uniqueTraits.push(trait)
        }
      })
    })
  })
  
  return uniqueTraits;
}
