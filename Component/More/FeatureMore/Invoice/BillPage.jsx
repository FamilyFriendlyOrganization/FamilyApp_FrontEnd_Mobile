import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";

const BillPage = () => {
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  const [activeCategory, setActiveCategory] = useState("Nước");

  const categories = ["Điện", "Nước", "Mạng", "Học phí"];

  const billData = {
    Điện: [],
    Nước: [
      {
        billId: "26122004",
        amount: "500,123 đ",
        address: "Thừa Thiên Huế",
      },
    ],
    Mạng: [],
    "Học phí": [],
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Hóa đơn" />

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Notification */}
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Bạn đang có 1 hóa đơn nước cần thanh toán
          </Text>
        </View>

        {/* Customer Info */}
        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Thông tin khách hàng</Text>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Tên khách hàng</Text>
            <Text style={styles.value}>Nguyễn Văn A</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Mã số khách hàng</Text>
            <Text style={styles.value}>123456789JQ</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Nơi đăng ký dịch vụ</Text>
            <Text style={styles.value}>Thừa Thiên Huế</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Địa chỉ</Text>
            <Text style={styles.value}>Thành phố Huế, Thừa Thiên Huế</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Phương thức thanh toán</Text>
            <Text style={styles.value}>Tài khoản ngân hàng</Text>
          </View>
        </View>

        {/* Category Selection */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                activeCategory === category && styles.activeCategoryButton,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === category && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Bills Section */}
        <View style={styles.billsContainer}>
          {billData[activeCategory].length > 0 ? (
            billData[activeCategory].map((bill, index) => (
              <View key={index} style={styles.billItem}>
                <Text style={styles.billInfo}>
                  <Text style={styles.billLabel}>Mã hóa đơn:</Text>{" "}
                  {bill.billId}
                </Text>
                <Text style={styles.billInfo}>
                  <Text style={styles.billLabel}>Số tiền:</Text> {bill.amount}
                </Text>
                <Text style={styles.billInfo}>
                  <Text style={styles.billLabel}>Địa chỉ:</Text> {bill.address}
                  {"  "}
                  <Text style={styles.paymentLink}>Nhấn để thanh toán!</Text>
                </Text>
              </View>
            ))
          ) : (
            <Text style={styles.noBillsText}>
              Không có hóa đơn cần thanh toán!
            </Text>
          )}
        </View>
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
  notification: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  notificationText: {
    fontSize: 18,
    color: "#333",
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
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: "#777",
  },
  value: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  categoryScroll: {
    marginVertical: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategoryButton: {
    backgroundColor: "#FF8C00",
  },
  categoryText: {
    fontSize: 14,
    color: "#777",
  },
  activeCategoryText: {
    color: "#FFFFFF",
  },
  billsContainer: {
    marginTop: 15,
  },
  billItem: {
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  billInfo: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  billLabel: {
    fontWeight: "bold",
  },
  paymentLink: {
    color: "#FF8C00",
    fontWeight: "bold",
  },
  noBillsText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginTop: 20,
  },
});

export default BillPage;
