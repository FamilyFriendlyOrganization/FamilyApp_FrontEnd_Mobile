import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./Component/Welcome/Welcome"; // Thêm màn hình Welcome
import SignUp from "./Component/SignUp/SignUp";
import Login from "./Component/Login/Login";
import Home from "./Component/Home/Home";

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
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
