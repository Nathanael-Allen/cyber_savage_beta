import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComBeastTamersPDF() {
  return (
    <Page size="A4" orientation="portrait" style={[{paddingHorizontal: "12px", paddingVertical: "8px"}]}>
      <View
        style={[
          {
            textAlign: "center",
            marginBottom: 20,
            position: "relative"
          },
        ]}
      >
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Beast Tamers</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Bring a ferocious beast to battle. Keeping it under control may be a battle of it's own.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Beast Stats:</Text>
        <Text style={[{fontSize: "10px"}]}>HP: 18 | SPD: 7 | MEL: d(X) | RNG: d(X)</Text>
        <Text style={[{fontSize: "10px"}]}>WP: (based on current HP) 18-12 d4 | 11-7 d6 | 6-1 d8</Text>
        <Text style={[{fontSize: "10px"}]}>Characteristics: Stupid | Agile</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Prod: A model within 3" of the beast may spend a combat action to activate the beast:</Text>
        <Text style={[{fontSize: "10px"}]}>The character activating the beast makes a 3 dice Will Power test vs the beast's Will Power (opposing player rolls for the beast). Replace X with the result.</Text>
        <Text style={[{fontSize: "10px"}]}>weak (1 success): X = d6</Text>
        <Text style={[{fontSize: "10px"}]}>Adequate (2 success): X = d8</Text>
        <Text style={[{fontSize: "10px"}]}>Exemplary (3 success): X = d10</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Beast Combat Actions:</Text>
        <Text style={[{fontSize: "10px"}]}>Maul: Melee | 4 atk | 2 dmg | life drain</Text>
        <Text style={[{fontSize: "10px"}]}>Spit: Ranged | 2 atk | 4 dmg | blind</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontSize: "10px"}]}>NOTE: If the beast has NOT been activated by the end of the round it must charge the nearest character. If no characters are in range it must move and make a ranged attack against the nearest character. Otherwise move towards the closest character. (When not activated X=d6)</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}