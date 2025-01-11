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
import googleLogo from "../../assets/Login/google.png";
import key from "../../assets/Login/key.png";
import mail from "../../assets/Login/mail.png";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../useAuth";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const fakeUsers = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" },
];
const Login = () => {
  // State lưu trữ thông tin username và mật khẩu
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    const userExists = fakeUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      Alert.alert("Thành công", "Đăng nhập thành công!");
      navigation.navigate("SelectFamily");
    } else {
      Alert.alert("Lỗi", "Sai tài khoản hoặc mật khẩu. Vui lòng thử lại!");
    }
  };
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.formContainer}>
        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Welcome")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity> */}
        <Text style={styles.formTitle}>Đăng nhập</Text>
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
          {/* Checkbox */}
          <TouchableOpacity
            style={[
              styles.checkbox,
              { backgroundColor: rememberMe ? "#7B61FF" : "white" }, // Đổi màu khi chọn
            ]}
            onPress={() => setRememberMe(!rememberMe)} // Toggle trạng thái
          >
            {rememberMe && (
              <AntDesign name="check" size={16} color="white" /> // Dấu tích
            )}
          </TouchableOpacity>

          {/* Văn bản "Ghi nhớ tôi" ngay cạnh checkbox */}
          <Text style={styles.rememberText}>Ghi nhớ tôi</Text>
        </View>

        {/* Nút Tiếp tục */}
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
          <Text style={styles.submitButtonText}>Tiếp tục</Text>
        </TouchableOpacity>

        {/* Tạo tài khoản */}
        <View style={styles.registerContainer}>
          <Text style={styles.register}>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.registerText}>Đăng ký ngay</Text>
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
    flexDirection: "row", // Hiển thị theo hàng ngang
    alignItems: "center", // Căn giữa theo chiều dọc
    justifyContent: "space-between", // Cách đều giữa các phần tử
    width: "100%",
    marginBottom: 20,
  },
  checkbox: {
    position: "relative",
    marginLeft: 10,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5, // Khoảng cách nhỏ giữa checkbox và chữ
  },
  rememberText: {
    position: "relative",
    left: -180,
    fontSize: 14,
    color: "#333",
    marginRight: 20, // Giữ khoảng cách với nút "Quên mật khẩu"
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
  register: {
    fontSize: 20,
  },
  registerText: {
    color: "#7B61FF",
    fontWeight: "bold",
    fontSize: 20,
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

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Login;
