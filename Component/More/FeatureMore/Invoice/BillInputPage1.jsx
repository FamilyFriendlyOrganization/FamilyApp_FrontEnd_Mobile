import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const BillInputPage = () => {
  const [customerCode, setCustomerCode] = useState("");
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Hóa đơn" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Provider Information */}
        <View style={styles.providerInfoContainer}>
          <Image
            source={require("./assets/thuaThienHue.png")} // Replace with the appropriate logo
            style={styles.providerLogo}
          />
          <View>
            <Text style={styles.providerName}>Nước Thừa Thiên - Huế</Text>
            <Text style={styles.providerDescription}>
              Áp dụng cho khu vực tỉnh Thừa Thiên - Huế
            </Text>
          </View>
        </View>

        {/* Customer Information */}
        <View style={styles.customerInfoContainer}>
          <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
          <TextInput
            style={styles.input}
            placeholder="Mã khách hàng"
            value={customerCode}
            onChangeText={setCustomerCode}
            placeholderTextColor="#BDBDBD"
          />
        </View>

        {/* Guide */}
        <Text style={styles.sectionTitle}>Hướng dẫn lấy mã</Text>
        <Image
          source={require("./assets/sample-bill.png")} // Replace with the appropriate image
          style={styles.sampleImage}
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
  providerInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 10,
  },
  providerLogo: {
    width: 50,
    height: 50,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    color: "#333333",
    backgroundColor: "#FFFFFF",
  },
  sampleImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BillInputPage;
