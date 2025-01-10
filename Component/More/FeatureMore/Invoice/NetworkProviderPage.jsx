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

const NetworkProviderPage = () => {
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  const navigation = useNavigation(); // React Navigation hook

  const providers = [
    {
      name: "VNPT",
      description: "Áp dụng toàn quốc",
      logo: require("./assets/vnpt.png"),
    },
    {
      name: "FPT",
      description: "Áp dụng toàn quốc",
      logo: require("./assets/fpt.png"),
    },
    {
      name: "Viettel",
      description: "Áp dụng toàn quốc",
      logo: require("./assets/viettel.png"),
    },
    {
      name: "Dịch vụ internet và truyền hình SCTV",
      description: "Áp dụng toàn quốc",
      logo: require("./assets/sctv.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Chọn nhà cung cấp" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Tất cả các nhà cung cấp mạng</Text>
        {providers.map((provider, index) => (
          <TouchableOpacity
            key={index}
            style={styles.providerCard}
            onPress={() => navigation.navigate("BillInputPage", { provider })}
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

export default NetworkProviderPage;
