import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComReinforcedPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Reinforced</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Unwavering in the face of threats, use your resources to withstand any attack then
        strike back on your terms.</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Begin the game with 1 requisition. Spend during any of your own models activation
      Gain 1 requisition at the start of each turn.</Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 0) Stalwart:</Text>
        <Text style={[{fontSize: "10px"}]}>When a character takes 0 damage while defending during an enemies activation, gain 1 requisition.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Securement:</Text>
        <Text style={[{fontSize: "10px"}]}>Target character +2 level when checking objective control.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Revitalize:</Text>
        <Text style={[{fontSize: "10px"}]}>Target model remove all negative status effects.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Bastion:</Text>
        <Text style={[{fontSize: "10px"}]}>Target character favorable defense.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Restore:</Text>
        <Text style={[{fontSize: "10px"}]}>Target character heal 3hp.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Unbreakable:</Text>
        <Text style={[{fontSize: "10px"}]}>Entire team takes -1dmg per attack, until the end of their next activation.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}