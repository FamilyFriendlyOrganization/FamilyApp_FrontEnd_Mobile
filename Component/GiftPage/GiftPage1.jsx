import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const GiftPage1 = () => {
  const [message, setMessage] = useState(
    "Một ngày thật năng động và vui vẻ nhé bạn yêu!"
  );
  const [sender, setSender] = useState("Từ Huỳnh Minh Triết");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tặng quà</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Feather name="x" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Hình ảnh quà tặng */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://via.placeholder.com/300x200.png?text=Gift+Image",
          }}
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
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Chỉnh sửa lời nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Gửi quà</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 40,
    backgroundColor: "#7C3AED",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    position: "absolute",
    top: 39,
    left: 50,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  giftImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
    borderColor: "#FF6F61",
    borderWidth: 4,
  },
  messageBox: {
    backgroundColor: "#FF6F61",
    padding: 8,
    borderRadius: 5,
    marginTop: -20,
    alignItems: "center",
    width: "80%",
  },
  messageText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
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
    marginTop: 30,
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
