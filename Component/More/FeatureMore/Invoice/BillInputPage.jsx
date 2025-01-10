import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const BillInputPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Hóa đơn" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Provider Information */}
        <View style={styles.providerContainer}>
          <Image
            source={require("./assets/vnpt.png")}
            style={styles.providerLogo}
          />
          <View>
            <Text style={styles.providerName}>VNPT</Text>
            <Text style={styles.providerDescription}>Áp dụng toàn quốc</Text>
          </View>
        </View>

        {/* Customer Info */}
        <View style={styles.customerInfoContainer}>
          <Text style={styles.label}>Thông tin khách hàng</Text>
          <TextInput
            style={styles.input}
            placeholder="Mã khách hàng"
            placeholderTextColor="#999"
          />
        </View>

        {/* Instructions */}
        <Text style={styles.instructionsTitle}>Hướng dẫn lấy mã</Text>
        <Image
          source={require("./assets/invoice.png")}
          style={styles.instructionsImage}
        />

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("BillPage")}
        >
          <Text style={styles.continueButtonText}>Tiếp tục</Text>
        </TouchableOpacity>
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
    paddingBottom: 20,
  },
  providerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  providerLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  providerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  providerDescription: {
    fontSize: 14,
    color: "#777777",
  },
  customerInfoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  instructionsImage: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BillInputPage;
