import { Document, View, Text, Page } from "@react-pdf/renderer";
import { TUnit } from "../types/types";
import generateRules from "../utils/generateRules";
type props = { unitList: TUnit[]; forceName: string; discipline: string };

export default function ComPDF({ unitList, forceName, discipline }: props) {
  const { uniqueChars, uniqueSpells, uniqueTraits } = generateRules(unitList);
  return (
    <Document>
      <Page size="A4" orientation="portrait" style={[{ maxWidth: 800 }]}>
        <View
          style={[
            {
              textAlign: "center",
              marginBottom: 20,
            },
          ]}
        >
          <Text style={[{ fontSize: 24, fontWeight: "extrabold" }]}>
            {forceName}
          </Text>
          <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>
            Combat Discipline: {discipline !== "" ? discipline : "None"}
          </Text>
        </View>
        {unitList.map((unit, index) => {
          const hasFlaw = unit.hasFlaw ? unit.hasFlaw : false;
          return (
            <View
              wrap={false}
              style={[
                {
                  margin: "auto",
                  marginTop: 5,
                  border: 1,
                  width: 500,
                  position: "relative",
                  fontSize: 10,
                },
              ]}
              key={index}
            >
              <View>
                <View
                  style={[
                    {
                      fontSize: 16,
                      fontWeight: "bold",
                      display: "flex",
                      gap: 10,
                      flexDirection: "row",
                      margin: "auto",
                    },
                  ]}
                >
                  <Text>{unit.unitName}</Text>
                  <Text>{unit.unitClass}</Text>
                  <Text>Level {unit.level}</Text>
                  {hasFlaw === true ? <Text>(Flawed)</Text> : null}
                </View>
                <View>
                  <View
                    style={[
                      {
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        margin: "auto",
                        marginTop: 10,
                        fontSize: 12,
                      },
                    ]}
                  >
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: 1,
                        borderRadius: 200,
                        padding: 10,
                      }}
                    >
                      <Text>{unit.health}</Text>
                      <Text>Health</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: 1,
                        borderRadius: 200,
                        padding: 10,
                      }}
                    >
                      <Text>{unit.speed}</Text>
                      <Text>Speed</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: 1,
                        borderRadius: 200,
                        padding: 10,
                      }}
                    >
                      <Text>{unit.diceMelee}</Text>
                      <Text>Melee</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: 1,
                        borderRadius: 200,
                        padding: 10,
                      }}
                    >
                      <Text>{unit.diceRanged}</Text>
                      <Text>Ranged</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: 1,
                        borderRadius: 200,
                        padding: 10,
                      }}
                    >
                      <Text>{unit.diceDefense}</Text>
                      <Text>Defense</Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: 1,
                        borderRadius: 200,
                        padding: 10,
                      }}
                    >
                      <Text>{unit.diceWillpower}</Text>
                      <Text>Willpower</Text>
                    </View>
                  </View>
                  {unit.numCharacteristics && unit.numCharacteristics > 0 ? (
                    <View
                      style={[
                        {
                          marginTop: 10,
                          padding: 5,
                          borderTop: 1,
                          borderColor: "black",
                          fontSize: 10,
                          display: "flex",
                          gap: 5,
                        },
                      ]}
                    >
                      <Text style={[{ textAlign: "center", fontSize: 12 }]}>
                        Characteristics
                      </Text>
                      <View
                        style={[
                          {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          },
                        ]}
                      >
                        {unit.equippedCharacteristics?.map(
                          (characteristic, index) => {
                            return (
                              <Text
                                key={index}
                                style={[
                                  { borderRight: 1, paddingHorizontal: 10 },
                                ]}
                              >
                                {characteristic.name}
                              </Text>
                            );
                          }
                        )}
                      </View>
                    </View>
                  ) : null}
                  {unit.numSpells && unit.numSpells > 0 ? (
                    <View
                      style={[
                        {
                          marginTop: 10,
                          padding: 5,
                          borderTop: 1,
                          borderColor: "black",
                          display: "flex",
                          fontSize: 10,
                          gap: 5,
                        },
                      ]}
                    >
                      <Text style={[{ textAlign: "center", fontSize: 12 }]}>
                        Spells
                      </Text>
                      <View
                        style={[
                          {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          },
                        ]}
                      >
                        {unit.equippedSpells?.map((spell, index) => {
                          return (
                            <Text
                              style={[
                                { borderRight: 1, paddingHorizontal: 10 },
                              ]}
                              key={index}
                            >
                              {spell.name}
                            </Text>
                          );
                        })}
                      </View>
                    </View>
                  ) : null}
                  <View
                    style={[
                      {
                        padding: 5,
                        borderTop: 1,
                        borderColor: "black",
                        fontSize: 10,
                        display: "flex",
                        gap: 5,
                      },
                    ]}
                  >
                    <Text style={[{ textAlign: "center", fontSize: 12 }]}>
                      Weapons
                    </Text>
                    {unit.equippedWeapons.map((weapon, index) => {
                      return (
                        <View
                          key={index}
                          style={[
                            {
                              fontSize: 10,
                              margin: 1,
                              padding: 5,
                              border: 1,
                              borderColor: "black",
                              borderRadius: 10,
                            },
                          ]}
                        >
                          <View
                            style={[
                              {
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                              },
                            ]}
                          >
                            <Text>
                              {weapon.techLevel.toUpperCase()}{" "}
                              {weapon.type.toUpperCase()} (
                              {weapon.subtype?.toUpperCase()})
                            </Text>
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
                            <View
                              style={[
                                { display: "flex", flexDirection: "row" },
                              ]}
                            >
                              {weapon.equippedTraits?.map((trait, index) => {
                                return (
                                  <Text
                                    style={{ paddingHorizontal: 2 }}
                                    key={index}
                                  >
                                    {trait.name}
                                  </Text>
                                );
                              })}
                            </View>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </Page>
      <Page>
        <View>
          <Text style={{ textAlign: "center" }}>RULES SHEET</Text>
          <View
            style={[
              {
                fontSize: 12,
                marginVertical: 4,
              },
            ]}
          >
            <Text style={{ fontSize: 16 }}>CHARACTERISTICS</Text>
            {uniqueChars.map((char, index) => {
              return (
                <Text
                  style={[
                    {
                      padding: 2,
                    },
                  ]}
                  key={index}
                >
                  {" "}
                  {char.name}: {char.description}
                </Text>
              );
            })}
          </View>
          <View
            style={[
              {
                fontSize: 12,
                marginVertical: 4,
              },
            ]}
          >
            <Text style={{ fontSize: 16 }}>SPELLS</Text>
            {uniqueSpells.map((spell, index) => {
              return (
                <View
                  style={[
                    {
                      padding: 2,
                    },
                  ]}
                  key={index}
                >
                  <Text>
                    {spell.name} | spellocity: {spell.spellocity} | range:{" "}
                    {spell.range} | action type: {spell.actionType}
                  </Text>
                  <Text>
                    fizzle: {spell.fizzle} | weak: {spell.weak} | adequate:{" "}
                    {spell.adequate} | exemplary: {spell.exemplary}
                  </Text>
                </View>
              );
            })}
          </View>
          <View
            style={[
              {
                fontSize: 12,
                marginVertical: 4,
              },
            ]}
          >
            <Text style={{ fontSize: 16 }}>WEAPON TRAITS</Text>
            {uniqueTraits.map((trait, index) => {
              return (
                <Text
                  style={[
                    {
                      padding: 2,
                    },
                  ]}
                  key={index}
                >
                  {trait.name}: {trait.description}
                </Text>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
}
