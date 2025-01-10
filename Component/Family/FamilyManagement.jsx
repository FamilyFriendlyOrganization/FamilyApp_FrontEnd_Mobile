import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import { BarChart } from "react-native-chart-kit";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const familyMembers = [
  {
    id: "1",
    name: "Nguyễn Đình Duy",
    role: "Cha",
    schedule: "T2",
    activity: "50p trước",
    action: "Trao gửi yêu thương!",
    avatar: require("../../assets/Family/Main/avt1.png"),
  },
  {
    id: "2",
    name: "Đoàn Như Sinh",
    role: "Mẹ",
    schedule: "T3",
    activity: "1h trước",
    action: "Trao gửi yêu thương!",
    avatar: require("../../assets/Family/Main/avt2.png"),
  },
  {
    id: "3",
    name: "Nguyễn Trường An",
    role: "Con",
    schedule: "Không có lịch!",
    activity: "3p trước",
    action: "Trao gửi yêu thương!",
    avatar: require("../../assets/Family/Main/avt3.png"),
  },
  {
    id: "4",
    name: "Nguyễn Thị Tố Trân",
    role: "Con",
    schedule: "T4",
    activity: "20p trước",
    action: "Trao gửi yêu thương!",
    avatar: require("../../assets/Family/Main/avt4.png"),
  },
];

const Family = () => {
  const [activeTab, setActiveTab] = useState("Theo tháng"); // Tab hiện đang được chọn
  const dataTheoThang = [20, 45, 28, 80, 99, 43];
  const dataTheoTuan = [15, 30, 50, 75, 65, 90];

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header title="Quản lý gia đình" />

      {/* Main Section */}
      <View style={styles.mainContainer}>
        <Text style={styles.familyTitle1}>
          Thời gian biểu của các thành viên trong gia đình
        </Text>
        <Text style={styles.familyTitle}>Gia đình Batman</Text>

        {/* Family Members List */}
        <FlatList
          data={familyMembers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.memberItem}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>
                  {item.name} ({item.role})
                </Text>
                <Text style={styles.memberActivity}>
                  Hoạt động gần nhất: {item.activity}
                </Text>
              </View>
              <View style={styles.scheduleInfo}>
                <Text style={styles.memberSchedule}>
                  Thời gian biểu: {item.schedule}
                </Text>
                <Text style={styles.memberAction}>{item.action}</Text>
              </View>
            </View>
          )}
        />

        {/* Monthly/Weekly Chart Section */}
        <Text style={styles.chartTitle}>Chi tiêu tháng này</Text>
        <View style={styles.chartContainer}>
          <TouchableOpacity
            style={[
              styles.chartTab,
              activeTab === "Theo tuần" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Theo tuần")}
          >
            <Text
              style={
                activeTab === "Theo tuần"
                  ? styles.activeTabText
                  : styles.tabText
              }
            >
              Theo tuần
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.chartTab,
              activeTab === "Theo tháng" && styles.activeTab,
            ]}
            onPress={() => setActiveTab("Theo tháng")}
          >
            <Text
              style={
                activeTab === "Theo tháng"
                  ? styles.activeTabText
                  : styles.tabText
              }
            >
              Theo tháng
            </Text>
          </TouchableOpacity>
        </View>
        <BarChart
          data={{
            labels: ["8", "9", "10", "11", "12", "01"],
            datasets: [
              {
                data: activeTab === "Theo tháng" ? dataTheoThang : dataTheoTuan,
              },
            ],
          }}
          width={screenWidth} // Sử dụng chiều rộng của màn hình
          height={220}
          yAxisLabel="$"
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            fillShadowGradient: "#4c9aff",
            fillShadowGradientOpacity: 0.8,
            barPercentage: 0.5,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 100,
  },
  familyTitle1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 15,
  },
  familyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF4500",
    marginBottom: 15,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  memberActivity: {
    color: "gray",
    marginTop: 5,
  },
  scheduleInfo: {
    alignItems: "flex-end",
  },
  memberSchedule: {
    fontWeight: "bold",
    color: "#FF4500",
  },
  memberAction: {
    color: "gray",
    marginTop: 5,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  chartTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#FF4500",
  },
  tabText: {
    color: "#000",
    fontWeight: "bold",
  },
  activeTabText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Family;
