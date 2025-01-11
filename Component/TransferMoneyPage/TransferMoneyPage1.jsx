import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const TransferMoneyPage1 = () => {
  const [amount, setAmount] = useState(""); // Trạng thái lưu số tiền
  const [message, setMessage] = useState(""); // Trạng thái lưu tin nhắn
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
        <Text style={styles.amount}>
          {amount ? `${amount}đ` : "0đ"} {/* Hiển thị số tiền đã nhập */}
        </Text>
        <Text style={styles.amountLabel}>Vui lòng nhập số tiền</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Nhập số tiền"
            style={styles.input}
            value={amount}
            onChangeText={(text) => setAmount(text.replace(/[^0-9]/g, ""))} // Chỉ cho phép nhập số
            keyboardType="numeric" // Hiển thị bàn phím số
          />
        </View>
      </View>

      {/* Nhập tin nhắn */}
      <View style={styles.inputContainerMessage}>
        <TextInput
          placeholder="Nhập tin nhắn bạn muốn gửi"
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />
      </View>

      {/* Nút Chuyển tiền */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!amount) {
            alert("Vui lòng nhập số tiền!");
          } else {
            navigation.navigate("TransactionResultPage", {
              amount,
              message,
            });
          }
        }}
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
  inputContainerMessage: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginTop: 16,
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
