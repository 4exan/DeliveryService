import { useState } from "react";
import PackageService from "../../service/PackageService";
import { useNavigate } from "react-router-dom";

export default function PackageInfo() {
  const [packageId, setPackageId] = useState();
  const [upackage, setUPackage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await PackageService.getPackageById(packageId, token);
      console.log(response);
      setUPackage(response.upackage);
      navigate(`/admin/package/${packageId}`);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  if (upackage != null) {
    return (
      <div className="form-container">
        <h2>Package ID: {upackage.id}</h2>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-item input-number"
          type="number"
          placeholder="Enter package ID"
          value={packageId}
          onChange={(e) => setPackageId(e.target.value)}
        />
        <button type="submit" className="action-btn form-item">
          Find!
        </button>
      </form>
    </div>
  );
}
