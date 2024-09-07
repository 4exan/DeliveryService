import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PackageService from "../service/PackageService";

export default function CreateInvoice() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sender_name: "",
    sender_phone: "",
    sender_department: 0,
    package_type: "",
    package_description: "",
    package_price: "",
    package_params: "",
    recipient_name: "",
    recipient_phone: "",
    recipient_department: 0,
    status: "CREATED",
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await PackageService.createPackage(formData, token);

      setFormData({
        sender_name: "",
        sender_phone: "",
        sender_department: 0,
        package_type: "",
        package_description: "",
        package_price: "",
        package_params: "",
        recipient_name: "",
        recipient_phone: "",
        recipient_department: 0,
        status: "CREATED",
      });
      alert("Package created successfully!");
      navigate("/user/dashboard");
    } catch (error) {
      console.log("Creation error:", error);
      alert("An error has occurred while creating package!");
    }
  };

  return (
    <div className="package-form-container">
      <form onSubmit={handleSubmit}>
        <h3 className="font-semibold">Sender info:</h3>
        <div className="package-form-grid">
          <div className="package-form-item sender">
            <lable>Sender name:</lable>
            <br></br>
            <input
              type="text"
              name="sender_name"
              value={formData.sender_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item sender">
            <lable>Sender phone:</lable>
            <br></br>
            <input
              type="text"
              name="sender_phone"
              value={formData.sender_phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item sender">
            <lable>Sender department:</lable>
            <br></br>
            <input
              type="number"
              name="sender_department"
              value={formData.sender_department}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <h3 className="font-semibold">Package info:</h3>
        <div className="package-form-grid">
          <div className="package-form-item package">
            <lable>Package type:</lable>
            <br></br>
            <input
              type="text"
              name="package_type"
              value={formData.package_type}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item package">
            <lable>Package description:</lable>
            <br></br>
            <input
              type="text"
              name="package_description"
              value={formData.package_description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item package">
            <lable>Package price:</lable>
            <br></br>
            <input
              type="text"
              name="package_price"
              value={formData.package_price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item package">
            <lable>Package parameters:</lable>
            <br></br>
            <input
              type="text"
              name="package_params"
              value={formData.package_params}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <h3 className="font-semibold">Recipient info:</h3>
        <div className="package-form-grid">
          <div className="package-form-item recipient">
            <lable>Recipient name:</lable>
            <br></br>
            <input
              type="text"
              name="recipient_name"
              value={formData.recipient_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item recipient">
            <lable>Recipient phone:</lable>
            <br></br>
            <input
              type="text"
              name="recipient_phone"
              value={formData.recipient_phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="package-form-item recipient">
            <lable>Recipient departments:</lable>
            <br></br>
            <input
              type="number"
              name="recipient_department"
              value={formData.recipient_department}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button
          className="bg-delivery-red text-white rounded-md w-auto px-2 center"
          type="submit"
        >
          Create!
        </button>
      </form>
    </div>
  );
}
