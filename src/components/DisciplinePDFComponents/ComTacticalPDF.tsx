import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComTacticalPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Tactical</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Well organized in the approach to violence. Each maneuver done to curate the desired conditions for the battle.</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Begin the battle with 8 tactical points. Spend during any of your models activations.</Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Blitz:</Text>
        <Text style={[{fontSize: "10px"}]}>Favorable on the initiative roll.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Survey:</Text>
        <Text style={[{fontSize: "10px"}]}>Target a piece of terrain, the terrain no longer grants cover for enemies or hinder charges for friendly models.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Prepared Position:</Text>
        <Text style={[{fontSize: "10px"}]}>Target a friendly character in cover, they gain favorable defense against hindered charges and ranged attacks.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Prioritize Target:</Text>
        <Text style={[{fontSize: "10px"}]}>Select an enemy character. Friendly characters gain strengthen and favorable stats but may only make combat actions against the target model until the end of their next activation.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Fire & Maneuver:</Text>
        <Text style={[{fontSize: "10px"}]}>After a friendly character makes a ranged attack, select another character within 6" and make a free move up to 6"</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Early Extraction:</Text>
        <Text style={[{fontSize: "10px"}]}>End the game at the end of round 4.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}