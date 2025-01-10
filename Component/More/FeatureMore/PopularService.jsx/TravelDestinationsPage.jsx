import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import { useState } from "react";

const TravelDestinationsPage = () => {
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  const destinations = [
    {
      name: "L.A.",
      description: "Discover new places and find new adventures.",
      price: "$500",
      image: require("./assets/L.A.png"),
    },
    {
      name: "Madrid",
      description: "Discover new places and find new adventures.",
      price: "$500",
      image: require("./assets/Madrid.png"),
    },
    {
      name: "Dublin",
      description: "Discover new places and find new adventures.",
      price: "$500",
      image: require("./assets/Dublin.png"),
    },
    {
      name: "Lima",
      description: "Discover new places and find new adventures.",
      price: "$500",
      image: require("./assets/Lima.png"),
    },
    {
      name: "Bogotá",
      description: "Discover new places and find new adventures.",
      price: "$500",
      image: require("./assets/Bogota.png"),
    },
  ];

  const renderDestination = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Du lịch" />

      {/* Content */}
      <FlatList
        data={destinations}
        renderItem={renderDestination}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  listContent: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 3,
    marginBottom: 15,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333333",
  },
  description: {
    fontSize: 14,
    color: "#777777",
  },
  priceContainer: {
    backgroundColor: "#000000",
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  price: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default TravelDestinationsPage;
