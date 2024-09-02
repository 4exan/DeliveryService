import axios from "axios";

export default class PackageService {
  static BASE_URL = "http://localhost:8080";

  static async getUserPackage(token) {
    try {
      const response = await axios.get(
        `${PackageService.BASE_URL}/package/get-all-users`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}
