import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";

const GiftPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://via.placeholder.com/300" // Hình mặc định
  );

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

      {/* Chọn người nhận */}
      <View style={styles.selectRecipient}>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.selectText}>Chọn người nhận quà</Text>
        </TouchableOpacity>
        <Text style={styles.contactText}>Danh bạ</Text>
      </View>

      {/* Hình ảnh quà tặng */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedImage }}
          style={styles.giftImage}
          resizeMode="contain"
        />
      </View>

      {/* Số tiền chuyển */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Số tiền chuyển</Text>
        <Text style={styles.amountValue}>50.000đ</Text>
      </View>

      {/* Biểu tượng chủ đề */}
      <View style={styles.iconRow}>
        {[
          { icon: "planet", label: "Space" },
          { icon: "leaf", label: "Nature" },
          { icon: "pen-fancy", label: "Creative" },
          { icon: "headphones", label: "Music" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconButton}
            onPress={() =>
              setSelectedImage(
                `https://via.placeholder.com/300?text=${item.label}`
              )
            }
          >
            <FontAwesome5 name={item.icon} size={24} color="#7C3AED" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Nút Viết lời nhắn */}
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Viết lời nhắn</Text>
      </TouchableOpacity>
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
  selectRecipient: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
    marginHorizontal: 20,
  },
  selectButton: {
    backgroundColor: "#F3F3F3",
    padding: 10,
    borderRadius: 8,
  },
  selectText: {
    color: "#7C3AED",
    fontWeight: "bold",
  },
  contactText: {
    color: "#E91E63",
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  giftImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderColor: "#E0E0E0",
    borderWidth: 2,
  },
  amountContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  amountLabel: {
    color: "#757575",
    fontSize: 16,
  },
  amountValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  iconButton: {
    backgroundColor: "#F3F3F3",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  messageButton: {
    backgroundColor: "#E91E63",
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 20,
    alignItems: "center",
  },
  messageButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GiftPage;
