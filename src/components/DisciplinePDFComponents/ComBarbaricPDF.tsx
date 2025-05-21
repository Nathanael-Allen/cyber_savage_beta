import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComBarbaric() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Barbaric</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Merciless and determined, revel in the demise of your enemies.</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Start with 0 brutality. When a friendly character kills another character, gain brutality equal to the slain characters level. Spend brutality points at the beginning of your turn. Effects can stack</Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1)</Text>
        <Text style={[{fontSize: "10px"}]}>+4" speed stat.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1)</Text>
        <Text style={[{fontSize: "10px"}]}>Restore reaction token.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Prepared Position:</Text>
        <Text style={[{fontSize: "10px"}]}>Target a friendly character in cover, they gain favorable defense against hindered charges and ranged attacks.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2)</Text>
        <Text style={[{fontSize: "10px"}]}>Favorable all stats.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3)</Text>
        <Text style={[{fontSize: "10px"}]}>Give a weapon +1 attack</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 5)</Text>
        <Text style={[{fontSize: "10px"}]}>Activate a model that has already activated.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}