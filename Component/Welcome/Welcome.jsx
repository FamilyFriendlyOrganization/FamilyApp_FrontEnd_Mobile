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
const Welcome = () => {
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
          <TouchableOpacity style={styles.loginButton}>
            <Image
              source={googleIcon}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.loginText}>Đăng nhập bằng Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Image
              source={phoneIcon}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.loginText}>Đăng nhập bằng SĐT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Image
              source={facebookIcon}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.loginText}>Đăng nhập bằng Facebook</Text>
          </TouchableOpacity>
          <Text style={styles.signupText}>
            Chưa có tài khoản?{" "}
            <Text style={styles.signupLink}>Đăng ký ngay</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the background covers the entire screen
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  familyIcon: {
    width: 100,
    height: 100,
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
    width: 24,
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
    fontSize: 16, // Increased font size for better visibility
    color: "#FFFFFF",
    fontStyle: "italic", // Italicized text for "Chưa có tài khoản?"
    fontWeight: "bold", // Bold text for both "Chưa có tài khoản?" and "Đăng ký ngay"
  },
  signupLink: {
    color: "#00FF00", // Brighter green color
    fontWeight: "bold",
    fontStyle: "italic", // Italicized text for the signup link "Đăng ký ngay"
    fontSize: 16, // Ensure the same size as "signupText"
  },
});
export default Welcome;
