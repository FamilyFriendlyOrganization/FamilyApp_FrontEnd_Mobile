import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";

const ClothingPage = () => {
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  const [activeCategory, setActiveCategory] = useState("Người lớn");

  const categories = ["Người già", "Người lớn", "Trẻ em"];

  const clothingItems = [
    {
      id: 1,
      image: require("./assets/clothing1.jpg"),
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$16,00",
      originalPrice: "$20,00",
      discount: "-20%",
    },
    {
      id: 2,
      image: require("./assets/clothing2.jpg"),
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$16,00",
      originalPrice: "$20,00",
      discount: "-20%",
    },
    {
      id: 3,
      image: require("./assets/clothing3.jpg"),
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$16,00",
      originalPrice: "$20,00",
      discount: "-20%",
    },
    {
      id: 4,
      image: require("./assets/clothing4.jpg"),
      title: "Lorem ipsum dolor sit amet consectetur",
      price: "$16,00",
      originalPrice: "$20,00",
      discount: "-20%",
    },
  ];

  const renderHeader = () => (
    <View style={styles.categoriesContainer}>
      <Text style={styles.categoriesTitle}>Phân Loại</Text>
      <View style={styles.categoriesButtonsContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={
              activeCategory === category
                ? styles.activeCategoryButton
                : styles.categoryButton
            }
            onPress={() => setActiveCategory(category)}
          >
            <Text
              style={
                activeCategory === category
                  ? styles.activeCategoryText
                  : styles.categoryText
              }
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text style={styles.itemOriginalPrice}>{item.originalPrice}</Text>
        </View>
        <Text style={styles.itemDiscount}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Quần áo" />

      {/* Main Content */}
      <FlatList
        data={clothingItems}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
      />

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
  flatListContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  categoriesContainer: {
    marginVertical: 10,
  },
  categoriesTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoriesButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#6200EA",
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 14,
    color: "#333333",
  },
  activeCategoryText: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  itemCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  itemImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemInfo: {
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 5,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6200EA",
    marginRight: 5,
  },
  itemOriginalPrice: {
    fontSize: 14,
    color: "#777777",
    textDecorationLine: "line-through",
  },
  itemDiscount: {
    fontSize: 12,
    color: "#FF4081",
    marginTop: 5,
  },
});

export default ClothingPage;
