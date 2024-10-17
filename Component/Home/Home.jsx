import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

// Import assets
import backgroundHeader from "../../assets/Home/Header/backgroundheader.png";
import homeIcon from "../../assets/Home/Header/Home.png";
import notificationIcon from "../../assets/Home/Header/notification.png";
import messageIcon from "../../assets/Home/Header/message.png";
import vietnamFlag from "../../assets/Home/Header/Vietnam.png";

// Import các icon
import quanLyChiTieuIcon from "../../assets/Home/Main/QuanLyChiTieu.png";
import datLichIcon from "../../assets/Home/Main/DatLich.png";
import nhanTienIcon from "../../assets/Home/Main/NhanTien.png";
import chuyenTienIcon from "../../assets/Home/Main/ChuyenTien.png";
import thanhToanHoaDonIcon from "../../assets/Home/Main/ThanhToanHoaDon.png";
import tangQuaIcon from "../../assets/Home/Main/TangQua.png";
import giaDinhIcon from "../../assets/Home/Main/GiaDinh.png";
import moreIcon from "../../assets/Home/Main/More.png";
import searchIcon from "../../assets/Home/Main/search.png"; // Biểu tượng tìm kiếm

// Import các icon từ thư mục Footer
import familyIcon from "../../assets/Home/Footer/family.png";
import settingsIcon from "../../assets/Home/Footer/Settings.png";
import scanIcon from "../../assets/Home/Footer/scan.png";
import mailIcon from "../../assets/Home/Footer/Mail.png";
import profileIcon from "../../assets/Home/Footer/profile.png";

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Phần Header */}
      <View style={styles.header}>
        <Image source={backgroundHeader} style={styles.background} />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <TouchableOpacity>
              <Image source={homeIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Trang chủ</Text>
          </View>

          <View style={styles.iconsRight}>
            <TouchableOpacity style={styles.notificationContainer}>
              <Image source={notificationIcon} style={styles.icon} />
              <Text style={styles.notificationBadge}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={messageIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>

          <Image source={vietnamFlag} style={styles.flagIcon} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          placeholderTextColor="#ccc"
        />
        <Image source={searchIcon} style={styles.searchIcon} />
      </View>

      {/* Phần Main */}
      <View style={styles.mainContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.item}>
            <Image source={quanLyChiTieuIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Quản lý chi tiêu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={datLichIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Đặt lịch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={nhanTienIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Nhận tiền</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={chuyenTienIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Chuyển tiền</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.item}>
            <Image source={thanhToanHoaDonIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Thanh toán hóa đơn</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={tangQuaIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Tặng quà</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={giaDinhIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Gia đình</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={moreIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Các chức năng khác</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <Text style={styles.promotionText}>Thông tin khuyến mãi</Text>
        <Text style={styles.promotionText}></Text>
        <Text style={styles.promotionText}></Text>
        <Text style={styles.promotionText}>Tin Tức</Text>
      </View>
      {/* Phan footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={familyIcon} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={settingsIcon} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={scanIcon} style={[styles.icon, styles.scanIcon]} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={mailIcon} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image source={profileIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    paddingTop: 40,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  iconsRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
    position: "absolute",
    top: 10,
    right: 10,
  },
  notificationContainer: {
    position: "relative",
    marginHorizontal: 10,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    width: 16,
    height: 16,
    textAlign: "center",
    fontSize: 10,
    lineHeight: 16,
  },
  // Style cho search bar
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "#FF00FF",
  },
  mainContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
  },
  mainIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    textAlign: "center",
    color: "#000",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#f1f1f1",
    borderTopWidth: 1,
    borderColor: "#ccc",
    position: "absolute", // Cố định vị trí ở dưới cùng
    bottom: 0, // Đặt ở cạnh dưới
    width: "100%", // Chiếm toàn bộ chiều ngang
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  scanIcon: {
    width: 50, // Biểu tượng scan lớn hơn
    height: 50,
  },
  promotionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
    color: "#000",
  },
});

export default Home;
