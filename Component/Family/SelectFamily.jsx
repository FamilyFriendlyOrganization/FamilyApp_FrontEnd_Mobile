import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

const SelectFamily = () => {
  const [selectedFamily, setSelectedFamily] = React.useState("");
  const navigation = useNavigation();

  const handleTiepTuc = async () => {
    navigation.navigate("Home");
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
        <Text style={styles.greeting}>Xin chào, Nguyễn Văn A</Text>
        <Text style={styles.question}>Ngày hôm nay của bạn thế nào??</Text>
        <Text style={styles.infoText}>
          Bạn đang là thành viên của 2 gia đình, chọn 1 ngay nhé!
        </Text>

        {/* Family Picker */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedFamily}
            onValueChange={(itemValue) => setSelectedFamily(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Hãy chọn gia đình..." value="" />
            <Picker.Item label="Gia đình 1" value="family1" />
            <Picker.Item label="Gia đình 2" value="family2" />
          </Picker>
        </View>
        <Text style={styles.infoText}>
          Nếu bạn chưa có gia đình, hãy tạo hoặc tham gia ngay nhé!
        </Text>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText} onPress={handleTiepTuc}>
            Tiếp tục
          </Text>
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
    height: 420,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    alignItems: "center",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "semibold",
    marginBottom: 10,
    color: "black",
  },
  question: {
    fontSize: 30,
    fontStyle: "normal",
    color: "gray",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    color: "black",
    textAlign: "left",
    marginBottom: 20,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "100%",
    marginBottom: 25,
  },
  picker: {
    height: 40,
    color: "gray",
    width: "100%",
  },
  continueButton: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  continueButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SelectFamily;
