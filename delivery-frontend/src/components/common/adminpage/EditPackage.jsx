import { useEffect, useState } from "react";
import PackageService from "../../service/PackageService";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPackage() {
  const [upackage, setUpackage] = useState({
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
    // status: "CREATED",
  });

  const [reqPackage, setReqPackage] = useState({
    senderName: "",
    senderPhone: "",
    senderDepartment: 0,
    packageType: "",
    packageDescription: "",
    packagePrice: "",
    packageParams: "",
    recipientName: "",
    recipientPhone: "",
    recipientDepartment: 0,
  });
  const { packageId } = useParams();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpackage({ ...upackage, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setReqPackage(upackage);
    console.log(reqPackage);

    try {
      const token = localStorage.getItem("token");
      await PackageService.editPackage(packageId, upackage, token);
      console.log(upackage);
      alert("Package edited successfully!");
      navigate("/user/dashboard");
    } catch (error) {
      console.log("Creation error:", error);
      alert("An error has occurred while editing package!");
    }
  };

  useEffect(() => {
    fetchPackageInfo();
  }, []);

  const fetchPackageInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await PackageService.getPackageById(packageId, token);
      setUpackage(response.upackage);
      console.log(response);
    } catch (error) {
      console.error("Error fetching package information:", error);
    }
  };

  return (
    <div className="mx-auto mt-24 border-2 border-solid border-gray-300 rounded-md p-5 w-1/2">
      <h2 className="text-2xl font-semibold">
        Edit package: ID ({upackage.id})
      </h2>
      <form
        className="w-auto grid grid-rows-1 grid-flow-col mt-5"
        onSubmit={handleSubmit}
      >
        <div className=" mx-auto">
          <h3 className="font-semibold text-xl">Sender info:</h3>
          <label>Sender name:</label>
          <input
            type="text"
            name="sender_name"
            value={upackage.sender_name}
            onChange={handleInputChange}
            required
          />
          <br></br>
          <label>Sender phone:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="sender_phone"
            value={upackage.sender_phone}
            onChange={handleInputChange}
            placeholder="senderPhone"
          ></input>
          <label>Sender department:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="sender_department"
            // value={upackage.sender_department.number}
            onChange={handleInputChange}
            placeholder=""
          ></input>
        </div>
        <div className="">
          <h3 className="font-semibold text-xl">Package info:</h3>
          <label>Package type:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="package_type"
            value={upackage.package_type}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <label>Package description:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="package_description"
            value={upackage.package_description}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <label>Package price:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="package_price"
            value={upackage.package_price}
            onChange={handleInputChange}
          ></input>
          <br></br>
          <label>Package params:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="package_params"
            value={upackage.package_params}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Recipient info:</h3>
          <label>Recipirnt name:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="recipient_name"
            value={upackage.recipient_name}
            onChange={handleInputChange}
            placeholder=""
          ></input>
          <br></br>
          <label>Recipient phone:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="recipient_phone"
            value={upackage.recipient_phone}
            onChange={handleInputChange}
            placeholder=""
          ></input>
          <label>Recipient department:</label>
          <input
            className="bg-gray-200"
            type="text"
            name="recipient_department"
            // value={upackage.recipient_department.number}
            onChange={handleInputChange}
            placeholder=""
          ></input>
        </div>
        <button className="bg-red-600 text-white border-none rounded-lg w-auto px-2 m-auto">
          Edit
        </button>
      </form>
    </div>
  );
}
