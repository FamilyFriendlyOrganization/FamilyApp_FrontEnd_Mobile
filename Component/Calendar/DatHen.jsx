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

const DatHen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("calendar"); // Tab hiện đang được chọn
  const [title, setTitle] = useState(""); // Chủ đề
  const [content, setContent] = useState(""); // Nội dung

  const handleSave = () => {
    console.log("Chủ đề:", title);
    console.log("Nội dung:", content);
    alert("Cuộc hẹn đã được lưu!");
    navigation.navigate("AppCalendar");
  };

  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      {/* Phần Header */}
      <Header title="Nội dung đặt hẹn" />

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

        {/* Chủ đề */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Chủ đề</Text>
          <TextInput
            style={styles.input}
            placeholder="Chúc mừng sinh nhật Triết"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Nội dung */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nội dung</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Nhập nội dung ở đây..."
            value={content}
            onChangeText={setContent}
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Nút Lưu cuộc hẹn */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Lưu cuộc hẹn</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,
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
  textArea: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 8,
    fontSize: 16,
    height: 100,
    textAlignVertical: "top", // Đảm bảo text bắt đầu từ trên cùng
  },
  saveButton: {
    backgroundColor: "#6A0DAD",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DatHen;
