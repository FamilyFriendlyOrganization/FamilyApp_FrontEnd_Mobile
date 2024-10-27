import React, { useState } from "react";
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
import backgroundImage from "../../assets/Login/background.png";
import mainBackground from "../../assets/Login/main.png";
import xicon from "../../assets/SignUp/xicon.png";
import { REGISTER_URL } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [displayname, setDisplayName] = useState("");
  const navigation = useNavigation(); 

  const handleSignUp = async () => {
    const accountInfo = {
      username: username,
      password: password,
      email: email,
      accountStatus: 1,
      displayname: displayname,
    };

    try {
      const response = await axios.post(`${REGISTER_URL}`, accountInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        alert("Registration successful!");
        navigation.navigate("Login"); 
      } else {
        alert(`Registration failed: ${response.data}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleSubmit = async () => {
    await handleSignUp();
  };

  const handleGoBack = () => {
    navigation.navigate("Home"); 
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* Greeting section */}
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
          <TextInput
            placeholder="Nhập tên tài khoản"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={key} style={styles.icon} resizeMode="contain" />
          <TextInput
            placeholder="Nhập mật khẩu"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={mail} style={styles.icon} resizeMode="contain" />
          <TextInput
            placeholder="Nhập email của bạn"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image source={heart} style={styles.icon} resizeMode="contain" />
          <TextInput
            placeholder="Nhập tên bạn muốn dùng"
            style={styles.input}
            value={displayname}
            onChangeText={setDisplayName}
          />
        </View>

        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadText}>Tải ảnh ngay!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Tiếp tục</Text>
        </TouchableOpacity>

        {/* Social icons */}
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
