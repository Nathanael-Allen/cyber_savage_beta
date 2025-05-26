import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComPredatoryPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Predatory</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Pick off your prey by observing, learning, and striking when the time is right. Many creatures, mutants, and ghouls from across the galaxy must rely on their natural instincts to hunt and survive.</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Start the game with 0 instinct.</Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 0) Mark Prey:</Text>
        <Text style={[{fontSize: "10px"}]}>(utility action) Mark a single visible enemy character as Prey. This status lasts until the target is slain. (Counts as a negative modifier that may be removed).</Text>
        <Text style={[{fontSize: "10px"}]}>Gain 2 instinct when a Prey is slain.</Text>
        <Text style={[{fontSize: "10px"}]}>Gain 1 instinct when a Prey is activated.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 0) Adapt to Survive:</Text>
        <Text style={[{fontSize: "10px"}]}>When a friendly character is slain, mark the character that killed them as Prey.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Close In:</Text>
        <Text style={[{fontSize: "10px"}]}>At the start of a friendly characters activation, move them directly towards a visible Prey.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Stalk:</Text>
        <Text style={[{fontSize: "10px"}]}>Target a visible Prey, this character may not have priority of any kind until the end of its next activation.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Go in For the Kill:</Text>
        <Text style={[{fontSize: "10px"}]}>Friendly character gains +1 attack to all weapons when targeting a Prey until the end of it's next activation.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Hunt Down:</Text>
        <Text style={[{fontSize: "10px"}]}>Target Prey; the next time this character activates, any friendly character may spend a reaction to perform either a 6” charge or a ranged combat action against it. Only a single character may choose to react this way. Prey may not react to this.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 4) Primal Terror:</Text>
        <Text style={[{fontSize: "10px"}]}>All remaining Prey must immediately test for suppress (wd8), -1 action.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}