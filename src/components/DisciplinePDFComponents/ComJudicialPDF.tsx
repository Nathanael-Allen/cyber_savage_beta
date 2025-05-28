import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComJudicialPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Judicial</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Remind them who the law is...</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Declare a Law at the start of each round to gain Justice Points(JP). Spend Justice points to support your force. Each Law may only be declared once per game and lasts until the end of the round it was declared. </Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Laws:</Text>
        <Text style={[{fontSize: "10px"}]}>Freeze: gain 1 JP each time an enemy character performs a sprint action.</Text>
        <Text style={[{fontSize: "10px"}]}>Ceasefire: Gain 1 JP each time an enemy character performs a ranged or melee combat action.</Text>
        <Text style={[{fontSize: "10px"}]}>Hand It Over: gain 1 JP for each VP an enemy team scores over you.</Text>
        <Text style={[{fontSize: "10px"}]}>Stop Resisting: gain 1 JP each time an enemey performs a reaction.</Text>
        <Text style={[{fontSize: "10px"}]}>No Trespassing: gain 1 JP for each enemy character that ends it's activation touching a piece of terrain.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Supports:</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 5) Back Up:</Text>
        <Text style={[{fontSize: "10px"}]}>Place a level 1 character with simple med (ranged or melee) with 0 characteristics in your deployment zone.</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 4) Detain:</Text>
        <Text style={[{fontSize: "10px"}]}>(Utility action) Detain an enemy character that is base-to-base with this character. The enemy character gains a Detain Token, while the character has a detain token, it may not perform combat actions. At the start of each round test Wd8, if successful the Detain Token is removed. Other characters may spend a utility action to remove it while base-to-base with the detained character.</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Brutality:</Text>
        <Text style={[{fontSize: "10px"}]}>The next attack this character makes, the target cannot react and must defend with willpower.</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Got Your Six:</Text>
        <Text style={[{fontSize: "10px"}]}>When a friendly character reacts to a combat action, it may spend another friendly character's reaction toekn and gain favorable for the reaction if they are within 3".</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Zone Off:</Text>
        <Text style={[{fontSize: "10px"}]}>Place 3 obstacles that are 3" long, 1" wide, and 1" tall anywhere on the map.</Text>
      </View>
     <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}