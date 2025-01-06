import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./Component/Welcome/Welcome"; // Thêm màn hình Welcome
import SignUp from "./Component/SignUp/SignUp";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";
import ChiTieu from "./Component/QuanLy/ChiTieu";
import Profile from "./Component/Profile/Profile";
import ReceiveMoney from "./Component/ReceiveMoney/ReceiveMoney";
import TransferMoneyPage from "./Component/TransferMoneyPage/TransferMoneyPage";
import TransferMoneyPage1 from "./Component/TransferMoneyPage/TransferMoneyPage1";
import TransactionResultPage from "./Component/TransferMoneyPage/TransactionResultPage";
import GiftPage from "./Component/GiftPage/GiftPage";
import GiftPage1 from "./Component/GiftPage/GiftPage1";
import SelectFamily from "./Component/Family/SelectFamily";
import AppCalendar from "./Component/Calendar/Calendar";
import Family from "./Component/Family/Family";
import More from "./Component/More/More";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Ẩn header cho toàn bộ các màn hình
        }}
      >
        {/* Màn hình Welcome sẽ là màn hình đầu tiên */}
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="GiftPage1" component={GiftPage1} />
        <Stack.Screen name="GiftPage" component={GiftPage} />
        <Stack.Screen name="AppCalendar" component={AppCalendar} />
        <Stack.Screen
          name="TransactionResultPage"
          component={TransactionResultPage}
        />
        <Stack.Screen
          name="TransferMoneyPage1"
          component={TransferMoneyPage1}
        />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="SelectFamily" component={SelectFamily} />
        <Stack.Screen name="TransferMoneyPage" component={TransferMoneyPage} />
        <Stack.Screen name="ReceiveMoney" component={ReceiveMoney} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ChiTieu" component={ChiTieu} />
        <Stack.Screen name="Family" component={Family} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
