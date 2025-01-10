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
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const EducationProviderPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Current active tab

  const providers = [
    {
      name: "Đại học Quốc gia TP.HCM",
      description: "",
      logo: require("./assets/vnu.png"),
    },
    {
      name: "Cao đẳng kỹ thuật Cao Thắng",
      description: "",
      logo: require("./assets/cao_thang.png"),
    },
    {
      name: "Trường Đại học Kinh tế - Tài chính TP.HCM",
      description: "",
      logo: require("./assets/uef.png"),
    },
    {
      name: "Trường Đại học Giao Thông Vận Tải TP.HCM",
      description: "",
      logo: require("./assets/uth.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Chọn nhà cung cấp" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Tất cả các trường, trung tâm</Text>
        {providers.map((provider, index) => (
          <TouchableOpacity
            key={index}
            style={styles.providerCard}
            onPress={() => navigation.navigate("BillInputPage2")}
          >
            <Image source={provider.logo} style={styles.providerLogo} />
            <View style={styles.providerInfo}>
              <Text style={styles.providerName}>{provider.name}</Text>
              {provider.description ? (
                <Text style={styles.providerDescription}>
                  {provider.description}
                </Text>
              ) : null}
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

export default EducationProviderPage;
