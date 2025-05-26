import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComStandardBearers() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Standard Bearers</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Inspired by the Standard, your warriors fight with commanded ferocity.</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Appoint a model as the Flag Bearer. It gains the following abilities:
        The Flag Bearer at the start of its activation before any actions MAY spend inspiration amount indicate to activate any 1 of the abilities each turn (a model with the flag never counts as being in cover)
        All abilities affect allies that are within LoS of the flag when the ability is activated.
      </Text>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>
        When the Flag Bearer dies, lose all inspiration and place a banner marker where the model was.
        It may be picked up with a utility action and that models gains the Flag Bearers abilities.
      </Text>
      
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 0) Triumphant Wave:</Text>
        <Text style={[{fontSize: "10px"}]}>(utility action) gain d4 inspiration.</Text>
        <Text style={[{fontSize: "10px"}]}>(combat action) gain d6 inpiration.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Stand Firm:</Text>
        <Text style={[{fontSize: "10px"}]}>Gain priority when defending against attacks and spells.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Bear Witness:</Text>
        <Text style={[{fontSize: "10px"}]}>Apply humiliating to all enemies within LoS</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 4) Vigilance:</Text>
        <Text style={[{fontSize: "10px"}]}>Heal 2hp and remove negative status effects</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 5) For Victory:</Text>
        <Text style={[{fontSize: "10px"}]}>Strengthen ranged and melee. </Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Unbreakable:</Text>
        <Text style={[{fontSize: "10px"}]}>Entire team takes -1dmg per attack, until the end of their next activation.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}