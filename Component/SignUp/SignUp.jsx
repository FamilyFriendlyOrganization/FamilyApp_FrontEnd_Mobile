import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import "react-native-get-random-values"; // Import thư viện này trước
import { v4 as uuidv4 } from "uuid";
import { AntDesign } from "@expo/vector-icons";

// Import hình ảnh
import backgroundImage from "../../assets/Login/background.png";
import facebook from "../../assets/SignUp/facebook.png";
import github from "../../assets/SignUp/github.png";
import heart from "../../assets/SignUp/Heart.png";
import key from "../../assets/SignUp/key.png";
import mail from "../../assets/SignUp/mail.png";
import user from "../../assets/SignUp/user.png";
import xicon from "../../assets/SignUp/xicon.png";

const SignUp = () => {
  const navigation = useNavigation();

  // State quản lý dữ liệu form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Hàm xử lý đăng ký
  const handleRegister = async () => {
    const accountId = uuidv4(); // Tạo accountId ngẫu nhiên
    const payload = {
      username,
      password,
      email,
      displayName,
      accountId,
      accountStatus: 0,
    };

    try {
      const response = await fetch("http://10.0.2.2:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        Alert.alert("Thành công", "Đăng ký tài khoản thành công!", [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]);
      } else {
        const errorData = await response.json();
        Alert.alert("Lỗi", errorData.message || "Đăng ký thất bại.");
      }
    } catch (error) {
      console.error("Fetch Error:", error.message);
      Alert.alert("Lỗi", "Không thể kết nối đến server!");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      {/* Phần chứa lời chào */}
      <View style={styles.greetingContainer}>
        <View style={styles.greetingBox}>
          <Text style={styles.greetingText}>Chào</Text>
        </View>
        <Text style={styles.greetingSubText}>Bắt đầu nào!</Text>
      </View>

      {/* Form đăng ký */}

      <View style={styles.formContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="arrowleft" size={20} color="#007BFF" />
          <Text style={styles.backText}>Đã có tài khoản, đăng nhập ngay</Text>
        </TouchableOpacity>
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
            value={displayName}
            onChangeText={setDisplayName}
          />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.submitButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
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
  backButton: {
    position: "relative",
    flexDirection: "row", // Hiển thị icon và text theo hàng ngang
    alignItems: "center",
  },
  backText: {
    color: "#007BFF", // Màu xanh giống trong hình
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5, // Khoảng cách giữa icon và text
  },
  formTitle: {
    fontSize: 50,
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
  submitButton: {
    backgroundColor: "#7B61FF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
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
