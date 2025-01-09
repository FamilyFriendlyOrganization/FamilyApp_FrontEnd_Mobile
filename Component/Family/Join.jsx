import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const JoinFamily = () => {
  const [inviteCode, setInviteCode] = useState(""); // Trạng thái lưu mã mời
  const navigation = useNavigation();

  const handleJoin = () => {
    if (inviteCode.trim() === "") {
      alert("Vui lòng nhập mã mời!");
    } else {
      navigation.navigate("Home"); // Điều hướng đến trang Home
    }
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/Family/background.png")}
        style={styles.backgroundImage}
      />

      {/* Overlay Box */}
      <View style={styles.overlayBox}>
        {/* Input Mã mời */}
        <TextInput
          style={styles.input}
          placeholder="Nhập mã mời vào đây..."
          placeholderTextColor="gray"
          value={inviteCode}
          onChangeText={(text) => setInviteCode(text)}
        />

        {/* Hướng dẫn */}
        <Text style={styles.infoText}>
          Nếu chưa có mã mời, hãy liên hệ với người thân ngay nhé!
        </Text>

        {/* Nút Tham gia */}
        <TouchableOpacity style={styles.joinButton} onPress={handleJoin}>
          <Text style={styles.joinButtonText}>Tham gia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlayBox: {
    width: 333,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  joinButton: {
    backgroundColor: "#6A0DAD", // Màu tím
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  joinButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default JoinFamily;
