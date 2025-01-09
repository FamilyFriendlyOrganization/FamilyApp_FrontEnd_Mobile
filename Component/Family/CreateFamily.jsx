import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const CreateFamily = () => {
  const [selectedFamily, setSelectedFamily] = React.useState("");
  const navigation = useNavigation();

  const handleTiepTuc = async () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/Family/background.png")}
        style={styles.backgroundImage}
      />

      {/* Overlay Box */}
      <View style={styles.overlayBox}>
        <Text style={styles.greeting}>Xin chào, Nguyễn Văn A</Text>
        <Text style={styles.question}>Ngày hôm nay của bạn thế nào??</Text>
        <Text style={styles.infoText}>
          Bạn đang chưa có gia đình, hãy tạo hoặc tham gia ngay nhé!
        </Text>
        {/* Hai nút Tham gia và Tạo */}
        <View style={styles.buttonContainer}>
          {/* Nút Tham gia */}
          <TouchableOpacity
            style={[styles.actionButton, styles.joinButton]}
            onPress={() => navigation.navigate("Join")} // Điều hướng tới trang tham gia
          >
            <Text style={styles.buttonText}>Tham gia</Text>
          </TouchableOpacity>

          {/* Nút Tạo */}
          <TouchableOpacity
            style={[styles.actionButton, styles.createButton]}
            onPress={() => navigation.navigate("Home")} // Điều hướng tới trang tạo mới
          >
            <Text style={styles.buttonText}>Tạo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlayBox: {
    width: 333,
    height: 420,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "semibold",
    marginBottom: 10,
    color: "black",
  },
  question: {
    fontSize: 30,
    fontStyle: "normal",
    color: "gray",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    color: "black",
    textAlign: "left",
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    marginBottom: 25,
  },
  picker: {
    height: 40,
    color: "gray",
    width: "100%",
  },
  continueButton: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row", // Sắp xếp các nút theo hàng ngang
    justifyContent: "space-between", // Tạo khoảng cách giữa các nút
    width: "100%",
    marginTop: 20,
  },
  actionButton: {
    flex: 1, // Chia đều không gian cho mỗi nút
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  joinButton: {
    backgroundColor: "#2196F3", // Màu xanh cho nút Tham gia
  },
  createButton: {
    backgroundColor: "#6A0DAD", // Màu tím cho nút Tạo
  },
  buttonText: {
    color: "#FFF", // Màu chữ trắng
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreateFamily;
