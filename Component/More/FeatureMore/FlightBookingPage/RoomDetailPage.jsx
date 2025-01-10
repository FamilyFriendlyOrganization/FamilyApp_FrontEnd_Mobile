import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RoomDetailsPage = () => {
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Chi tiết phòng" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hotel Image */}
        <Image
          source={require("./assets/hotelDetail.png")}
          style={styles.mainImage}
        />

        {/* Hotel Details */}
        <View style={styles.hotelDetails}>
          <Text style={styles.hotelName}>Pegasus Hotel</Text>
          <Text style={styles.hotelRating}>
            10/10 Tuyệt vời lắm (201 đánh giá)
          </Text>
          <Text style={styles.hotelAddress}>6 Trần Quý Cáp, Vũng Tàu</Text>
          <Text style={styles.hotelDate}>
            Ngày nhận - Trả phòng: T4, 25/12 - T5, 26/12
          </Text>
          <Text style={styles.hotelRoomInfo}>
            Số phòng - Số khách: 1 phòng, 2 người lớn
          </Text>
        </View>

        {/* Nearby Locations */}
        <View style={styles.nearbyContainer}>
          <Text style={styles.sectionTitle}>Địa điểm quan đây</Text>
          <Text style={styles.nearbyLocation}>
            Khu du lịch San Hồ Xanh - 0.3km
          </Text>
          <Text style={styles.nearbyLocation}>Blue Coral Beach - 0.5km</Text>
        </View>

        {/* Room Details */}
        <View style={styles.roomDetails}>
          <Image
            source={require("./assets/roomImage.png")}
            style={styles.roomImage}
          />
          <Text style={styles.roomName}>Phòng 3 Deluxe, 1 phòng ngủ</Text>
          <Text style={styles.roomInfo}>
            37m2 | 2 người lớn | 2 giường đơn lớn
          </Text>
          <Text style={styles.roomAmenities}>Tiện ích:</Text>
          <Text style={styles.amenity}>- Nhận phòng sớm</Text>
          <Text style={styles.amenity}>- Bãi đậu xe miễn phí</Text>
          <Text style={styles.amenity}>- Bữa sáng miễn phí</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discountPrice}>12,487,126đ</Text>
            <Text style={styles.originalPrice}>25,154,239đ</Text>
            <Text style={styles.discountPercentage}>-48%</Text>
          </View>
          <Text style={styles.totalPriceInfo}>
            Tổng giá 1 phòng x 1 đêm, đã bao gồm các loại phí
          </Text>
        </View>
      </ScrollView>

      {/* Booking Button */}
      <TouchableOpacity
        style={styles.bookingButton}
        onPress={() => navigation.navigate("TransactionResultPage")}
      >
        <Text style={styles.bookingButtonText}>Đặt phòng</Text>
      </TouchableOpacity>

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
  scrollContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 165, // Add extra padding to avoid overlap with the footer
  },
  mainImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  hotelDetails: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  hotelRating: {
    fontSize: 14,
    color: "#FF4081",
    marginVertical: 5,
  },
  hotelAddress: {
    fontSize: 14,
    color: "#555",
  },
  hotelDate: {
    fontSize: 14,
    color: "#555",
  },
  hotelRoomInfo: {
    fontSize: 14,
    color: "#555",
  },
  nearbyContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  nearbyLocation: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  roomDetails: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  roomImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  roomName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  roomInfo: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  roomAmenities: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  amenity: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  discountPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4081",
    marginRight: 10,
  },
  originalPrice: {
    fontSize: 14,
    color: "#777",
    textDecorationLine: "line-through",
    marginRight: 10,
  },
  discountPercentage: {
    fontSize: 14,
    color: "#FF4081",
  },
  totalPriceInfo: {
    fontSize: 12,
    color: "#777",
  },
  bookingButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 80, // Place the button above the footer
    left: 15,
    right: 15,
  },
  bookingButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RoomDetailsPage;
