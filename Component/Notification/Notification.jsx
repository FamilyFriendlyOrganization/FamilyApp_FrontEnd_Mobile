import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigation = useNavigation();
  // State lưu danh sách thông báo
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "TriVu đã gửi một thông báo !",
      time: "Last Wednesday at 9:42 AM",
      isRead: false,
    },
    {
      id: 2,
      title: "MinhTriet đã gửi một thông báo !",
      time: "Last Wednesday at 9:42 AM",
      isRead: false,
    },
  ]);

  // Hàm đánh dấu tất cả thông báo đã đọc
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      isRead: true,
    }));
    setNotifications(updatedNotifications);
  };

  // Hàm render mỗi thông báo
  const renderNotificationItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.notificationItem, item.isRead && styles.readNotification]}
      onPress={() =>
        navigation.navigate("NotificationDetail", { notification: item })
      } // Điều hướng với tham số
    >
      <View style={styles.indicatorContainer}>
        {!item.isRead && <View style={styles.unreadIndicator} />}
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  // Tab hiện đang chọn
  const [activeTab, setActiveTab] = useState("home");

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Thông báo" />

      {/* Danh sách thông báo */}
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />

      {/* Nút "Đánh dấu đã đọc" */}
      {notifications.some((item) => !item.isRead) && (
        <TouchableOpacity
          style={styles.markAsReadButton}
          onPress={markAllAsRead}
        >
          <Text style={styles.markAsReadButtonText}>Đánh dấu đã đọc</Text>
        </TouchableOpacity>
      )}

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  notificationItem: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  readNotification: {
    opacity: 0.5, // Giảm độ đậm khi đã đọc
  },
  indicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "blue", // Màu xanh cho trạng thái chưa đọc
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationTime: {
    fontSize: 14,
    color: "#999",
    marginTop: 4,
  },
  markAsReadButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginBottom: 80, // Thêm khoảng cách lớn hơn để tránh Footer
  },
  markAsReadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Notification;
