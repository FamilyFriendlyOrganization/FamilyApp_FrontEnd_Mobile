import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";

const flightData = Array.from({ length: 50 }, (_, index) => ({
  airline: index % 2 === 0 ? "Vietnam Airlines" : "Vietjet Air",
  logo:
    index % 2 === 0
      ? require("./assets/vnairline.png")
      : require("./assets/vietjet.png"),
  departureTime: "12:30",
  duration: "2h 20m",
  arrivalTime: "14:50",
  price: `${(Math.random() * 5 + 2).toFixed(3)}.125đ`,
  passengers: "1 hành khách",
}));

const FlightSearchResultsPage = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  const renderFlightItem = ({ item }) => (
    <TouchableOpacity
      style={styles.flightCard}
      onPress={() => navigation.navigate("Home")}
    >
      <View style={styles.flightInfoContainer}>
        <Image source={item.logo} style={styles.logo} />
        <View>
          <Text style={styles.airline}>{item.airline}</Text>
          <Text
            style={styles.time}
          >{`${item.departureTime} - ${item.arrivalTime}`}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
      </View>
      <View style={styles.flightPriceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.passengers}>{item.passengers}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Kết quả tìm kiếm" />

      {/* No Flights Message */}
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          Hiện chúng mình không có chuyến bay nào phù hợp với yêu cầu tìm kiếm
          của bạn!
        </Text>
      </View>

      {/* Flight List */}
      <Text style={styles.sectionTitle}>Các chuyến bay hiện có</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {flightData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.flightCard}
            onPress={() => navigation.navigate("PassengerInfoPage")}
          >
            <View style={styles.flightInfoContainer}>
              <Image source={item.logo} style={styles.logo} />
              <View>
                <Text style={styles.airline}>{item.airline}</Text>
                <Text
                  style={styles.time}
                >{`${item.departureTime} - ${item.arrivalTime}`}</Text>
                <Text style={styles.duration}>{item.duration}</Text>
              </View>
            </View>
            <View style={styles.flightPriceContainer}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.passengers}>{item.passengers}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
  messageContainer: {
    backgroundColor: "#F9F9F9",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  messageText: {
    fontSize: 16,
    color: "#555555",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  flightCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  flightInfoContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 10,
  },
  airline: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  time: {
    fontSize: 14,
    color: "#555555",
  },
  duration: {
    fontSize: 14,
    color: "#777777",
  },
  flightPriceContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF4081",
  },
  passengers: {
    fontSize: 14,
    color: "#555555",
  },
});

export default FlightSearchResultsPage;
