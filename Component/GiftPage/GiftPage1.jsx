import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;

const GiftPage1 = () => {
  const [message, setMessage] = useState(
    "Một ngày thật năng động và vui vẻ nhé bạn yêu!"
  );
  const [sender, setSender] = useState("Từ Huỳnh Minh Triết");
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Tặng quà" />

      {/* Hình ảnh quà tặng */}
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/ImageTangQua.png")}
          style={styles.giftImage}
          resizeMode="contain"
        />
        <View style={styles.messageBox}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </View>

      {/* Tên người gửi */}
      <Text style={styles.senderText}>{sender}</Text>

      {/* Nút hành động */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("GiftPage")}
        >
          <Text style={styles.editButtonText}>Chỉnh sửa số tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => navigation.navigate("TransactionResultPage")}
        >
          <Text style={styles.sendButtonText}>Gửi quà</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
    marginTop: 80,
  },
  giftImage: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.5,
    borderRadius: 10,
    borderColor: "#FF6F61",
    borderWidth: 4,
  },
  messageBox: {
    backgroundColor: "#FF6F61",
    padding: 10,
    borderRadius: 5,
    marginTop: -20,
    alignItems: "center",
    width: "90%",
  },
  messageText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  senderText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 50,
  },
  editButton: {
    backgroundColor: "#F3F3F3",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  editButtonText: {
    color: "#333",
    fontWeight: "bold",
  },
  sendButton: {
    backgroundColor: "#E91E63",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default GiftPage1;
