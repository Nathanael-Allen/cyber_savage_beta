import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComGamblersPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Gamblers</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>High risk high reward, gamblers play to win</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Begin the battle with 3 chips</Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Ante Up:</Text>
        <Text style={[{fontSize: "10px"}]}>After a combat action has been declared but before dice are rolled you may declare evens or odds. If what you declared is the majority, gain 3 chips.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Pay Off: </Text>
        <Text style={[{fontSize: "10px"}]}>Enemy characters cannot attack chosen allied character.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3) Even the Odds:</Text>
        <Text style={[{fontSize: "10px"}]}>Instead of combat each player rolls 5 dice and tries to make a poker hand. A player may reroll any number of the dice a single time. The loser takes 10 damage with no effects.</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 4) Sweeten  the Pot:</Text>
        <Text style={[{fontSize: "10px"}]}>Immediately earn 1 VP</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost X) Cyber Roulette:</Text>
        <Text style={[{fontSize: "10px"}]}>X=chosen character level. Instead of a normal combat action this character can attack for 3 damage, this attack may not be reacted to. If the attack hits or glances make another attack, repeat this process until an attack misses or the target is slain.</Text>
      </View>
      <Image src={"/bottom_image_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}