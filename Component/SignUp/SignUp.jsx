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
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

// Import hình ảnh
import backgroundImage from "../../assets/Login/background.png";
import facebook from "../../assets/SignUp/facebook.png";
import github from "../../assets/SignUp/github.png";
import heart from "../../assets/SignUp/Heart.png";
import key from "../../assets/SignUp/key.png";
import mail from "../../assets/SignUp/mail.png";
import user from "../../assets/SignUp/user.png";

const fakeUsers = [
  { username: "user1", email: "user1@example.com" },
  { username: "user2", email: "user2@example.com" },
];

const SignUp = () => {
  const navigation = useNavigation();

  // State quản lý dữ liệu form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  // Hàm xử lý đăng ký
  const handleRegister = () => {
    // Kiểm tra trường không được bỏ trống
    if (!username || !password || !email || !displayName) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ tất cả các trường.");
      return;
    }

    // Kiểm tra xem username hoặc email đã tồn tại chưa
    const userExists = fakeUsers.some(
      (user) => user.username === username || user.email === email
    );

    if (userExists) {
      Alert.alert(
        "Lỗi",
        "Tên tài khoản hoặc email đã tồn tại. Vui lòng nhập lại!"
      );
    } else {
      // Giả lập thêm tài khoản vào danh sách
      fakeUsers.push({ username, email });

      // Hiển thị thông báo đăng ký thành công
      Alert.alert("Thành công", "Đăng ký tài khoản thành công!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("Login"), // Chuyển đến màn hình Login
        },
      ]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.background}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        {/* Phần chứa lời chào */}
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
            onPress={handleRegister}
          >
            <Text style={styles.submitButtonText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  greetingContainer: {
    alignItems: "center",
    marginTop: 40, // Đẩy phần chào xuống
    marginBottom: 20, // Khoảng cách phía dưới
  },
  greetingBox: {
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    marginLeft: 300,
  },
  greetingText: {
    color: "#7B61FF",
    fontWeight: "bold",
    fontSize: 24,
  },
  greetingSubText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 100,
    marginLeft: 300,
  },
  formContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20, // Đẩy form xuống
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backText: {
    color: "#007BFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  formTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#7B61FF",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "100%",
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
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignUp;
