import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const InvoicePage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Hóa đơn" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Electricity Provider Section */}
        <View style={styles.providerContainer}>
          <Image
            source={require("./assets/electricity.png")}
            style={styles.providerLogo}
          />
          <View>
            <Text style={styles.providerName}>Điện lực Toàn quốc</Text>
            <Text style={styles.providerDescription}>
              Áp dụng cho tất cả các tỉnh thành
            </Text>
          </View>
        </View>

        {/* Customer Information Section */}
        <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
        <TextInput
          style={styles.input}
          placeholder="Mã khách hàng"
          placeholderTextColor="#999999"
        />
        <Text style={styles.helperText}>Cảm ơn vì đã đến....</Text>

        {/* Instructions Section */}
        <Text style={styles.sectionTitle}>Hướng dẫn lấy mã</Text>
        <View style={styles.instructionsContainer}>
          <Image
            source={require("./assets/invoice_sample.png")}
            style={styles.sampleImage}
          />
        </View>

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
  scrollContent: {
    padding: 15,
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
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 15,
  },
  providerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  providerDescription: {
    fontSize: 14,
    color: "#555555",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#333333",
    marginBottom: 5,
  },
  helperText: {
    fontSize: 14,
    color: "#999999",
    marginBottom: 20,
  },
  instructionsContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  sampleImage: {
    width: 250,
    height: 350,
    resizeMode: "contain",
  },
  continueButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 30,
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default InvoicePage;
