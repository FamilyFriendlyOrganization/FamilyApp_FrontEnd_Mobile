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
import MainProfile from "./Component/Profile/MainProfile";
import CreateFamily from "./Component/Family/CreateFamily";
import Join from "./Component/Family/Join";
import DatHen from "./Component/Calendar/DatHen";
import AnUong from "./Component/QuanLy/AnUong";
import MuaSam from "./Component/QuanLy/MuaSam";
import DiChuyen from "./Component/QuanLy/DiChuyen";
import Notification from "./Component/Notification/Notification";
import NotificationDetail from "./Component/Notification/DetailNotification";
import FamilyManagement from "./Component/Family/FamilyManagement";
import FlightBookingPage from "./Component/More/FeatureMore/FlightBookingPage/FlightBookingPage";
import FlightSearchResultsPage from "./Component/More/FeatureMore/FlightBookingPage/FlightSearchResultsPage";
import PassengerInfoPage from "./Component/More/FeatureMore/FlightBookingPage/PassengerInfoPag";
import HotelSearchPage from "./Component/More/FeatureMore/FlightBookingPage/HotelSearchPage";
import HotelSearch from "./Component/More/FeatureMore/FlightBookingPage/HotelSearch";
import RoomDetailPage from "./Component/More/FeatureMore/FlightBookingPage/RoomDetailPage";
import TravelDestinationsPage from "./Component/More/FeatureMore/PopularService.jsx/TravelDestinationsPage";
import ClothingPage from "./Component/More/FeatureMore/PopularService.jsx/ClothingPage";
import MovieSuggestionsPage from "./Component/More/FeatureMore/PopularService.jsx/MovieSuggestionsPage";
import InvoicePage from "./Component/More/FeatureMore/Invoice/InvoicePage";
import BillPage from "./Component/More/FeatureMore/Invoice/BillPage";
import NetworkProviderPage from "./Component/More/FeatureMore/Invoice/NetworkProviderPage";
import BillInputPage from "./Component/More/FeatureMore/Invoice/BillInputPage";
import WaterProvidersPage from "./Component/More/FeatureMore/Invoice/WaterProvidersPage";
import BillInputPage1 from "./Component/More/FeatureMore/Invoice/BillInputPage1";
import EducationProviderPage from "./Component/More/FeatureMore/Invoice/EducationProviderPage";
import BillInputPage2 from "./Component/More/FeatureMore/Invoice/BillInputPage2";
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
        <Stack.Screen name="MainProfile" component={MainProfile} />
        <Stack.Screen name="CreateFamily" component={CreateFamily} />
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="DatHen" component={DatHen} />
        <Stack.Screen name="AnUong" component={AnUong} />
        <Stack.Screen name="MuaSam" component={MuaSam} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="DiChuyen" component={DiChuyen} />
        <Stack.Screen
          name="NotificationDetail"
          component={NotificationDetail}
        />
        <Stack.Screen name="FamilyManagement" component={FamilyManagement} />
        <Stack.Screen name="FlightBookingPage" component={FlightBookingPage} />
        <Stack.Screen
          name="FlightSearchResultsPage"
          component={FlightSearchResultsPage}
        />
        <Stack.Screen name="PassengerInfoPage" component={PassengerInfoPage} />
        <Stack.Screen name="HotelSearchPage" component={HotelSearchPage} />
        <Stack.Screen name="HotelSearch" component={HotelSearch} />
        <Stack.Screen name="RoomDetailPage" component={RoomDetailPage} />
        <Stack.Screen
          name="TravelDestinationsPage"
          component={TravelDestinationsPage}
        />
        <Stack.Screen name="ClothingPage" component={ClothingPage} />
        <Stack.Screen
          name="MovieSuggestionsPage"
          component={MovieSuggestionsPage}
        />
        <Stack.Screen name="InvoicePage" component={InvoicePage} />
        <Stack.Screen name="BillPage" component={BillPage} />
        <Stack.Screen
          name="NetworkProviderPage"
          component={NetworkProviderPage}
        />
        <Stack.Screen name="BillInputPage" component={BillInputPage} />
        <Stack.Screen
          name="WaterProvidersPage"
          component={WaterProvidersPage}
        />
        <Stack.Screen name="BillInputPage1" component={BillInputPage1} />
        <Stack.Screen
          name="EducationProviderPage"
          component={EducationProviderPage}
        />
        <Stack.Screen name="BillInputPage2" component={BillInputPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
