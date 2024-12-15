import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";

const TransactionResultPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chuyển tiền</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Feather name="x" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Nội dung chính */}
      <View style={styles.content}>
        <Text style={styles.title}>Kết quả giao dịch</Text>

        {/* Icon và trạng thái giao dịch */}
        <View style={styles.statusContainer}>
          <Ionicons name="checkmark-circle" size={64} color="#4CAF50" />
          <Text style={styles.successText}>Giao dịch thành công</Text>
          <Text style={styles.amount}>30.000đ</Text>
        </View>

        {/* Chi tiết giao dịch */}
        <View style={styles.detailsContainer}>
          <Text style={styles.receiver}>
            Nguyễn Văn A <Text style={styles.subText}>đã nhận tiền</Text>
          </Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Thời gian thanh toán</Text>
            <Text style={styles.detailValue}>10:24 - 01/12/2024</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Chi tiết giao dịch</Text>
            <Text style={[styles.detailValue, styles.link]}>123456789a</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Tài khoản/thẻ</Text>
            <Text style={styles.detailValue}>Vietcombank</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phí giao dịch</Text>
            <Text style={styles.detailValue}>Miễn phí</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Phân loại chi tiêu</Text>
            <Text style={styles.detailValue}>Ăn uống</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    paddingTop: 40,
    backgroundColor: "#7C3AED",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    position: "absolute",
    top: 39,
    left: 50,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  statusContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#4CAF50",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  detailsContainer: {
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    padding: 16,
    elevation: 2,
  },
  receiver: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  subText: {
    fontWeight: "normal",
    color: "#757575",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  detailLabel: {
    color: "#757575",
    fontSize: 14,
  },
  detailValue: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    color: "#2196F3",
  },
});

export default TransactionResultPage;
