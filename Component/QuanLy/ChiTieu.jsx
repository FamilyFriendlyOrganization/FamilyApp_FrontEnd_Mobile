import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList, Dimensions } from "react-native";
import { useState } from "react";
import { VictoryPie } from "victory-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Use MaterialIcons for arrows

const ChiTieu = () => {
  const [activeTab, setActiveTab] = useState("home"); // Tab hiện đang được chọn

  const [selectedTab, setSelectedTab] = useState("Chi tiêu"); // "Chi tiêu" or "Thu nhập"
  const [month, setMonth] = useState("Tháng này"); // Default month
  const [data, setData] = useState([
    { category: "Ăn uống", value: 53 },
    { category: "Mua sắm", value: 20 },
  ]); // Default pie chart data
  const [isBalanceVisible, setBalanceVisible] = useState(false);
  const inAmount = 1000000; // Example income
  const outAmount = 6000000; // Example expenses
  const balance = 999000000000; // Example balance
  const balanceText = isBalanceVisible
    ? `${balance.toLocaleString()}đ`
    : "***,****đ";

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    if (tab === "Chi tiêu") {
      setData([
        { category: "Ăn uống", value: 50 },
        { category: "Mua sắm", value: 20 },
        { category: "Mua sắm1", value: 30 },
        { category: "Mua sắm2", value: 40 },
        { category: "Mua sắm3", value: 50 },
      ]);
    } else {
      setData([
        { category: "Lương", value: 80 },
        { category: "Thưởng", value: 20 },
      ]);
    }
  };
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? months.length - 1 : prevIndex - 1
    );
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === months.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Sort data in descending order of value
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // Get top two legends
  const topLegends = sortedData.slice(0, 2);

  const renderLegendItem = ({ item }) => {
    const totalValue = data.reduce((sum, item) => sum + item.value, 0); // Calculate total value
    const percentage = ((item.value / totalValue) * 100).toFixed(0); // Calculate percentage
  
    // Find the original index of the category in the `data` array
    const originalIndex = data.findIndex((dataItem) => dataItem.category === item.category);
  
    return (
      <View style={styles.legendItem}>
        <View
          style={[
            styles.legendColorBox,
            { backgroundColor: colorScale[originalIndex % colorScale.length] }, // Use the color based on original index
          ]}
        />
        <View style={styles.legendTextContainer}>
          <Text style={styles.legendCategoryText}>{item.category}</Text>
          <Text style={styles.legendValueText}>{`${percentage}%`}</Text>
        </View>
      </View>
    );
  };
  const colorScale = ["#FF5722", "#4CAF50", "#2196F3", "#FFEB3B", "#9C27B0"];

  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={require("../../assets/Family/Header/return.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Quản lý chi tiêu</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/Family/Header/search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("../../assets/Family/Header/cancel.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main */}

      {/* Main Content Section */}
      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <View style={styles.balanceContent}>
        <View style={styles.balanceDetails}>
          <Image
            source={require("../../assets/ChiTieu/Money.png")} // Replace with your image path
            style={styles.balanceImage}
          />
          <Text style={styles.balanceText}>Số dư thanh toán</Text>
          <TouchableOpacity
          onPress={() => setBalanceVisible(!isBalanceVisible)}
          style={styles.toggleButton}
          >
              <Image
              source={require("../../assets/ChiTieu/Eye.png")}
              style={styles.toggleIcon}
              />
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceAmount}>{balanceText}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.detailButtonText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content Section */}
      <View style={styles.contentContainer}>
        {/* Month Selector */}
        <View style={styles.monthSelectorContainer}>
          {/* Left Arrow Button */}
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Icon name="arrow-back-ios" size={20} color="#888" />
          </TouchableOpacity>

          {/* Month Selector with Calendar Icon */}
          <View style={styles.monthTextContainer}>
            <Icon name="calendar-today" size={16} color="#333" style={styles.calendarIcon} />
            <Text style={styles.monthText}>{months[currentMonthIndex]}</Text>
          </View>

          {/* Right Arrow Button */}
          <TouchableOpacity onPress={handleNextMonth}>
            <Icon name="arrow-forward-ios" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Tabs for Income and Expense */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "Chi tiêu" && styles.activeTab,
            ]}
            onPress={() => handleTabPress("Chi tiêu")}
          >
            <View style={styles.tabTextDetails}>
              <Image 
              source={require("../../assets/ChiTieu/Out.png")}
              style={{marginRight:10}}/>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "Chi tiêu" && styles.activeTabText,
                ]}
              >
                Chi tiêu
              </Text>
            </View>

            <Text style={styles.amountText}>{outAmount.toLocaleString()}đ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              selectedTab === "Thu nhập" && styles.activeTab,
            ]}
            onPress={() => handleTabPress("Thu nhập")}
          >
            <View style={styles.tabTextDetails}>
              <Image source={require("../../assets/ChiTieu/In.png")}
              style={{marginRight:10}}/>
              <Text
                style={[
                  styles.tabText,
                  selectedTab === "Thu nhập" && styles.activeTabText,
                ]}
              >
                Thu nhập
              </Text>
            </View>
            <Text style={styles.amountText}>{inAmount.toLocaleString()}đ</Text>
          </TouchableOpacity>
        </View>

        {/* Difference Calculation */}
        <Text style={styles.differenceText}>
          Thu - chi ={' '}
          <Text style={styles.differenceAmount}>
            {(inAmount - outAmount).toLocaleString()}đ
          </Text>
        </Text>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <VictoryPie
          data={data.map((item) => ({ x: item.category, y: item.value }))}
          colorScale={colorScale} // Use the color scale
          innerRadius={60}
          height={Dimensions.get("window").height * 0.35}
          labels={() => null} // Remove labels
        />
      </View>

      {/* Legends Section */}
      <FlatList
        data={topLegends} // Always show top two legends
        renderItem={renderLegendItem}
        keyExtractor={(item, index) => `${item.category}-${index}`}
        style={styles.legendList}
      />

      {/* "Xem thêm" Button (Static) */}
      <TouchableOpacity style={styles.showMoreButton}>
        <Text style={styles.showMoreText}>Xem thêm</Text>
      </TouchableOpacity>
      </View>


      {/* Phần Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => setActiveTab("home")}>
          <Image
            source={require("../../assets/Profile/Footer/home.png")}
            style={[
              styles.iconfooter,
              activeTab === "home" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("calendar")}>
          <Image
            source={require("../../assets/Profile/Footer/calendar.png")}
            style={[
              styles.iconfooter,
              activeTab === "calendar" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("more")}>
          <Image
            source={require("../../assets/Profile/Footer/more.png")}
            style={[
              styles.iconfooter,
              activeTab === "more" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("money")}>
          <Image
            source={require("../../assets/Profile/Footer/money.png")}
            style={[
              styles.iconfooter,
              activeTab === "money" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("profile")}>
          <Image
            source={require("../../assets/Profile/Footer/profile.png")}
            style={[
              styles.iconfooter,
              activeTab === "profile" && styles.activeIcon,
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#6A0DAD",
    padding: 25,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    left: -70,
  },
  headerActions: {
    flexDirection: "row",
  },
  iconButton: {
    padding: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  //main
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  addButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  familyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A0DAD",
    marginBottom: 10,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  memberEmail: {
    color: "gray",
  },
  memberRole: {
    fontWeight: "bold",
    color: "gray",
  },
  selectbutton: {
    left: -12,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  suggestionContainer: {
    flexDirection: "row",
  },
  suggestionImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },


  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 10,
  },

  // Balance
  balanceContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "left",
    margin: 15,
    borderWidth: 0.5,
    borderRadius: 15,
    elevation: 2,
  },
  balanceDetails: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center items vertically
  },
  balanceImage: {
    width: 15, // Adjust width of the image
    height: 15, // Adjust height of the image
    marginRight: 10, // Add space between image and text
  },
  balanceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  toggleIcon: {
    marginHorizontal: 10,
    width: 15, // Adjust width of the icon
    height: 10, // Adjust height of the icon
  },
  balanceAmount: {
    fontSize: 14,
    color: "#6A0DAD",
    marginVertical: 5,
    fontWeight: "bold",
  },
  detailButton: {
    position: "absolute", // Position amount at the bottom-right
    bottom: 10, // Adjust distance from bottom
    right: 10, // Adjust distance from right
    fontSize: 14,
    fontWeight: "bold",
  },
  detailButtonText: {
    position: "absolute",
    color: "#6A0DAD",
    fontSize: 14,
    bottom: 5,
    right: 5,
  },
  contentContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginHorizontal: 15,
  },

  // Month selector
  monthSelectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  arrowButton: {
    padding: 10,
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: "#888",
  },
  monthTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  calendarIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
    tintColor: "#333",
  },
  monthText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },


  // Tab and Chart
  tab: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: "left",
  },
  activeTab: {
    borderColor: "#ff00ff", // Highlight border color for the active tab
    borderWidth: 2,
  },
  tabTextDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#aaa", // Grey text color for both active and inactive tabs
  },
  activeTabText: {
    color: "#333", // Slightly darker grey when active
  },
  amountText: {
    fontSize: 14,
    marginTop: 5,
    color: "#333",
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  differenceText: {
    textAlign: "center",
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Default color for "Thu - chi ="
  },
  differenceAmount: {
    color: "#FF00FF", // Purple color for the amount
    fontWeight: "bold", // Bold font for the amount
  },

  // Chart
  chartContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  // Legend
  legendList: {
    marginTop: 5,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5, // Adjust spacing between items
  },
  legendColorBox: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    borderRadius: 5, // Circle shape
  },
  legendTextContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between", // Space between category and percentage
    alignItems: "center",
  },
  legendCategoryText: {
    fontSize: 16,
    color: "#333", // Text color for category
  },
  legendValueText: {
    fontSize: 16,
    color: "#333", // Text color for value
    fontWeight: "bold", // Make value bold
    marginRight: 15,
  },
  showMoreButton: {
    marginTop: 10,
    alignItems: "center",
  },
  showMoreText: {
    color: "#FF4081", // Pink color
    fontSize: 14,
    fontWeight: "bold",
  },

  //footer
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
  iconfooter: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  activeIcon: {
    tintColor: "blue",
  },
});

export default ChiTieu;
