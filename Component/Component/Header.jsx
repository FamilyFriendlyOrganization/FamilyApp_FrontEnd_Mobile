import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      {/* Phần Trở về và Tiêu đề */}
      <View style={styles.leftContainer}>
        {/* Tiêu đề */}
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* Các icon ở góc phải */}
      {/* <View style={styles.headerActions}>
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
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6720AF", // Màu nền tím
    height: 90, // Tăng chiều cao header
    flexDirection: "row", // Hiển thị các thành phần theo hàng ngang
    alignItems: "flex-end", // Căn phần nội dung Header xuống
    justifyContent: "space-between", // Giãn cách giữa các phần tử
    paddingHorizontal: 10, // Khoảng cách ngang
    paddingBottom: 10, // Thêm khoảng cách từ nội dung tới cạnh dưới
  },
  leftContainer: {
    flexDirection: "row", // Đặt Icon và Tiêu đề theo hàng ngang
    alignItems: "center", // Căn giữa các thành phần
  },
  headerText: {
    fontSize: 24, // Cỡ chữ
    fontWeight: "bold", // Chữ đậm
    color: "#fff", // Màu trắng
    marginLeft: 10, // Khoảng cách giữa Icon và Tiêu đề
  },
  iconButton: {
    padding: 5, // Tăng vùng nhấn
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain", // Đảm bảo ảnh hiển thị đúng tỉ lệ
  },
  headerActions: {
    flexDirection: "row", // Hiển thị các icon theo hàng ngang
  },
});

export default Header;
