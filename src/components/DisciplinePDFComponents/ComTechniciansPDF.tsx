import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComTechniciansPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Technicians</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>A walking war machine of ancient origin, devastating power, but will you keep it online? Bring a large mech. (See Ancient Machine Stat card)</Text>
      </View>
      <Text style={[{fontWeight: "bold", fontSize: "12px", marginBottom: "12px"}]}>Every 2 points of damage adds 1 Wear & Tear (w&t). Activate the Ancient Machine as normal. Each action adds the w&t indicated.</Text>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Combat Actions:</Text>
        <Text style={[{fontSize: "10px"}]}>Machine Gun (1 w&t): ranged | 4 atk | 2 dmg</Text>
        <Text style={[{fontSize: "10px"}]}>Siege Cannon (2 w&t): ranged | 4 atk | 4 dmg | [Long Range, Explosive]</Text>
        <Text style={[{fontSize: "10px"}]}>Crush (1 w&t): melee | 3 atk | 3 dmg | [Concussive]</Text>
        <Text style={[{fontSize: "10px"}]}>Mechblade (1 w&t): melee | 4 atk | 2 dmg | [Shattering]</Text>
      </View>
      <View style={[{marginBottom: "8px",}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Movement Action:</Text>
        <Text style={[{fontSize: "10px"}]}>Walk: Move up to speed stat (5")</Text>
      </View>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Utility Actions:</Text>
        <Text style={[{fontSize: "10px"}]}>Raise Shields (2 w&t): Strengthen Defense</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Amount of w&t determines the Melee and Ranged Stats of the Ancient Machine.</Text>
        <Text style={[{fontSize: "10px"}]}>0: d10</Text>
        <Text style={[{fontSize: "10px"}]}>1-4: d8</Text>
        <Text style={[{fontSize: "10px"}]}>5-8: d6</Text>
        <Text style={[{fontSize: "10px"}]}>9-12: d4</Text>
        <Text style={[{fontSize: "10px"}]}>13+: d4 + unfavorable</Text>
      </View>
      <View style={[{marginBottom: "8px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Any friendly character that is b2b with the Ancient Machine may perform a minor or major repair.</Text>
        <Text style={[{fontSize: "10px"}]}>Minor Repair: (utility action) 3 dice will power test, each success removes 1 w&t</Text>
        <Text style={[{fontSize: "10px"}]}>Major Repair: (combat action) 3 dice will power test, each success removes 2 w&t</Text>
      </View>
      <View>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Additional Stats:</Text>
        <Text style={[{fontSize: "10px"}]}>Health: N/A, Speed: 5, Defense: d8, Willpower: d6</Text>
        <Text style={[{fontSize: "10px"}]}>Characteristics: [Stupid, Sturdy, Cannot Climb, Heavy Armor]</Text>
      </View>
      <Image src={"/bottom_image_even_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}