import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigation } from "@react-navigation/native";

const GiftPage = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(
    require("./assets/ImageTangQua.png")
  );
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Tặng quà" />

      {/* Hình ảnh quà tặng */}
      <View style={styles.imageContainer}>
        <Image source={selectedImage} style={styles.giftImage} />
      </View>

      {/* Số tiền chuyển */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Số tiền chuyển</Text>
        <Text style={styles.amountValue}>50.000đ</Text>
      </View>

      {/* Biểu tượng chủ đề */}
      <View style={styles.iconRow}>
        {[
          { icon: "🌌", label: "Space" },
          { icon: "⭐", label: "Star" },
          { icon: "🎨", label: "Art" },
          { icon: "🎧", label: "Music" },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.iconButton}
            onPress={() =>
              setSelectedImage(require(`./assets/ImageTangQua.png`))
            }
          >
            <Text style={styles.icon}>{item.icon}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Nút Tiếp tục */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("GiftPage1")}
      >
        <Text style={styles.continueButtonText}>Tiếp tục</Text>
      </TouchableOpacity>

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
    marginVertical: 20,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 100,
  },
  giftImage: {
    width: 280,
    height: 180,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#FF4081",
  },
  amountContainer: {
    alignItems: "center",
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
    width: "90%",
    alignSelf: "center",
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
    width: "90%",
    alignSelf: "center",
    marginVertical: 20,
    marginBottom: 300,
  },
  iconButton: {
    backgroundColor: "#F3F3F3",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
  continueButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 20,
    alignItems: "center",
    marginTop: -100,
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default GiftPage;
