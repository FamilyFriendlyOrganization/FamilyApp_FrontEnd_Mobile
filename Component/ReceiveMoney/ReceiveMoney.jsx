import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const ReceiveMoneyPage = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showStats, setShowStats] = useState(false);

  const toggleStatsVisibility = () => {
    setShowStats(!showStats);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Nhận tiền" />

      {/* Main Content in ScrollView */}
      <ScrollView contentContainerStyle={styles.mainContent}>
        {/* QR nhận tiền */}
        <View style={styles.qrContainer}>
          <Image
            source={require("../../assets/ReceiveMoney/bg.png")}
            style={styles.qrImage}
            resizeMode="contain"
          />
        </View>

        {/* Nhận tiền gần đây */}
        <Text style={styles.sectionTitle}>Nhận tiền gần đây</Text>
        <View style={styles.transactionCard}>
          {[
            {
              name: "Nguyễn Thúy Vân",
              time: "19:46 25/11/2024",
              amount: "+30,000đ",
            },
            {
              name: "Đinh Văn Chiến",
              time: "17:57 25/11/2024",
              amount: "+80,000đ",
            },
            {
              name: "Lê Văn Mùi",
              time: "14:10 25/11/2024",
              amount: "+100,000đ",
            },
            {
              name: "Bùi Như Linh",
              time: "21:30 24/11/2024",
              amount: "+150,000đ",
            },
            {
              name: "Phùng Thanh Tâm",
              time: "18:28 24/11/2024",
              amount: "+90,000đ",
            },
          ].map((item, index) => (
            <View style={styles.transactionItem} key={index}>
              <Ionicons
                name="arrow-down-circle-outline"
                size={24}
                color="#7C3AED"
              />
              <View style={styles.transactionText}>
                <Text style={styles.transactionName}>
                  Nhận tiền từ {item.name}
                </Text>
                <Text style={styles.transactionTime}>{item.time}</Text>
              </View>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          ))}
        </View>

        {/* Thống kê nhận tiền */}
        <Text style={styles.sectionTitle}>
          Thống kê nhận tiền
          <TouchableOpacity onPress={toggleStatsVisibility}>
            <Ionicons
              name={showStats ? "eye-off" : "eye"}
              size={18}
              color="black"
            />
          </TouchableOpacity>
        </Text>
        {showStats && (
          <View style={styles.statContainer}>
            {[
              { title: "Hôm kia", date: "23/11/2024", stat: "3,000,000đ" },
              { title: "Hôm qua", date: "24/11/2024", stat: "5,000,000đ" },
              { title: "Hôm nay", date: "25/11/2024", stat: "2,000,000đ" },
            ].map((item, index) => (
              <View style={styles.statBox} key={index}>
                <Text style={styles.statTitle}>{item.title}</Text>
                <Text style={styles.statDate}>{item.date}</Text>
                <Text style={styles.statValue}>{item.stat}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mainContent: {
    flexGrow: 1,
    paddingBottom: 20, // Để tránh nội dung bị che bởi footer
  },
  qrContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  qrImage: {
    width: 300,
    height: 300,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  transactionCard: {
    backgroundColor: "#F9F9F9",
    margin: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  transactionText: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontWeight: "bold",
  },
  transactionTime: {
    color: "gray",
    fontSize: 12,
  },
  transactionAmount: {
    fontWeight: "bold",
    color: "#4CAF50",
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 10,
  },
  statBox: {
    backgroundColor: "#F3F4F6",
    borderRadius: 10,
    padding: 10,
    width: "30%",
    alignItems: "center",
  },
  statTitle: {
    fontWeight: "bold",
  },
  statDate: {
    color: "gray",
    fontSize: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default ReceiveMoneyPage;
