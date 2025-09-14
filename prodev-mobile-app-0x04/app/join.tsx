import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";

export default function Join() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.iconsection}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Create Account</Text>
      </View>

      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Sign up to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Full Name</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your full name"
          />
        </View>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formControl}
            placeholder="Enter your email"
          />
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formPasswordControl}
            placeholder="Create a password"
            secureTextEntry
          />
        </View>
      </View>

      {/* Primary Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join Now</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or continue with</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Signup */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={styles.secondaryButtonText}>Sign up with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Signin Redirect */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Text style={styles.signupSubTitleText}>Sign In</Text>
      </View>
    </View>
  );
}