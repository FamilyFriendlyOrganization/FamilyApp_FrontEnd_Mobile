import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons, Feather, FontAwesome5 } from "@expo/vector-icons";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigation } from "@react-navigation/native";

const data = Array.from({ length: 15 }).map((_, index) => ({
  id: index,
  name: "Nguyễn Hữu Nhật",
  image: "https://i.pravatar.cc/100?img=3",
}));

const ITEMS_PER_PAGE = 6;

const TransferMoneyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  const navigation = useNavigation();

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Chuyển tiền" />

      {/* Đề xuất */}
      <FlatList
        data={getCurrentPageData()}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Đề xuất</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.suggestionItem}
            onPress={() =>
              navigation.navigate("TransferMoneyPage1", { user: item })
            }
          >
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <Text style={styles.suggestionName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <View style={styles.pagination}>
            <TouchableOpacity
              onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <Text
                style={[
                  styles.pageButton,
                  currentPage === 1 && styles.disabled,
                ]}
              >
                ◀
              </Text>
            </TouchableOpacity>

            {Array.from({ length: totalPages }).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setCurrentPage(index + 1)}
              >
                <Text
                  style={[
                    styles.pageNumber,
                    currentPage === index + 1 && styles.activePage,
                  ]}
                >
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <Text
                style={[
                  styles.pageButton,
                  currentPage === totalPages && styles.disabled,
                ]}
              >
                ▶
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    paddingTop: 40,
    backgroundColor: "#7C3AED",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    position: "absolute",
    top: 39,
    left: 50,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    margin: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: { flex: 1, marginLeft: 10 },
  menuContainer: { flexDirection: "row", justifyContent: "space-around" },
  menuItem: { alignItems: "center" },
  menuText: { marginTop: 5, fontSize: 12 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 10,
  },
  suggestionItem: { alignItems: "center", marginVertical: 10, width: "30%" },
  avatar: { width: 70, height: 70, borderRadius: 35 },
  suggestionName: { fontSize: 12 },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  pageButton: { fontSize: 18, marginHorizontal: 10, color: "#333" },
  pageNumber: { fontSize: 16, marginHorizontal: 8, color: "#333" },
  activePage: { fontWeight: "bold", color: "#7C3AED" },
  disabled: { color: "#CCC" },
});

export default TransferMoneyPage;
