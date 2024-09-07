import axios from "axios";

export default class PackageService {
  static BASE_URL = "http://localhost:8080";

  static async getPackageById(id, token) {
    try {
      const response = await axios.get(
        `${PackageService.BASE_URL}/package/get/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserPackage(token) {
    try {
      const response = await axios.get(
        `${PackageService.BASE_URL}/package/get/my`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
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
    } catch (error) {
      throw error;
    }
  }

  static async editPackage(id, packageData, token) {
    try {
      const response = await axios.put(
        `${PackageService.BASE_URL}/package/edit/${id}`,
        packageData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async changePackageStatus(id, packageData, token) {
    try {
      const response = await axios.put(
        `${PackageService.BASE_URL}/package/status/${id}`,
        packageData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
