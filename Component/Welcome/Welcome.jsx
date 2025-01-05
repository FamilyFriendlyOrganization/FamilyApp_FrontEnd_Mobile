import React from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native"; // Import thêm ImageBackground
import familyIcon from "../../assets/Welcome/family.png";
import googleIcon from "../../assets/Welcome/google.png";
import facebookIcon from "../../assets/Welcome/facebook.png";
import handIcon from "../../assets/Welcome/hand.png";
import phoneIcon from "../../assets/Welcome/phone.png";
import backgroundImage from "../../assets/Welcome/background.png"; // Import hình nền
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  // Hàm xử lý khi nhấn nút Login
  const handleLogin = async () => {
    navigation.navigate("Login"); // Chuyển sang màn hình Login
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={familyIcon}
            style={styles.familyIcon}
            resizeMode="contain"
          />
          <Text style={styles.title}>Family App</Text>
          <Text style={styles.welcomeText}>
            <Image
              source={handIcon}
              style={styles.handIcon}
              resizeMode="contain"
            />{" "}
            Xin chào, chào mừng trở lại
          </Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>
              Đã có tài khoản, đăng nhập ngay
            </Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Chưa có tài khoản?{" "}
            <Text
              style={styles.signupLink}
              onPress={() => navigation.navigate("SignUp")}
            >
              Đăng ký ngay
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop: -10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  familyIcon: {
    width: 217,
    height: 195,
    marginBottom: 20,
  },
  title: {
    fontSize: 36, // Increased font size
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFFFFF", // White color for the title
  },
  welcomeText: {
    fontSize: 20, // Slightly larger text size
    fontStyle: "italic", // Italicized text to match the style
    color: "#FFFFFF", // White color for the welcome text
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  handIcon: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 15, // Increased padding for bigger buttons
    margin: 10,
    width: 350, // Wider buttons to match the second image
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000", // Added shadow for more depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  loginText: {
    fontSize: 18, // Larger text inside buttons
    color: "#000",
    fontWeight: "500",
    fontStyle: "italic", // Italic text inside the buttons
  },
  signupText: {
    fontSize: 20, // Increased font size for better visibility
    color: "#FFFFFF",
    fontStyle: "italic", // Italicized text for "Chưa có tài khoản?"
    fontWeight: "bold", // Bold text for both "Chưa có tài khoản?" and "Đăng ký ngay"
  },
  signupLink: {
    color: "#00FF00", // Brighter green color
    fontWeight: "bold",
    fontStyle: "italic", // Italicized text for the signup link "Đăng ký ngay"
    fontSize: 20, // Ensure the same size as "signupText"
  },
});
export default Welcome;
