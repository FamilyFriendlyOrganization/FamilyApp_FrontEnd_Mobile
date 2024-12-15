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

const data = Array.from({ length: 15 }).map((_, index) => ({
  id: index,
  name: "Nguyễn Hữu Nhật",
  image: "https://i.pravatar.cc/100?img=3",
}));

const ITEMS_PER_PAGE = 6;

const TransferMoneyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chuyển tiền</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 16 }}>
            <Feather name="x" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="#BDBDBD" />
        <TextInput
          placeholder="Tìm kiếm tên bạn bè..."
          placeholderTextColor="#BDBDBD"
          style={styles.searchInput}
          editable={false}
        />
      </View>

      {/* Menu Items */}
      <View style={styles.menuContainer}>
        {[
          { name: "Đến Ngân hàng", icon: "university", color: "#7C3AED" },
          {
            name: "Đến thành viên gia đình",
            icon: "user-friends",
            color: "#2196F3",
          },
          { name: "Quét mã QR", icon: "qrcode", color: "#E91E63" },
          { name: "Gửi quà", icon: "gift", color: "#9C27B0" },
        ].map((item, index) => (
          <TouchableOpacity style={styles.menuItem} key={index}>
            <FontAwesome5 name={item.icon} size={30} color={item.color} />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Đề xuất */}
      <FlatList
        data={getCurrentPageData()}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        ListHeaderComponent={<Text style={styles.sectionTitle}>Đề xuất</Text>}
        renderItem={({ item }) => (
          <View style={styles.suggestionItem}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <Text style={styles.suggestionName}>{item.name}</Text>
          </View>
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
