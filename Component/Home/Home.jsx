import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
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

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

import tt1 from "./assets/tt1.png";
import tt2 from "./assets/tt2.png";
import tt3 from "./assets/tt3.png";
import tt4 from "./assets/tt4.png";

import Footer from "../Component/Footer"; // Đường dẫn tới Footer.jsx
const Home = () => {
  const [activeTab, setActiveTab] = useState("home"); // Tab hiện đang được chọn
  const navigation = useNavigation();

  const handleQuanLyChiTieu = async () => {
    navigation.navigate("ChiTieu");
  };
  const handleDatLich = async () => {
    navigation.navigate("AppCalendar");
  };
  const handleThemGiaDinh = async () => {
    navigation.navigate("Family");
  };
  const handleNhanTien = async () => {
    navigation.navigate("ReceiveMoney");
  };
  const handleChuyenTien = async () => {
    navigation.navigate("TransferMoneyPage");
  };
  const handleTangQua = async () => {
    navigation.navigate("GiftPage");
  };
  const handleGiaDinh = async () => {
    navigation.navigate("FamilyManagement");
  };
  const handleCacChucNangKhac = async () => {
    navigation.navigate("More");
  };
  const newsData = [
    {
      id: 1,
      title: "Hạnh phúc đơn giản là sự tôn trọng",
      description:
        "Khi có sự tôn trọng lẫn nhau, quan hệ vợ chồng sẽ được củng cố, tình cảm thêm bền chặt",
      image: tt1,
    },
    {
      id: 2,
      title: "Dạy con tiêu tiền hợp lý",
      description:
        "Việc cho con tiếp cận với những kiến thức tài chính từ sớm là việc cần thiết để con hình thành tư duy tiết kiệm...",
      image: tt2,
    },
    {
      id: 3,
      title: "Thu hẹp khoảng cách thế hệ",
      description:
        "Bằng cách chấp nhận sự khác biệt, quan tâm đến sở thích của con...",
      image: tt3,
    },
    {
      id: 4,
      title: "Hãy lắng nghe tiếng lòng con trẻ!",
      description: "Dù bận rộn đến đâu hãy luôn dành thời gian cho con trẻ...",
      image: tt4,
    },
  ];
  return (
    <View style={styles.container}>
      {/* Phần Header */}
      <View style={styles.header}>
        <Image source={backgroundHeader} style={styles.background} />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
              <Image source={homeIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>Trang chủ</Text>
          </View>

          <View style={styles.iconsRight}>
            <TouchableOpacity
              style={styles.notificationContainer}
              onPress={() => {
                navigation.navigate("Notification");
              }}
            >
              <Image source={notificationIcon} style={styles.icon} />
              <Text style={styles.notificationBadge}>2</Text>
            </TouchableOpacity>
          </View>

          {/* Thêm nút Đăng xuất */}
          <TouchableOpacity>
            <Text style={styles.logoutText}></Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Phần Main */}
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.functionText}>Các chức năng tiêu biểu</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.item} onPress={handleQuanLyChiTieu}>
            <Image source={quanLyChiTieuIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Quản lý chi tiêu</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleDatLich}>
            <Image source={datLichIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Đặt lịch</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleNhanTien}>
            <Image source={nhanTienIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Nhận tiền</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleChuyenTien}>
            <Image source={chuyenTienIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Chuyển tiền</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.item} onPress={handleThemGiaDinh}>
            <Image source={thanhToanHoaDonIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Thêm gia đình</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleTangQua}>
            <Image source={tangQuaIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Tặng quà</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleGiaDinh}>
            <Image source={giaDinhIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Gia đình</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item} onPress={handleCacChucNangKhac}>
            <Image source={moreIcon} style={styles.mainIcon} />
            <Text style={styles.label}>Các chức năng khác</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.promotionContainer}>
            <Text style={styles.promotionTitle}>Thông tin khuyến mãi</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Image
                source={require("./assets/qc1.png")}
                style={styles.promotionImage}
              />
              <Image
                source={require("./assets/qc2.png")}
                style={styles.promotionImage}
              />
              <Image
                source={require("./assets/qc1.png")}
                style={styles.promotionImage}
              />
              <Image
                source={require("./assets/qc2.png")}
                style={styles.promotionImage}
              />
            </ScrollView>
          </View>
          <View style={styles.newsContainer}>
            <Text style={styles.promotionTitle}>Tin tức</Text>
            {newsData.map((item) => (
              <View key={item.id} style={styles.newsItem}>
                <Image source={item.image} style={styles.newsImage} />
                <View style={styles.newsTextContainer}>
                  <Text style={styles.newsTitleText}>{item.title}</Text>
                  <Text style={styles.newsDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Phần Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 120,
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
    position: "absolute",
    right: -150,
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
    width: 80, // Tăng kích thước để ảnh và chữ không bị mất
    height: 100, // Tăng chiều cao để chứa cả ảnh và chữ
    borderRadius: 10, // Bo góc
    overflow: "hidden", // Giữ nội dung bên trong
  },
  mainIcon: {
    width: 50, // Kích thước ảnh lớn hơn để khít container
    height: 50,
    resizeMode: "contain", // Đảm bảo ảnh không bị cắt
    marginBottom: 5, // Khoảng cách giữa ảnh và chữ
  },
  label: {
    fontSize: 14, // Giữ kích thước chữ rõ ràng
    textAlign: "center",
    color: "#000",
    marginTop: 5, // Tạo khoảng cách với ảnh
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
  activeIcon: {
    tintColor: "blue",
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 4,
  },
  promotionContainer: {
    marginTop: 20,
    paddingHorizontal: 0, // Loại bỏ padding ngang
    width: "100%", // Chiếm toàn bộ chiều rộng màn hình
  },
  promotionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  promotionImage: {
    width: 300, // Kích thước ảnh từng khuyến mãi
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    resizeMode: "cover", // Đảm bảo ảnh hiển thị đầy đủ
  },
  newsContainer: {
    marginTop: 20,
    paddingHorizontal: 0, // Loại bỏ padding ngang
    width: "100%", // Chiếm toàn bộ chiều rộng màn hình
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsItem: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2, // Hiệu ứng đổ bóng cho Android
    shadowColor: "#000", // Hiệu ứng đổ bóng cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  newsTextContainer: {
    flex: 1,
    padding: 10,
  },
  newsTitleText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
    color: "#666",
  },
  functionText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  logoutText: {
    color: "#FFFFFF", // Màu trắng cho chữ
    fontSize: 24, // Cỡ chữ
    fontWeight: "bold", // Chữ đậm
    position: "absolute", // Đặt vị trí tuyệt đối
    top: -55, // Khoảng cách từ trên xuống
    right: 0, // Căn lề phải
  },
});

export default Home;
