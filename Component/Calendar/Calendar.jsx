import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";

import { Calendar } from "react-native-calendars";

const App = () => {
  const [activeTab, setActiveTab] = useState("home"); // Tab hiện đang được chọn
  const [selectedDate, setSelectedDate] = useState("");

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
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
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  activeIcon: {
    tintColor: "blue",
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 4,
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

export default App;
