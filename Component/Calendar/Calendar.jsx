import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons để sử dụng icon
import { useNavigation } from "@react-navigation/native";

const AppCalendar = () => {
  const [activeTab, setActiveTab] = useState("calendar");
  const [selectedDate, setSelectedDate] = useState(""); // Ngày được chọn
  const navigation = useNavigation();

  const onDayPress = (day) => {
    setSelectedDate(day.dateString); // Cập nhật ngày được chọn
  };

  const handleAddEvent = () => {
    console.log("Thêm sự kiện mới!");
    alert("Bạn đã nhấn nút thêm sự kiện!");
  };

  const handlePreviousMonth = () => {
    console.log("Chuyển về tháng trước");
    // Logic chuyển về tháng trước
  };

  const handleNextMonth = () => {
    console.log("Chuyển sang tháng sau");
    // Logic chuyển sang tháng sau
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header title="Lịch" />

      {/* Main Container */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("DatHen")}
        >
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Calendar */}
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
          }}
          theme={{
            todayTextColor: "#6A0DAD",
            selectedDayBackgroundColor: "#6A0DAD",
            arrowColor: "#6A0DAD",
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 16,
          }}
          style={styles.calendar}
        />
      </View>

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    paddingVertical: 10,
  },
  monthContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  arrowButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  arrowText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A0DAD",
  },
  addButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#6A0DAD",
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    marginTop: 200,
    width: 420,
    borderRadius: 10,
    elevation: 1, // Shadow cho Android
    shadowColor: "#000", // Shadow cho iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default AppCalendar;
