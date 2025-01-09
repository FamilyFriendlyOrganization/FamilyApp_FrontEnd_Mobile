import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Footer = ({ activeTab, setActiveTab }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        onPress={() => {
          setActiveTab("home");
          navigation.navigate("Home");
        }}
      >
        <Image
          source={require("../../assets/Profile/Footer/home.png")}
          style={[styles.icon, activeTab === "home" && styles.activeIcon]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setActiveTab("calendar");
          navigation.navigate("AppCalendar");
        }}
      >
        <Image
          source={require("../../assets/Profile/Footer/calendar.png")}
          style={[styles.icon, activeTab === "calendar" && styles.activeIcon]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setActiveTab("money");
          navigation.navigate("ChiTieu");
        }}
      >
        <Image
          source={require("../../assets/Profile/Footer/money.png")}
          style={[styles.icon, activeTab === "money" && styles.activeIcon]}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setActiveTab("profile");
          navigation.navigate("MainProfile");
        }}
      >
        <Image
          source={require("../../assets/Profile/Footer/profile.png")}
          style={[styles.icon, activeTab === "profile" && styles.activeIcon]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  activeIcon: {
    tintColor: "blue",
  },
});

export default Footer;
