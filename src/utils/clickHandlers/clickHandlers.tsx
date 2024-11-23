import { TUnit } from "../../types/TUnit";

type TView = "available" | "equipped";
type TAlert = string | null;
type TEquippedUnitsProps = {
  handleAddAttribute(
    unitID: TUnitID,
    trait: string,
    type: TAttributeType
  ): void;
  handleRemoveAttribute(
    UnitID: TUnitID,
    trait: string,
    type: TAttributeType
  ): void;
  handleDeleteUnit(UnitID: TUnitID): void;
  handleAddWeaponTrait(unitID: TUnitID, trait: string, weaponIndex: number): void;
  handleRemoveWeaponTrait(unitID: TUnitID, trait: string, weaponIndex: number): void;
  weaponSubtypeHandler(UnitID: TUnitID, subtype: string, weaponIndex: number): void;
};


function weaponSubtypeHandler(unitID: TUnitID, subtype: TSubtype, weaponID: number) {
  setUnitList(
    unitList.map((unit) => {
      if (unit.id === unitID) {
        const updatedWeapons: TWeapon[] = unit.equippedWeapons.map((weapon) => {
          if (weapon.id === weaponID) {
            return {
              ...weapon,
              subtype: subtype
            }
          } else {
            return {
              ...weapon
            }
          }
        })
        return {
          ...unit,
          equippedWeapons: updatedWeapons
        }
      } else {
        return {
          ...unit
        }
      }
    })
  )
}

function handleRemoveWeaponTrait(unitID: TUnitID, trait: string, id: number) {
  setUnitList(
    unitList.map((unit) => {
      if (unit.id === unitID) {
        const updatedWeapons: TWeapon[] = unit.equippedWeapons.map(
          (weapon) => {
            if (weapon.id === id) {
              const newTraits = weapon.equippedTraits!.filter((equippedTrait) => {
                return equippedTrait != trait;
              })
              return {
                ...weapon,
                equippedTraits: newTraits
              };
            } else {
              return {
                ...weapon,
              };
            }
          }
        );
        return {
          ...unit,
          equippedWeapons: updatedWeapons,
        };
      } else {
        return { ...unit };
      }
    })
  );
}

function handleAddWeaponTrait(
  unitID: TUnitID,
  trait: string,
  id: number
) {
  setUnitList(
    unitList.map((unit) => {
      if (unit.id === unitID) {
        const updatedWeapons: TWeapon[] = unit.equippedWeapons.map(
          (weapon) => {
            if (weapon.id === id) {
              return {
                ...weapon,
                equippedTraits: weapon.equippedTraits
                  ? [...weapon.equippedTraits, trait]
                  : [trait],
              };
            } else {
              return {
                ...weapon,
              };
            }
          }
        );
        return {
          ...unit,
          equippedWeapons: updatedWeapons,
        };
      } else {
        return { ...unit };
      }
    })
  );
}

function handleAddAttribute(
  unitID: TUnitID,
  attribute: string,
  type: TAttributeType
) {
  setUnitList(
    unitList.map((unit) => {
      if (unit.id === unitID) {
        switch (type) {
          case "trait":
            return {
              ...unit,
              equippedTraits: unit.equippedTraits
                ? [...unit.equippedTraits, attribute]
                : [attribute],
            };
          case "spell":
            return {
              ...unit,
              equippedSpells: unit.equippedSpells
                ? [...unit.equippedSpells, attribute]
                : [attribute],
            };
          case "weaponTrait":
            return {
              ...unit,
            };
        }
      } else {
        return { ...unit };
      }
    })
  );
}

function handleRemoveAttribute(
  unitID: TUnitID, 
  attribute: string,
  type: TAttributeType
) {
  setUnitList(
    unitList.map((unit) => {
      if (unit.id === unitID) {
        switch (type) {
          case "spell":
            return {
              ...unit,
              equippedSpells: unit.equippedSpells!.filter(
                (eAttribute) => eAttribute != attribute
              ),
            };
          case "trait":
            return {
              ...unit,
              equippedTraits: unit.equippedTraits!.filter(
                (eAttribute) => eAttribute != attribute
              ),
            };
          case "weaponTrait":
            return {
              ...unit,
            };
        }
      } else {
        return { ...unit };
      }
    })
  );
}


function handleAddUnit(unit: TUnit, unitList: TUnit[]): TUnit {
  const weapons = unit.equippedWeapons.map((weapon, index) => {
    let numTraits;
    switch (weapon.techLevel) {
      case "simple":
        numTraits = 0;
        break;
      case "standard":
        numTraits = 1;
        break;
      case "advanced":
        numTraits = 2;
        break;
    }      return {
      ...weapon,
      equippedTraits: weapon.equippedTraits ? weapon.equippedTraits : [],
      id: index,
      numTraits: numTraits,
    }
  })
  return {
      ...unit,
      equippedWeapons: weapons,
      numTraits: unit.hasFlaw ? unit.numTraits + 1 : unit.numTraits,
      id: unit.type + (unitList.length + 1)
    }
}

export {handleAddUnit}