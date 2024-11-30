import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView>
      <Image
        source={require("../assets/images/competition_notice.png")}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          marginTop: Platform.OS === "ios" ? 0 : -24,
        }}
      />
    </ThemedView>
  );
}
