import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigation } from "@react-navigation/native";

const More = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  const services = {
    pinned: [
      {
        icon: require("./assets/QuanLyChiTieu.png"),
        label: "Quản lý chi tiêu",
        navigateTo: "ChiTieu", // Định nghĩa màn hình để điều hướng
      },
      {
        icon: require("./assets/DatLich.png"),
        label: "Đặt lịch",
        navigateTo: "AppCalendar",
      },
      {
        icon: require("./assets/NhanTien.png"),
        label: "Nhận tiền",
        navigateTo: "ReceiveMoney",
      },
      {
        icon: require("./assets/ChuyenTien.png"),
        label: "Chuyển tiền",
        navigateTo: "TransferMoneyPage",
      },
      {
        icon: require("./assets/ThemThanhVien.png"),
        label: "Thêm thành viên",
        navigateTo: "Family",
      },
      {
        icon: require("./assets/TangQua.png"),
        label: "Tặng quà",
        navigateTo: "GiftPage",
      },
      {
        icon: require("./assets/GiaDinh.png"),
        label: "Gia đình",
        navigateTo: "FamilyManagement",
      },
      {
        icon: require("./assets/DatVeMayBay.png"),
        label: "Đặt vé máy bay",
        navigateTo: "FlightBookingPage",
      },
    ],
    popular: [
      {
        icon: require("./assets/QuanLyChiTieu.png"),
        label: "Quản lý chi tiêu",
        navigateTo: "ChiTieu",
      },
      {
        icon: require("./assets/DatLich.png"),
        label: "Đặt lịch",
        navigateTo: "AppCalendar",
      },
      {
        icon: require("./assets/NhanTien.png"),
        label: "Nhận tiền",
        navigateTo: "ReceiveMoney",
      },
      {
        icon: require("./assets/ChuyenTien.png"),
        label: "Chuyển tiền",
        navigateTo: "TransferMoneyPage",
      },
      {
        icon: require("./assets/DuLich.png"),
        label: "Du lịch",
        navigateTo: "TravelDestinationsPage",
      },
      {
        icon: require("./assets/QuanAo.png"),
        label: "Quần áo",
        navigateTo: "ClothingPage",
      },
      {
        icon: require("./assets/GoiYPhim.png"),
        label: "Gợi ý phim",
        navigateTo: "MovieSuggestionsPage",
      },
    ],
    bills: [
      {
        icon: require("./assets/TienDien.png"),
        label: "Tiền điện",
        navigateTo: "InvoicePage",
      },
      {
        icon: require("./assets/TienMang.png"),
        label: "Tiền mạng",
        navigateTo: "NetworkProviderPage",
      },
      {
        icon: require("./assets/TienNuoc.png"),
        label: "Tiền nước",
        navigateTo: "WaterProvidersPage",
      },
      {
        icon: require("./assets/HocPhi.png"),
        label: "Học phí",
        navigateTo: "EducationProviderPage",
      },
    ],
  };
  const renderServiceGroup = (title, items) => (
    <View style={styles.serviceGroup}>
      <Text style={styles.groupTitle}>{title}</Text>
      <View style={styles.serviceContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.serviceItem}
            onPress={() => {
              if (item.navigateTo) {
                navigation.navigate(item.navigateTo); // Điều hướng khi nhấn vào icon
              }
            }}
          >
            <Image source={item.icon} style={styles.serviceFullIcon} />
            <Text style={styles.serviceLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header title="Các tính năng khác" />
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        {renderServiceGroup("Dịch vụ được ghim", services.pinned)}
        {renderServiceGroup("Dịch vụ phổ biến", services.popular)}
        {renderServiceGroup("Thanh toán hóa đơn", services.bills)}
      </ScrollView>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Header styles
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#6A0DAD",
    padding: 25,
    paddingHorizontal: 15,
    height: 100,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    left: -90,
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },

  // Service group styles
  scrollView: {
    marginTop: 10,
    padding: 10,
  },
  serviceGroup: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  serviceItem: {
    alignItems: "center",
    width: "25%",
    marginBottom: 15,
  },
  serviceFullIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 5,
  },
  serviceLabel: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default More;
