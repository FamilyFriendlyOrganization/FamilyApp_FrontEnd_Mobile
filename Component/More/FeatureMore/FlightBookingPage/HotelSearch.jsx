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
import { useNavigation } from "@react-navigation/native";

const HotelSearch = () => {
  const navigation = useNavigation(); // Sử dụng useNavigation để điều hướng

  const hotels = [
    {
      name: "Pegasus Hotel",
      address: "6 Trần Quý Cáp, Vũng Tàu",
      rating: "10/10",
      review: "Tuyệt vời lắm",
      reviewsCount: "201 đánh giá",
      price: "12,487,126đ",
      discount: "-48%",
      originalPrice: "23,212,212đ",
      roomType: "Phòng đôi",
      image: require("./assets/hotel1.png"),
    },
    {
      name: "Odyssey Hotel",
      address: "199 Thùy Vân, Vũng Tàu",
      rating: "9/10",
      review: "Nên ghé thăm",
      reviewsCount: "182 đánh giá",
      price: "27,487,126đ",
      discount: "-42%",
      originalPrice: "50,123,212đ",
      roomType: "Phòng đơn",
      image: require("./assets/hotel2.png"),
    },
    {
      name: "Le Relais Saint-Brant",
      address: "45 Tân Lập, Dĩ An, Bình Dương",
      rating: "8.5/10",
      review: "Khá ổn",
      reviewsCount: "199 đánh giá",
      price: "5,487,126đ",
      discount: "-57%",
      originalPrice: "12,123,212đ",
      roomType: "Phòng đơn",
      image: require("./assets/hotel3.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Khách sạn - Vũng Tàu" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Kết quả tìm kiếm phù hợp</Text>

        {hotels.map((hotel, index) => (
          <TouchableOpacity
            key={index}
            style={styles.hotelCard}
            onPress={() => navigation.navigate("RoomDetailPage")} // Điều hướng đến trang "Home"
          >
            <Image source={hotel.image} style={styles.hotelImage} />
            <View style={styles.hotelInfo}>
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <Text style={styles.hotelAddress}>{hotel.address}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{hotel.rating}</Text>
                <Text style={styles.review}>{hotel.review}</Text>
                <Text style={styles.reviewsCount}>{hotel.reviewsCount}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.discount}>{hotel.discount}</Text>
                <Text style={styles.price}>{hotel.price}</Text>
              </View>
              <Text style={styles.roomType}>{hotel.roomType}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      <Footer />
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
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#333",
  },
  hotelCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 15,
    padding: 10,
  },
  hotelImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  hotelAddress: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF4081",
    marginRight: 5,
  },
  review: {
    fontSize: 14,
    color: "#555",
    marginRight: 5,
  },
  reviewsCount: {
    fontSize: 14,
    color: "#777",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  discount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF4081",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  roomType: {
    fontSize: 14,
    color: "#555",
  },
});

export default HotelSearch;
