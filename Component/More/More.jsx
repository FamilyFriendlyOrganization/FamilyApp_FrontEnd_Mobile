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

const More = () => {
  const [activeTab, setActiveTab] = useState("home"); // Tab hiện đang được chọn

  const services = {
    pinned: [
      {
        icon: require("./assets/QuanLyChiTieu.png"),
        label: "Quản lý chi tiêu",
      },
      { icon: require("./assets/DatLich.png"), label: "Đặt lịch" },
      { icon: require("./assets/NhanTien.png"), label: "Nhận tiền" },
      { icon: require("./assets/ChuyenTien.png"), label: "Chuyển tiền" },
      {
        icon: require("./assets/ThemThanhVien.png"),
        label: "Thêm thành viên",
      },
      { icon: require("./assets/TangQua.png"), label: "Tặng quà" },
      { icon: require("./assets/GiaDinh.png"), label: "Gia đình" },
      {
        icon: require("./assets/DatVeMayBay.png"),
        label: "Đặt vé máy bay",
      },
    ],
    popular: [
      {
        icon: require("./assets/QuanLyChiTieu.png"),
        label: "Quản lý chi tiêu",
      },
      { icon: require("./assets/DatLich.png"), label: "Đặt lịch" },
      { icon: require("./assets/NhanTien.png"), label: "Nhận tiền" },
      { icon: require("./assets/ChuyenTien.png"), label: "Chuyển tiền" },
      { icon: require("./assets/DuLich.png"), label: "Du lịch" },
      { icon: require("./assets/QuanAo.png"), label: "Quần áo" },
      { icon: require("./assets/GoiYPhim.png"), label: "Gợi ý phim" },
    ],
    bills: [
      { icon: require("./assets/TienDien.png"), label: "Tiền điện" },
      { icon: require("./assets/TienMang.png"), label: "Tiền mạng" },
      { icon: require("./assets/TienNuoc.png"), label: "Tiền nước" },
      { icon: require("./assets/HocPhi.png"), label: "Học phí" },
    ],
  };

  const renderServiceGroup = (title, items) => (
    <View style={styles.serviceGroup}>
      <Text style={styles.groupTitle}>{title}</Text>
      <View style={styles.serviceContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.serviceItem}>
            <Image source={item.icon} style={styles.serviceFullIcon} />
            <Text style={styles.serviceLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("../../assets/Family/Header/return.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Các tính năng khác</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/Family/Header/search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/Family/Header/cancel.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        {renderServiceGroup("Dịch vụ được ghim", services.pinned)}
        {renderServiceGroup("Dịch vụ phổ biến", services.popular)}
        {renderServiceGroup("Thanh toán hóa đơn", services.bills)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Header styles
  header: {
    flexDirection: "row",
    alignItems: "flex-end", // Đặt tất cả các phần tử căn về phía dưới
    justifyContent: "space-between",
    backgroundColor: "#6A0DAD",
    padding: 25,
    paddingHorizontal: 15,
    height: 100, // Đặt chiều cao cụ thể cho header
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
    padding: 10,
  },
  serviceGroup: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 16,
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
    width: 50, // Điều chỉnh kích thước icon
    height: 50,
    resizeMode: "contain", // Đảm bảo icon giữ nguyên tỉ lệ và không bị tràn
    marginBottom: 5,
  },
  serviceLabel: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default More;
