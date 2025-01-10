import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const WaterProvidersPage = () => {
  const [activeTab, setActiveTab] = useState(""); // Active tab tracking
  const navigation = useNavigation();

  const providers = [
    {
      name: "Nước Bến Thành",
      description: "Tất cả quận, huyện của TP.HCM",
      logo: require("./assets/benThanh.png"),
    },
    {
      name: "Nước Thừa Thiên - Huế",
      description: "Áp dụng cho khu vực tỉnh Thừa Thiên - Huế",
      logo: require("./assets/thuaThienHue.png"),
    },
    {
      name: "Nước Hải Phòng",
      description: "Áp dụng cho khu vực tỉnh Hải Phòng",
      logo: require("./assets/haiPhong.png"),
    },
    {
      name: "Nước Hà Nội",
      description: "Tất cả quận, huyện của Hà Nội",
      logo: require("./assets/haNoi.png"),
    },
    {
      name: "Nước Nông Thôn Bến Tre",
      description: "Áp dụng cho khu vực tỉnh Bến Tre",
      logo: require("./assets/benTre.png"),
    },
    {
      name: "Nước Bình Thuận",
      description: "Áp dụng cho khu vực tỉnh Bình Thuận",
      logo: require("./assets/binhThuan.png"),
    },
    {
      name: "Nước Bạc Liêu",
      description: "Áp dụng cho khu vực tỉnh Bạc Liêu",
      logo: require("./assets/bacLieu.png"),
    },
    {
      name: "Nước Tuyên Quang",
      description: "Áp dụng cho khu vực tỉnh Tuyên Quang",
      logo: require("./assets/tuyenQuang.png"),
    },
    {
      name: "Nước Kon Tum",
      description: "Áp dụng cho khu vực tỉnh Kon Tum",
      logo: require("./assets/konTum.png"),
    },
    {
      name: "Nước Quảng Ngãi",
      description: "Áp dụng cho khu vực tỉnh Quảng Ngãi",
      logo: require("./assets/quangNgai.png"),
    },
    {
      name: "Nước Yên Bái",
      description: "Áp dụng cho khu vực tỉnh Yên Bái",
      logo: require("./assets/yenBai.png"),
    },
    {
      name: "Nước Tiền Giang",
      description: "Áp dụng cho khu vực tỉnh Tiền Giang",
      logo: require("./assets/tienGiang.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Chọn nhà cung cấp nước" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Tất cả các nhà cung cấp nước</Text>
        {providers.map((provider, index) => (
          <TouchableOpacity
            key={index}
            style={styles.providerCard}
            onPress={() => navigation.navigate("BillInputPage1", { provider })}
          >
            <Image source={provider.logo} style={styles.providerLogo} />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>{provider.name}</Text>
              <Text style={styles.providerDescription}>
                {provider.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
  scrollViewContent: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  providerCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  providerLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },
  providerInfo: {
    flex: 1,
  },
  providerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  providerDescription: {
    fontSize: 14,
    color: "#777",
  },
});

export default WaterProvidersPage;
