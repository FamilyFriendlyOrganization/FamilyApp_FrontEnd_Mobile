import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const Profile = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("profile"); // Tab hiện đang được chọn
  const [showPassword, setShowPassword] = useState(false); // Kiểm soát hiển thị mật khẩu

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      {/* Phần Header */}
      <Header title="Chỉnh sửa hồ sơ" />

      {/* Phần Main */}
      <View style={styles.mainContainer}>
        {/* Hình đại diện */}
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/Profile/Main/avatar.png")}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.cameraIconContainer}>
            <Image
              source={require("../../assets/Profile/Main/camera.png")}
              style={styles.iconcamera}
            />
          </TouchableOpacity>
        </View>
        {/* Thêm tên người dùng */}
        <Text style={styles.userName}>Vũ Trí</Text>
        {/* Các nút thay đổi hồ sơ cá nhân và đăng xuất */}
        <View style={styles.buttonContainer}>
          {/* Nút Hồ sơ cá nhân */}
          <TouchableOpacity
            style={[styles.actionButton, styles.profileButton]}
            onPress={() => navigation.navigate("Profile")} // Điều hướng đến trang Hồ sơ cá nhân
          >
            <Text style={styles.buttonText}>Hồ sơ cá nhân</Text>
          </TouchableOpacity>

          {/* Nút Đăng xuất */}
          <TouchableOpacity
            style={[styles.actionButton, styles.logoutButton]}
            onPress={() => {
              // Xử lý logic đăng xuất
              console.log("User logged out");
              navigation.navigate("Login"); // Điều hướng đến trang Login
            }}
          >
            <Text style={styles.buttonText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Phần Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    top: 50,
  },
  returnButton: {
    width: 30,
    height: 30,
    left: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  avatarContainer: {
    position: "relative",
    marginTop: 30,
    marginBottom: 30,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  cameraIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
  iconcamera: {
    width: 30,
    height: 30,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5, // Giữ lại để có bo góc
    paddingHorizontal: 8,
  },
  saveButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  iconeye: {
    width: 30,
    height: 30,
    left: 280,
  },
  activeIcon: {
    tintColor: "blue",
  },
  inputpassword: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 4,
  },

  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // Màu nền trắng cho khung
    borderRadius: 5,
    borderWidth: 1, // Thêm viền nếu cần
    borderColor: "#ddd",
    paddingRight: 10, // Thêm padding bên phải
  },

  inputpassword: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },

  eyeIconContainer: {
    justifyContent: "center",
    padding: 10, // Padding để icon không quá sát biên
  },

  iconeye: {
    width: 20,
    height: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  actionButton: {
    width: "80%",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 30,
  },
  profileButton: {
    backgroundColor: "#6A0DAD", // Màu tím cho nút Hồ sơ cá nhân
  },
  logoutButton: {
    backgroundColor: "#FF0000", // Màu đỏ cho nút Đăng xuất
  },
  buttonText: {
    color: "#FFF", // Màu chữ trắng
    fontSize: 24,
    fontWeight: "bold",
  },
  userName: {
    fontSize: 40, // Cỡ chữ
    fontWeight: "bold", // Chữ đậm
    color: "black", // Màu chữ
    marginTop: 0, // Khoảng cách phía trên
    marginBottom: 30,
  },
});

export default Profile;
