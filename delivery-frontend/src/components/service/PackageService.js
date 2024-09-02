import axios from "axios";

export default class PackageService {
  static BASE_URL = "http://localhost:8080";

  static async getUserPackage(token) {
    try {
      const response = await axios.get(
        `${PackageService.BASE_URL}/package/get/my`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }

  static async createPackage(packageData, token) {
    try {
      const response = await axios.post(
        `${PackageService.BASE_URL}/package/new`,
        packageData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}
