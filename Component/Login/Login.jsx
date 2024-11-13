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
// Import images
import backgroundImage from "../../assets/Login/background.png";
import facebook from "../../assets/Login/facebook.png";
import github from "../../assets/Login/github.png";
import googleLogo from "../../assets/Login/google.png";
import key from "../../assets/Login/key.png";
import mail from "../../assets/Login/mail.png";
import xicon from "../../assets/Login/xicon.png";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  // State lưu trữ thông tin username và mật khẩu
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  // Hàm xử lý đăng nhập
  const handleLogin = async () => {
    const payload = {
      username,
      password,
    };

    try {
      const response = await fetch("http://10.0.2.2:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert("Thành công", "Đăng nhập thành công!");
        console.log("User data:", data); // Bạn có thể lưu thông tin token tại đây
        navigation.navigate("Home");
      } else {
        const errorData = await response.json();
        Alert.alert("Lỗi", errorData.message || "Đăng nhập thất bại.");
      }
    } catch (error) {
      console.error("Fetch Error:", error.message);
      Alert.alert("Lỗi", "Không thể kết nối đến server!");
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Đăng nhập</Text>

        {/* Google logo */}
        <Image
          source={googleLogo}
          style={styles.googleLogo}
          resizeMode="contain"
        />

        {/* username/SĐT input */}
        <View style={styles.inputContainer}>
          <Image source={mail} style={styles.icon} resizeMode="contain" />
          <TextInput
            placeholder="Nhập username/SĐT"
            style={styles.input}
            value={username}
            onChangeText={setusername}
          />
        </View>

        {/* Mật khẩu input */}
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

        {/* Ghi nhớ tôi và Quên mật khẩu */}
        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Ghi nhớ tôi</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        {/* Nút Tiếp tục */}
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Tiếp tục</Text>
        </TouchableOpacity>

        {/* Tạo tài khoản */}
        <View style={styles.registerContainer}>
          <Text>Chưa có tài khoản? </Text>
          <TouchableOpacity>
            <Text style={styles.registerText}>Tạo ngay</Text>
          </TouchableOpacity>
        </View>

        {/* Đăng nhập bằng mạng xã hội */}
        <Text style={styles.socialLoginText}>Đăng nhập bằng:</Text>
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
    color: "#FF0066", // Màu hồng cho tiêu đề
    marginBottom: 20,
  },
  googleLogo: {
    width: 200, // Tăng kích thước chiều rộng
    height: 60, // Tăng kích thước chiều cao cho tỷ lệ hợp lý
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
    paddingHorizontal: 10,
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
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  rememberText: {
    fontSize: 14,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "red",
  },
  submitButton: {
    backgroundColor: "#7B61FF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  registerText: {
    color: "#7B61FF",
    fontWeight: "bold",
  },
  socialLoginText: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
});

export default Login;
