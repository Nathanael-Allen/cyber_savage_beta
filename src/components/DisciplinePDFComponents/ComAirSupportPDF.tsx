import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComAirSupportPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Air Support</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Never fight without air superiority. Call in support from the skies but be prepared it's DANGER CLOSE!</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Designate Target:</Text>
        <Text style={[{fontSize: "10px"}]}>(combat action) May be performed ONCE per turn by any friendly character. Select one PAYLOAD then place a Targeted Position Token (20mm) within 10" LoS. When scattering the Target Position Token, if it hits the edge of the map, move it the remaining distance in the opposite direction.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>PAYLOADS:</Text>
        <Text style={[{fontSize: "10px"}]}>Unless specified otherwise, all Payloads trigger at the end of the characters activation who called it in.</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>HE Strike</Text>
        <Text style={[{fontSize: "10px"}]}>Scatter Target Position Token d8". Then all characters within 2" must defend vs (2atk, 5dmg, d10, [incendiary])</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Gatling Barrage</Text>
        <Text style={[{fontSize: "10px"}]}>Scatter Target Position Token d8". Then all characters within 2" of the token must defend vs (6atk, 2dmg, d8, [suppress])</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Caustic Smoke</Text>
        <Text style={[{fontSize: "10px"}]}>Scatter Target Position Token d8". Then place a 6" circle of smoke. The smoke lasts until the character that called in the payload finishes their next activation. Any character that touches the smoke at any point takes 1dmg. Smoke blocks LoS</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Supply Drop</Text>
        <Text style={[{fontSize: "10px"}]}>This payload triggers IMMEDIATELY. Scatter the Target Position Token d8" and place a supply drop (40mm base). When a friendly character is base-to-base with it they may remove a charge and heal d6. (Has 2 charges, a character may only use it once per activation).</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Carpet Mines</Text>
        <Text style={[{fontSize: "10px"}]}>Scatter 3x mines(20mm base) d8" each from the Target Position Token. Any model within 2" of a mine at any point must immediately remove the mine and all models within 2" test vs (1atk, 5dmg, d12 [concussive])</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}