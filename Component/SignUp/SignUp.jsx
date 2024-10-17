import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// Import images
import bubbleText from "../../assets/SignUp/bubble_text.png";
import facebook from "../../assets/SignUp/facebook.png";
import github from "../../assets/SignUp/github.png";
import heart from "../../assets/SignUp/Heart.png";
import key from "../../assets/SignUp/key.png";
import mail from "../../assets/SignUp/mail.png";
import picture from "../../assets/SignUp/picture.png";
import user from "../../assets/SignUp/user.png";
import backgroundImage from "../../assets/Login/background.png"; // Hình nền chính
import mainBackground from "../../assets/Login/main.png"; // Hình main.png bọc component
import xicon from "../../assets/SignUp/xicon.png"; // Biểu tượng X

const SignUp = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* Phần chứa lời chào */}
      <View style={styles.greetingContainer}>
        <View style={styles.greetingBox}>
          <Text style={styles.greetingText}>Chào</Text>
        </View>
        <Text style={styles.greetingSubText}>Bắt đầu nào!</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Đăng ký</Text>

        <View style={styles.inputContainer}>
          <Image source={user} style={styles.icon} resizeMode="contain" />
          <TextInput placeholder="Nhập tên tài khoản" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Image source={key} style={styles.icon} resizeMode="contain" />
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={mail} style={styles.icon} resizeMode="contain" />
          <TextInput placeholder="Nhập email của bạn" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Image source={heart} style={styles.icon} resizeMode="contain" />
          <TextInput
            placeholder="Nhập tên bạn muốn dùng"
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>Tải ảnh ngay!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Tiếp tục</Text>
        </TouchableOpacity>

        {/* Thiết kế hàng chứa các biểu tượng Facebook, X và GitHub */}
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity>
            <Image
              source={facebook}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={xicon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={github}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  greetingContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    alignItems: "flex-end",
  },
  greetingBox: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  greetingText: {
    color: "#7B61FF",
    fontWeight: "bold",
    fontSize: 16,
  },
  greetingSubText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  formContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#7B61FF",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#CCC",
    paddingVertical: 5,
  },
  uploadButton: {
    marginBottom: 20,
  },
  uploadText: {
    color: "#7B61FF",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#7B61FF",
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
    marginTop: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});

export default SignUp;
