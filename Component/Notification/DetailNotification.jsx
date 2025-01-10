import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigation } from "@react-navigation/native";

const NotificationDetail = ({ route }) => {
  const { sender, subject, content } = route.params || {
    sender: "Người gửi",
    subject: "Tựa đề",
    content: "Nội dung thông báo...",
  };
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState("home"); // Tab hiện đang được chọn

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Thông báo" />

      {/* Nội dung */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Người gửi */}
        <View style={styles.section}>
          <Text style={styles.label}>Người gửi:</Text>
          <TextInput
            style={styles.input}
            value={"  TriVu"}
            editable={false} // Chỉ hiển thị, không chỉnh sửa
          />
        </View>

        {/* Tựa đề */}
        <View style={styles.section}>
          <Text style={styles.label}>Tựa đề:</Text>
          <TextInput
            style={styles.input}
            value={"  Chúc mừng sinh nhật Vũ Trí !"}
            editable={false} // Chỉ hiển thị, không chỉnh sửa
          />
        </View>

        {/* Nội dung */}
        <View style={styles.section}>
          <Text style={styles.label}>Nội dung:</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={"  Ngày hôm nay ta cùng họp mặt nơi đây ..."}
            editable={false} // Chỉ hiển thị, không chỉnh sửa
            multiline={true}
          />
        </View>
      </ScrollView>

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
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top", // Đảm bảo text bắt đầu từ đầu khung
  },
});

export default NotificationDetail;
