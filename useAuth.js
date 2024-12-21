import AsyncStorage from "@react-native-async-storage/async-storage";

// Keys for storing user data
const USER_TOKEN_KEY = "user_token";
const USER_INFO_KEY = "user_info";

class useAuth {
  // Bộ nhớ tạm để lưu trạng thái user trong RAM
  static user = null;

  // Đặt dữ liệu người dùng vào bộ nhớ tạm
  static setUser(data) {
    this.user = {
      token: data.token,
      displayName: data.displayName,
      email: data.email,
      accountId: data.accountId,
      username: data.username,
      accountStatus: data.accountStatus,
    };
  }

  // Lấy thông tin người dùng từ bộ nhớ tạm
  static getUser() {
    return this.user;
  }

  // Lưu dữ liệu đăng nhập vào AsyncStorage
  static async saveUserData(data) {
    try {
      // Đặt dữ liệu vào bộ nhớ tạm
      this.setUser(data);

      // Lưu token
      await AsyncStorage.setItem(USER_TOKEN_KEY, data.token);

      // Lưu thông tin người dùng khác
      const userInfo = JSON.stringify({
        displayName: data.displayName,
        email: data.email,
        accountId: data.accountId,
        username: data.username,
        accountStatus: data.accountStatus,
      });
      await AsyncStorage.setItem(USER_INFO_KEY, userInfo);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  }

  // Lấy token từ AsyncStorage
  static async getToken() {
    try {
      const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
      return token;
    } catch (error) {
      console.error("Error getting token:", error);
      return null;
    }
  }

  // Lấy thông tin người dùng từ AsyncStorage
  static async getUserInfo() {
    try {
      const userInfo = await AsyncStorage.getItem(USER_INFO_KEY);
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {
      console.error("Error getting user info:", error);
      return null;
    }
  }

  // Xoá dữ liệu người dùng
  static async clearUserData() {
    try {
      // Xoá khỏi bộ nhớ tạm
      this.user = null;

      // Xoá khỏi AsyncStorage
      await AsyncStorage.removeItem(USER_TOKEN_KEY);
      await AsyncStorage.removeItem(USER_INFO_KEY);
    } catch (error) {
      console.error("Error clearing user data:", error);
    }
  }
}

export default useAuth;
