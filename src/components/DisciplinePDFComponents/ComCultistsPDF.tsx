import { View, Text, Page, Image } from "@react-pdf/renderer";

export default function ComCultistsPDF() {
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
        <Text style={[{fontSize: 24, fontWeight: "bold"}]}>Cultists</Text>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Your assembly of cultists draw power from elsewhere. Will they complete their dark designs?</Text>
      </View>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Perform rituals to gain favor, spend the favor on incantations. Start the game with 0 favor.</Text>
      <View style={[{marginBottom: "16px"}]}>
        <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Rituals: All friendly characters may perform the following actions.</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Raise Effigy:</Text>
        <Text style={[{fontSize: "10px"}]}>(combat action) Within 3" of the center of the map you may raise a single Effigy (40mm, HP: 6, DEF: D8). At the end of each turn the effigy stands, gain 2 favor (may only have a single effigy in play at a time.).</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Gaze Into The Abyss:</Text>
        <Text style={[{fontSize: "10px"}]}>(utility action) Move friendly character d8" scatter, gain 1 favor. (May only be performed once per round)</Text>
        <Text style={[{fontSize: "10px"}]}></Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>Sacrifice:</Text>
        <Text style={[{fontSize: "10px"}]}>(utility action) friendly character may sacrifice another friendly character that is base-to-base. Slay the friendly character and gain favor equal to it's level.</Text>
      </View>
      <View style={[{marginBottom: "16px",}]}>
       <Text style={[{fontWeight: "bold", fontSize: "16px"}]}>Incantations:</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 1) Sacred Strength:</Text>
        <Text style={[{fontSize: "10px"}]}>All models within 6" of the effigy are strengthened until the end of their next activation.</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 2) Beam of Madness:</Text>
        <Text style={[{fontSize: "10px"}]}>Target an enemy character within LoS of any friendly character, target takes (D8 3atks 3dmg, psychoactive, explosive)</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 3)Blessings From Beyond:</Text>
        <Text style={[{fontSize: "10px"}]}>Choose a character, roll a flaw and strengthen all stats for the rest of the game</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>(Cost 8) Summon Entity:</Text>
        <Text style={[{fontSize: "10px"}]}>Place a character (30mm-60mm) 2" from a standing effigy.</Text>
        <Text style={[{fontSize: "10px"}]}>(HP: 12, SPD: 8, MEL: d12, RNG: d12, DEF: d12, WP:d12) [flying, invincible, stupid]</Text>
        <Text style={[{fontWeight: "bold", fontSize: "12px"}]}>ATTACKS:</Text>
        <Text style={[{fontSize: "10px"}]}>Brutal Strike: Melee (4atks, 2dmg) [concussive, merciless])</Text>
        <Text style={[{fontSize: "10px"}]}>Eldritch Beam: Ranged (3atks, 3dmg) [incendiary]</Text>
      </View>
      <Image src={"/bottom_image_even_smaller.png"} style={{position: "absolute", bottom: 0, left: 0, width: "100%"}}></Image>
    </Page>
  )
}