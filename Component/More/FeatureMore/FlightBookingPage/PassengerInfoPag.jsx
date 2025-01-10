import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const PassengerInfoPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Thông tin hành khách" />

      {/* Main Content */}
      <ScrollView style={styles.scrollView}>
        {/* Flight Information */}
        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Thông tin chuyến bay</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Ngày bay</Text>
            <Text style={styles.value}>T6, 03 tháng 01, 2025</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Thời gian bay</Text>
            <Text style={styles.value}>2 tiếng 20p (12:30 - 14:50)</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Chiều đi</Text>
            <Text style={styles.value}>SGN → HAN</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Hạng vé</Text>
            <Text style={styles.value}>Vietnam Airlines - Thương gia</Text>
          </View>
        </View>

        {/* Passenger Information */}
        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Thông tin hành khách</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Tên khách hàng</Text>
            <Text style={styles.value}>Nguyễn Văn A</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Mã số khách hàng</Text>
            <Text style={styles.value}>123456789JQ</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Thời gian mua vé</Text>
            <Text style={styles.value}>T5, 02 tháng 01, 2025</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Địa chỉ</Text>
            <Text style={styles.value}>Thành phố Huế, Thừa Thiên Huế</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Phương thức thanh toán</Text>
            <Text style={styles.value}>Tài khoản ngân hàng</Text>
          </View>
        </View>

        {/* Total Amount */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Tổng tiền</Text>
          <Text style={styles.totalValue}>8.890.125đ</Text>
        </View>

        {/* Payment Button */}
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate("TransactionResultPage")}
        >
          <Text style={styles.paymentButtonText}>Thanh toán</Text>
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
  scrollView: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  infoBox: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#555555",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 200,
    paddingHorizontal: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555555",
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF4081",
  },
  paymentButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 30,
  },
  paymentButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PassengerInfoPage;
