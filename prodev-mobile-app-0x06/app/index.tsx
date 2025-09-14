import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "../styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "../constants";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <ImageBackground source={HEROLOGO} style={{ width: 100, height: 100 }} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Learn. Build. Collaborate.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonPrimaryText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonSecondaryText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
