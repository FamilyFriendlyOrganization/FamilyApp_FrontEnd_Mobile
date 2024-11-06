import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useState } from "react";

const AnUong = () => {
  const [activeTab, setActiveTab] = useState("home"); // Tab hiện đang được chọn
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("../../assets/Family/Header/return.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ăn Uống</Text>
        <View style={styles.headerActions}>
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
        </View>
      </View>

      {/* Phần Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => setActiveTab("home")}>
          <Image
            source={require("../../assets/Profile/Footer/home.png")}
            style={[
              styles.iconfooter,
              activeTab === "home" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("calendar")}>
          <Image
            source={require("../../assets/Profile/Footer/calendar.png")}
            style={[
              styles.iconfooter,
              activeTab === "calendar" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("more")}>
          <Image
            source={require("../../assets/Profile/Footer/more.png")}
            style={[
              styles.iconfooter,
              activeTab === "more" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("money")}>
          <Image
            source={require("../../assets/Profile/Footer/money.png")}
            style={[
              styles.iconfooter,
              activeTab === "money" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("profile")}>
          <Image
            source={require("../../assets/Profile/Footer/profile.png")}
            style={[
              styles.iconfooter,
              activeTab === "profile" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6A0DAD",
    padding: 25,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    left: -90,
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  //main
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  familyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 10,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  memberEmail: {
    color: "gray",
  },
  memberRole: {
    fontWeight: "bold",
    color: "gray",
  },
  selectbutton: {
    left: -12,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  suggestionContainer: {
    flexDirection: "row",
  },
  suggestionImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  //footer
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    backgroundColor: "#f1f1f1",
    borderTopWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  iconfooter: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  activeIcon: {
    tintColor: "blue",
  },
});

export default AnUong;