import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const BillInputPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Current active tab
  const [studentId, setStudentId] = useState(""); // State for student ID input

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Hóa đơn" />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Provider Information */}
        <View style={styles.providerInfo}>
          <Image
            source={require("./assets/vnu.png")} // Replace with your image path
            style={styles.providerLogo}
          />
          <Text style={styles.providerName}>Đại học quốc gia TP.HCM</Text>
          <Text style={styles.providerDescription}>Áp dụng toàn quốc</Text>
        </View>

        {/* Input Section */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Mã số sinh viên</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Cam on vi daden...."
            value={studentId}
            onChangeText={setStudentId}
          />
        </View>

        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/school.png")} // Replace with your image path
            style={styles.schoolImage}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate("BillPage")}
        >
          <Text style={styles.continueButtonText}>Tiếp tục</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  providerInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  providerLogo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  providerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  providerDescription: {
    fontSize: 14,
    color: "#777",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    color: "#333",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  schoolImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  continueButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BillInputPage;
