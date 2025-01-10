import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

const AnUong = () => {
  const [activeTab, setActiveTab] = useState("money");
  const [timeRange, setTimeRange] = useState("week");
  const [selectedBar, setSelectedBar] = useState(null); // Track the selected bar

  const chartData =
    timeRange === "week"
      ? [
          { x: "28", y: 30000 },
          { x: "29", y: 50000 },
          { x: "30", y: 20000 },
          { x: "31", y: 80000 },
          { x: "1", y: 90000 },
          { x: "2", y: 60000 },
          { x: "3", y: 100000 },
        ]
      : [
          { x: "5", y: 200000 },
          { x: "6", y: 150000 },
          { x: "7", y: 180000 },
          { x: "8", y: 220000 },
          { x: "9", y: 300000 },
          { x: "10", y: 250000 },
        ];

  const [transactions, setTransactions] = useState([
    {
      date: "30/10/2024",
      data: [
        {
          id: 1,
          description: "Chuyển tiền đến Nguyễn Thúy Vân",
          amount: -30000,
        },
        { id: 2, description: "Chuyển tiền đến Đặng Thị Trúc", amount: -40000 },
        {
          id: 3,
          description: "Chuyển tiền đến Đinh Thị Bích Ngọc",
          amount: -100000,
        },
        { id: 4, description: "Chuyển tiền đến Hồ Văn Hải", amount: -90000 },
        {
          id: 5,
          description: "Chuyển tiền đến Nguyễn Xuân Nhựt",
          amount: -50000,
        },
      ],
    },
    {
      date: "29/10/2024",
      data: [
        { id: 1, description: "Chuyển tiền đến Nguyễn Thị A", amount: -50000 },
        { id: 2, description: "Chuyển tiền đến Nguyễn Thị B", amount: -60000 },
      ],
    },
  ]);

  const renderTransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      {/* Icon Section */}
      <View style={styles.transactionIconContainer}>
        <Image
          source={require("../../assets/AnUong/Bank.png")}
          style={styles.transactionIcon}
        />
      </View>

      {/* Description + Category Section */}
      <View style={styles.transactionDetails}>
        <Text style={styles.transactionDescription} numberOfLines={3}>
          {item.description}
        </Text>
        <View style={styles.transactionCategory}>
          <Image
            source={require("../../assets/AnUong/fried-chicken.png")}
            style={styles.categoryIcon}
          />
          <Text style={styles.categoryText}>Ăn uống</Text>
        </View>
      </View>

      {/* Amount Section */}
      <Text style={styles.transactionAmount}>
        {item.amount.toLocaleString()}đ
      </Text>
    </View>
  );

  const renderTransactionSection = ({ item }) => (
    <View style={styles.transactionSection}>
      {/* Date Header */}
      <View style={styles.transactionDateHeader}>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      {/* Transactions List */}
      <FlatList
        data={item.data}
        renderItem={renderTransactionItem}
        keyExtractor={(transaction) => transaction.id.toString()}
      />
    </View>
  );

  const handleBarPress = (index) => {
    setSelectedBar(index); // Set the selected bar
  };

  /* Utility function to format the label */
  const formatLabel = (value) => {
    return new Intl.NumberFormat("en-US").format(value) + "đ";
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header title="Ăn Uống" />

      {/* Chart Section (Fixed) */}
      <View style={styles.chartContainer}>
        <View style={styles.timeRangeButtons}>
          <TouchableOpacity
            style={[styles.button, timeRange === "week" && styles.activeButton]}
            onPress={() => setTimeRange("week")}
          >
            <Text style={styles.buttonText}>Theo tuần</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              timeRange === "month" && styles.activeButton,
            ]}
            onPress={() => setTimeRange("month")}
          >
            <Text style={styles.buttonText}>Theo tháng</Text>
          </TouchableOpacity>
        </View>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={20}
          height={Dimensions.get("window").height * 0.3}
        >
          {/* X Axis */}
          <VictoryAxis
            style={{
              ticks: { stroke: "transparent" },
              tickLabels: { fontSize: 10, padding: 5 },
            }}
            tickFormat={chartData.map((d) => d.x)}
          />

          {/* Y Axis */}
          <VictoryAxis
            dependentAxis
            style={{
              axis: { stroke: "transparent" },
              grid: { stroke: "#ddd", strokeWidth: 1 },
              tickLabels: { fontSize: 10, padding: 5, fill: "transparent" },
            }}
          />

          {/* Bar Chart */}
          <VictoryBar
            data={chartData}
            x="x"
            y="y"
            barWidth={timeRange === "week" ? 35 : 40}
            style={{
              data: {
                fill: ({ index }) =>
                  index === selectedBar ? "#cc00cc" : "#ff00ff", // Highlight the selected bar
              },
            }}
            events={[
              {
                target: "data",
                eventHandlers: {
                  onPress: (_, props) => {
                    handleBarPress(props.index); // Handle bar press
                  },
                },
              },
            ]}
            labels={
              ({ datum, index }) =>
                index === selectedBar ? formatLabel(datum.y) : "" // Show value above selected bar
            }
            labelComponent={
              <VictoryLabel
                style={{
                  fontSize: 12, // Set the font size
                  fontWeight: "bold", // Set the font weight to bold
                  fill: "#000", // Optionally set the color of the label
                }}
              />
            }
          />
        </VictoryChart>
      </View>

      <Text style={styles.transactionText}>
        {timeRange === "week"
          ? "Giao dịch từ 28/10 - 3/11"
          : "Giao dịch tháng 10"}
      </Text>

      {/* Transaction Section (Scrollable) */}
      <FlatList
        data={transactions}
        renderItem={renderTransactionSection}
        keyExtractor={(item) => item.date}
        contentContainerStyle={{ paddingBottom: 100 }} // Add space for footer
      />

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Header
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

  // main
  // Chart
  chartContainer: {
    padding: 5,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  timeRangeButtons: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: "white",
  },
  activeButton: {
    backgroundColor: "pink",
  },

  buttonText: {
    color: "black",
    fontWeight: "bold",
  },

  // Transaction
  transactionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Dark text color
    textAlign: "left",
    margin: 15, // Adds space around the text
  },
  transactionSection: {
    margin: 10,
    borderWidth: 1, // Adds a border
    borderColor: "#ddd", // Light gray border color
    borderRadius: 10, // Rounded corners
    overflow: "hidden", // Ensure the content stays within the container
    backgroundColor: "#fff", // White background for the section
  },
  transactionDateHeader: {
    backgroundColor: "#f0f8ff", // Light blue background for the header
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333", // Darker color for visibility
  },
  transactionItem: {
    flexDirection: "row", // Main row container
    margin: 10,
    padding: 10,
    alignItems: "flex-start", // Align items to the top
    justifyContent: "space-between", // Distribute space
    borderWidth: 1, // Border around the entire item
    borderColor: "#ddd", // Light gray border
    borderRadius: 8, // Rounded corners
    backgroundColor: "#fff", // Background color for contrast
  },
  transactionIconContainer: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1, // Thin border around the icon
    borderColor: "#ccc", // Light gray color for the border
    borderRadius: 20, // Circle shape
    marginRight: 20, // Space between icon and text
  },
  transactionIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  transactionDetails: {
    flex: 1, // Fill available space
    flexDirection: "column", // Stack description and category vertically
  },
  transactionDescription: {
    fontSize: 14,
    fontWeight: "bold",
    flexWrap: "wrap", // Wrap text if it overflows
  },
  transactionCategory: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  categoryIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 5,
  },
  categoryText: {
    fontSize: 12,
    color: "#555",
  },
  transactionAmount: {
    position: "absolute", // Position amount at the bottom-right
    bottom: 10, // Adjust distance from bottom
    right: 10, // Adjust distance from right
    fontSize: 14,
    fontWeight: "bold",
  },

  // Footer
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

export default AnUong;
