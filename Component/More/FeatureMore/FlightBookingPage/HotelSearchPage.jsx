import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const HotelSearchPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  const cities = ["Vũng Tàu", "Đà Nẵng", "Đà Lạt", "Hà Nội", "Hồ Chí Minh"];

  const hotels = [
    {
      name: "Le Relais Saint-Brant",
      address: "22 Phan Huy Ích, Vũng Tàu",
      rating: "8.5/10",
      reviews: "182 đánh giá",
      price: "27,874,126đ",
      discount: "42%",
      originalPrice: "12,123,212đ",
      image: require("./assets/hotel1.png"),
    },
    {
      name: "Sea Breeze Hotel",
      address: "22 Phan Huy Ích, Đà Nẵng",
      rating: "9.1/10",
      reviews: "158 đánh giá",
      price: "5,487,321đ",
      discount: "57%",
      originalPrice: "10,012,132đ",
      image: require("./assets/hotel2.png"),
    },
    {
      name: "Odysay Hotel",
      address: "199 Thủy Vân, Vũng Tàu",
      rating: "8/10",
      reviews: "158 đánh giá",
      price: "5,487,321đ",
      discount: "57%",
      originalPrice: "10,012,132đ",
      image: require("./assets/hotel3.png"),
    },
  ];

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require("./assets/hotelBackground.png")}
          style={styles.backgroundImage}
        />
      </View>

      {/* Header */}
      <Header title="Khách sạn" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Search Form */}
        <View style={styles.searchContainer}>
          <View style={styles.rowContainer}>
            <FontAwesome5 name="map-marker-alt" size={16} color="gray" />
            <Text style={styles.value}>Vũng Tàu</Text>
          </View>
          <View style={styles.rowContainer}>
            <FontAwesome name="calendar" size={16} color="gray" />
            <Text style={styles.value}>T4, 25/12 - T5, 26/12</Text>
          </View>
          <View style={styles.rowContainer}>
            <FontAwesome name="user" size={16} color="gray" />
            <Text style={styles.value}>1 phòng, 2 người lớn</Text>
          </View>
          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate("HotelSearch")}
          >
            <Text style={styles.searchButtonText}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

        {/* Cities ScrollView */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cityScrollView}
        >
          {cities.map((city, index) => (
            <TouchableOpacity key={index} style={styles.cityButton}>
              <Text style={styles.cityButtonText}>{city}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Hotels ScrollView */}
        <Text style={styles.sectionTitle}>Khách sạn giá tốt</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotels.map((hotel, index) => (
            <View key={index} style={styles.hotelCard}>
              <Image source={hotel.image} style={styles.hotelImage} />
              <View style={styles.hotelInfo}>
                <Text style={styles.hotelName}>{hotel.name}</Text>
                <Text style={styles.hotelAddress}>{hotel.address}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.rating}>{hotel.rating}</Text>
                  <Text style={styles.reviews}>{hotel.reviews}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.discount}>-{hotel.discount}</Text>
                  <Text style={styles.price}>{hotel.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

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
  backgroundContainer: {
    width: "100%",
    height: 200,
    position: "absolute",
    top: 0,
    zIndex: -1, // Đẩy background xuống dưới
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: 90,
  },
  scrollContent: {
    paddingTop: 220, // Đẩy nội dung xuống để không bị đè
    paddingHorizontal: 15,
  },
  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginTop: -120,
    marginBottom: 20,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333333",
  },
  searchButton: {
    backgroundColor: "#FF4081",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  searchButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cityScrollView: {
    marginVertical: 15,
  },
  cityButton: {
    backgroundColor: "#F3F3F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  cityButtonText: {
    color: "#333333",
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  hotelCard: {
    width: 250,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginRight: 15,
    elevation: 3,
  },
  hotelImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hotelInfo: {
    padding: 10,
  },
  hotelName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  hotelAddress: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF4081",
  },
  reviews: {
    fontSize: 14,
    color: "#555555",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discount: {
    fontSize: 14,
    color: "#FF4081",
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
});

export default HotelSearchPage;
