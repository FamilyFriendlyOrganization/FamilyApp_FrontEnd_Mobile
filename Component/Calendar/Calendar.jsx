import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

const AppCalendar = () => {
  const [activeTab, setActiveTab] = useState("home"); // Tab hiện đang được chọn
  const [selectedDate, setSelectedDate] = useState("");

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
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
      <View style={styles.container}>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
          style={{ width: 400 }} // Điều chỉnh kích thước ở đây
        />
      </View>
      {/* Phần Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => setActiveTab("home")}>
          <Image
            source={require("../../assets/Profile/Footer/home.png")}
            style={[styles.icon, activeTab === "home" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("calendar")}>
          <Image
            source={require("../../assets/Profile/Footer/calendar.png")}
            style={[styles.icon, activeTab === "calendar" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("more")}>
          <Image
            source={require("../../assets/Profile/Footer/more.png")}
            style={[styles.icon, activeTab === "more" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("money")}>
          <Image
            source={require("../../assets/Profile/Footer/money.png")}
            style={[styles.icon, activeTab === "money" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("profile")}>
          <Image
            source={require("../../assets/Profile/Footer/profile.png")}
            style={[styles.icon, activeTab === "profile" && styles.activeIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: "#7C3AED",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 3, // Reduce padding here
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    bottom: -4,
  },
  activeIcon: {
    tintColor: "blue",
  },
  icon: {
    width: 40, // Reduce icon size here
    height: 40, // Reduce icon size here
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default AppCalendar;
