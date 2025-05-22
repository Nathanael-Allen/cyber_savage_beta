import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComHonorBoundPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Honor Bound</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Adhere to the code, claim rightful victory.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontSize: "12px"}]}>Gain honor equal to friendly character level when they are slain.</Text>
        <Text style={[{fontSize: "12px"}]}>Spend honor to do the following abilities on your turn.</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 0):</Text>
        <Text style={[{fontSize: "10px"}]}>When attacking allow the target character to have priority. Gain 1 honor.</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 0):</Text>
        <Text style={[{fontSize: "10px"}]}>At the beginning of the game choose a friendly character(challenger) and an enemy character(rival); For the remainder of the game, the challenger is the only character that may target the rival until the challenger is slain.</Text>
        <Text style={[{fontSize: "10px"}]}>If the rival is a lower level than the challenger gain 1 honor, if same level gain 2 honor, if higher level gain 3 honor.</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Noble Victory:</Text>
        <Text style={[{fontSize: "10px"}]}>If the challenger kills their rival, permanently strengthen all stats of the challenger.</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Prowess:</Text>
        <Text style={[{fontSize: "10px"}]}>Select an enemy character within 8" of a friendly character. Remove the enemy character's reaction token. If the friendly character doesn't have a reaction token, restore friendly character's reaction.</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Guidance:</Text>
        <Text style={[{fontSize: "10px"}]}>Select a friendly character. Any attacks made against this character are unfavorable until the end of it's next activation</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Persistence:</Text>
        <Text style={[{fontSize: "10px"}]}>When a friendly character is slain you may use this to prevent removing the character until the end of the round after scoring. (Character may not activate or react)</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 4) Humility:</Text>
        <Text style={[{fontSize: "10px"}]}>Humiliate a friendly character. Weaken every enemy character until the end of the friendly character's next activation.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}