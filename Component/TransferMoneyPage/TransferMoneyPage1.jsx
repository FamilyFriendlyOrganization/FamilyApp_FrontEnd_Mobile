import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import {
  Ionicons,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const TransferMoneyPage1 = () => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(""); // Tab hiện đang được chọn

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Chuyển tiền" />

      {/* Thông tin người nhận */}
      <View style={styles.receiverContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }} // Ảnh mẫu
          style={styles.avatar}
        />
        <View>
          <Text style={styles.receiverName}>Nguyễn Hữu Nhật</Text>
          <Text style={styles.receiverPhone}>0888696111</Text>
        </View>
      </View>

      {/* Nhập số tiền */}
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>0đ</Text>
        <Text style={styles.amountLabel}>Vui lòng nhập số tiền</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nhập tin nhắn bạn muốn gửi"
            style={styles.input}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity>
            <MaterialIcons name="attach-money" size={24} color="#E91E63" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Phân loại chi tiêu */}
      {/* <View style={styles.categoryContainer}>
        <Text style={styles.sectionTitle}>Phân loại chi tiêu</Text>
        <View style={styles.categoryRow}>
          {[
            { name: "Ăn uống", icon: "utensils", color: "#4CAF50" },
            { name: "Mua sắm", icon: "shopping-cart", color: "#2196F3" },
            { name: "Di chuyển", icon: "car", color: "#FF9800" },
            { name: "Khác", icon: "ellipsis-h", color: "#9C27B0" },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem}>
              <FontAwesome5 name={item.icon} size={24} color={item.color} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View> */}

      {/* Nút Chuyển tiền */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TransactionResultPage")}
      >
        <Text style={styles.buttonText}>Chuyển tiền</Text>
      </TouchableOpacity>
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
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
  receiverContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  receiverName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  receiverPhone: {
    color: "#757575",
    fontSize: 14,
  },
  amountContainer: {
    backgroundColor: "#FFF8E1",
    padding: 16,
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 16,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E91E63",
  },
  amountLabel: {
    color: "#E91E63",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  categoryContainer: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
    flex: 1,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    marginTop: 50,
    backgroundColor: "#E91E63",
    borderRadius: 10,
    margin: 16,
    alignItems: "center",
    paddingVertical: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TransferMoneyPage1;
