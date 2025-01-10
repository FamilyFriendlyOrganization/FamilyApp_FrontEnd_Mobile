import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useNavigation } from "@react-navigation/native";

const FlightBookingPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  const [departure, setDeparture] = useState("SGN - Hồ Chí Minh");
  const [destination, setDestination] = useState("HAN - Hà Nội");
  const [date, setDate] = useState("Thứ 5, 25/12/2024");
  const [passengers, setPassengers] = useState("1 người lớn");

  const handleSelect = (type) => {
    switch (type) {
      case "departure":
        setDeparture("DAD - Đà Nẵng"); // Fake data
        break;
      case "destination":
        setDestination("CXR - Nha Trang"); // Fake data
        break;
      case "date":
        setDate("Thứ 6, 26/12/2024"); // Fake data
        break;
      case "passengers":
        setPassengers("2 người lớn"); // Fake data
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Đặt vé" />

      {/* Background Image */}
      <View style={styles.backgroundContainer}>
        <Image
          source={require("./assets/PlaneBackground.png")}
          style={styles.backgroundImage}
        />
      </View>

      {/* ScrollView to avoid overlap */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Booking Form */}
        <View style={styles.bookingContainer}>
          <Text style={styles.bookingTitle}>Vé máy bay</Text>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => handleSelect("departure")}
          >
            <Text style={styles.label}>Từ</Text>
            <Text style={styles.value}>{departure}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => handleSelect("destination")}
          >
            <Text style={styles.label}>Đến</Text>
            <Text style={styles.value}>{destination}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => handleSelect("date")}
          >
            <FontAwesome name="calendar" size={16} color="gray" />
            <Text style={styles.value}>{date}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rowContainer}
            onPress={() => handleSelect("passengers")}
          >
            <FontAwesome name="user" size={16} color="gray" />
            <Text style={styles.value}>{passengers}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => navigation.navigate("FlightSearchResultsPage")}
          >
            <Text style={styles.searchButtonText}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

        {/* Hotel Section */}
        <TouchableOpacity
          style={styles.hotelButton}
          onPress={() => navigation.navigate("HotelSearchPage")}
        >
          <FontAwesome name="home" size={20} color="red" />
          <Text style={styles.hotelButtonText}>Khách sạn</Text>
        </TouchableOpacity>

        {/* News Section */}
        <Text style={styles.newsTitle}>Tin tức dành cho bạn</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={styles.newsCard}>
              <Text style={styles.newsAuthor}>
                {index % 2 === 0 ? "Admin" : "Triết"}
              </Text>
              <Text style={styles.newsTime}>4h</Text>
              <Image
                source={
                  index % 2 === 0
                    ? require("./assets/NewsImage1.png")
                    : require("./assets/NewsImage2.png")
                }
                style={styles.newsImage}
              />
              <Text style={styles.newsText}>
                {index % 2 === 0
                  ? "Săn vé vào t4, t6 hàng tuần trong khung giờ giới hạn để nhận ưu đãi bạn nhé!"
                  : "Bạn muốn vé quê nhưng lo ngại giá? Hãy đến với chúng tôi ngay nhé!"}
              </Text>
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
    top: 90,
    zIndex: -1, // Ensure background is behind other content
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  scrollContent: {
    paddingTop: 200, // Avoid overlap with background
    paddingHorizontal: 10,
  },
  bookingContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    elevation: 5,
    marginBottom: 20,
    marginTop: -120,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF4081",
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#757575",
  },
  value: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
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
  hotelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 8,
  },
  hotelButtonText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  newsCard: {
    width: 200,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginRight: 15,
    elevation: 3,
    padding: 10,
  },
  newsAuthor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  newsTime: {
    fontSize: 12,
    color: "#757575",
  },
  newsImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginVertical: 10,
  },
  newsText: {
    fontSize: 14,
    color: "#333",
  },
});

export default FlightBookingPage;
