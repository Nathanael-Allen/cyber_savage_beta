import { Document, View, Text, Page } from "@react-pdf/renderer";
import { TUnit } from "../types/types";
type props = { unitList: TUnit[]; forceName: string; discipline: string };


export default function ComPDF({ unitList, forceName, discipline }: props) {
  return (
    <Document>
    <Page
  size="A4"
  orientation="landscape"
  style={[{ display: "flex", flexDirection: "row", maxWidth: 800 }]}
  >
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          gap: 10,
          position: "absolute",
          width: 800,
          top: 2,
          left: 250,
        },
      ]}
      >
      <Text style={[{ fontSize: 24, fontWeight: "bold" }]}>
        {forceName}
      </Text>
      <Text style={[{ fontSize: 24, fontWeight: "bold" }]}>
        {" "}
        Combat Discipline: {discipline}
      </Text>
    </View>
    {unitList.map((unit, index) => {
  return (
    <View
      style={[
        {
          margin: 10,
          marginTop: 30,
          border: 1,
          width: 400,
          height: 560,
          position: "relative",
        },
      ]}
      break={index % 2 === 0 && index !== 0 ? true : false}
      key={index}
    >
      <View>
        <View style={[{ }]}>
          <Text>{unit.unitName}</Text>
          <Text>{unit.unitClass}</Text>
          <Text>Level {unit.level}</Text>
        </View>
        <View
          style={[
            {
              position: "absolute",
              left: 200,
              display: "flex",
              flexDirection: "row",
              gap: 10,
            },
          ]}
        >
          <View>
            <Text>{unit.health}</Text>
            <Text>Health</Text>
          </View>
          <View>
            <Text>{unit.speed}</Text>
            <Text>Speed</Text>
          </View>
        </View>
        <View>
          <View
            style={[
              {
                position: "absolute",
                top: 50,
                left: 55,
                display: "flex",
                flexDirection: "row",
                gap: 10,
              },
            ]}
          >
            <View>
              <Text>{unit.diceMelee}</Text>
              <Text>Melee</Text>
            </View>
            <View>
              <Text>{unit.diceRanged}</Text>
              <Text>Ranged</Text>
            </View>
            <View>
              <Text>{unit.diceDefense}</Text>
              <Text>Defense</Text>
            </View>
            <View>
              <Text>{unit.diceWillpower}</Text>
              <Text>Willpower</Text>
            </View>
          </View>
          {unit.numCharacteristics && (
            <View
              style={[
                {
                  marginTop: 100,
                  padding: 5,
                  border: 1,
                  borderColor: "black",
                  fontSize: 16,
                  display: "flex",
                  gap: 5,
                },
              ]}
            >
              <Text style={[{ textAlign: "center" }]}>
                Characteristics
              </Text>
              {unit.equippedCharacteristics?.map((characteristic, index) => {
                return (
                  <View key={index}>
                    <Text style={[{ fontWeight: "ultrabold" }]}>
                      {characteristic.name}:
                    </Text>
                    <Text style={[{ fontSize: 12, paddingLeft: 10 }]}>
                      {characteristic.description}
                    </Text>
                  </View>
                );
              })}
            </View>
          )}
          {unit.numSpells && (
            <View
              style={[
                {
                  padding: 5,
                  border: 1,
                  borderColor: "black",
                  fontSize: 16,
                  display: "flex",
                  gap: 5,
                },
              ]}
            >
              <Text style={[{ textAlign: "center" }]}>Spells</Text>
              {unit.equippedSpells?.map((spell, index) => {
                return (
                  <View
                    style={[
                      {
                        fontSize: 12,
                        alignItems: "baseline",
                        display: "flex",
                        flexDirection: "row",
                        gap: 3,
                      },
                    ]}
                    key={index}
                  >
                    <Text
                      style={[
                        { fontSize: 14, fontWeight: "extrabold" },
                      ]}
                    >
                      {spell.name}:
                    </Text>
                    <Text>
                      Range {spell.range}, Spellocity {spell.spellocity}
                    </Text>
                  </View>
                );
              })}
            </View>
          )}
          <View
            style={[
              {
                padding: 5,
                border: 1,
                borderColor: "black",
                fontSize: 14,
                display: "flex",
                gap: 5,
              },
            ]}
          >
            <Text style={[{ textAlign: "center" }]}>Weapons</Text>
            {unit.equippedWeapons.map((weapon, index) => {
              return (
                <View key={index}>
                  <Text>
                    {weapon.techLevel.toUpperCase()}{" "}
                    {weapon.type.toUpperCase()} (
                    {weapon.subtype?.toUpperCase()})
                  </Text>
                  <View
                    style={[
                      {
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                      },
                    ]}
                  >
                    <View>
                      <Text>
                        {weapon.bonusAttacks
                          ? weapon.numAttack! + weapon.bonusAttacks
                          : weapon.numAttack}{" "}
                        Attacks
                      </Text>
                    </View>
                    <View>
                      <Text>
                        {weapon.damage! +
                          (weapon.bonusDamage
                            ? weapon.bonusDamage
                            : 0)}{" "}
                        Damage
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[{ textAlign: "center" }]}>
                      Traits
                    </Text>
                    {weapon.equippedTraits?.map((trait) => {
                      return (
                        <Text>
                          {trait.name}:{trait.description}
                        </Text>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  )})}
  </Page>
  </Document>
  );
}
