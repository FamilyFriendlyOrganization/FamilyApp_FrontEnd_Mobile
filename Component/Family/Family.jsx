import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const familyMembers = [
  {
    id: "1",
    name: "Nguyễn Đình Duy",
    email: "aaaaa@gmail.com",
    role: "Cha",
    avatar: require("../../assets/Family/Main/avt1.png"),
  },
  {
    id: "2",
    name: "Đoàn Như Sinh",
    email: "bbbbb@gmail.com",
    role: "Mẹ",
    avatar: require("../../assets/Family/Main/avt2.png"),
  },
  {
    id: "3",
    name: "Nguyễn Trường An",
    email: "ccccc@gmail.com",
    role: "Con",
    avatar: require("../../assets/Family/Main/avt3.png"),
  },
  {
    id: "4",
    name: "Nguyễn Thị Tố Trân",
    email: "ddddd@gmail.com",
    role: "Con",
    avatar: require("../../assets/Family/Main/avt4.png"),
  },
];

const Family = () => {
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header title="Thêm thành viên" />
      {/* Main Section */}
      <View style={styles.mainContainer}>
        {/* Search and Add Member Section */}
        <View style={styles.searchContainer}>
          <Text style={styles.familyTitle}>Gia đình Batman</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Tạo lời mời</Text>
          </TouchableOpacity>
        </View>

        {/* Family Title */}

        {/* Family Members List */}
        <FlatList
          data={familyMembers}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.memberItem}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{item.name}</Text>
                <Text style={styles.memberEmail}>{item.email}</Text>
              </View>
              <Image
                source={require("../../assets/Family/Main/select.png")}
                style={styles.selectbutton}
              />
              <Text style={styles.memberRole}>{item.role}</Text>
            </View>
          )}
        />
        {/* Horizontal Scrollable Images Section */}
        <Text style={styles.suggestionTitle}>Có thể bạn quan tâm</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.suggestionContainer}
        >
          <Image
            source={require("../../assets/Family/Main/image 1.png")}
            style={styles.suggestionImage}
          />
          <Image
            source={require("../../assets/Family/Main/image 2.png")}
            style={styles.suggestionImage}
          />
          <Image
            source={require("../../assets/Family/Main/image 3.png")}
            style={styles.suggestionImage}
          />
        </ScrollView>
      </View>

      {/* Phần Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
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
    left: -100,
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
    fontSize: 18,
  },
  familyTitle: {
    marginRight: 170,
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

export default Family;
