import { useEffect, useState } from "react";
import PackageService from "../../service/PackageService";
import { useParams } from "react-router-dom";

export default function EditPackage() {
  const [upackage, setUpackage] = useState({});
  const { packageId } = useParams();

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
    <div className="invoice-info-container">
      <h2>Edit package: ID ({upackage.id})</h2>
      <form>
        <div className="package-info-child height20">
          <h3>Sender info:</h3>
          <label>Sender name:</label>
          <input type="text" value={upackage.senderName} placeholder=""></input>
          <br></br>
          <label>Sender phone:</label>
          <input
            type="text"
            value={upackage.senderPhone}
            placeholder=""
          ></input>
          <br></br>
          <label>Sender department:</label>
          <input
            type="text"
            value={upackage.senderDepartment.number}
            placeholder=""
          ></input>
        </div>
        <div className="package-info-child height20">
          <h3>Package info:</h3>
          <label>Package type:</label>
          <input type="text" value={upackage.packageType}></input>
          <br></br>
          <label>Package description:</label>
          <input type="text" value={upackage.packageDescription}></input>
          <br></br>
          <label>Package price:</label>
          <input type="text" value={upackage.packagePrice}></input>
          <br></br>
          <label>Package params:</label>
          <input type="text" value={upackage.packageParams}></input>
        </div>
        <div className="package-info-child height20">
          <h3>Recipient info:</h3>
          <label>Recipirnt name:</label>
          <input
            type="text"
            value={upackage.recipientName}
            placeholder=""
          ></input>
          <br></br>
          <label>Recipient phone:</label>
          <input
            type="text"
            value={upackage.recipientPhone}
            placeholder=""
          ></input>
          <br></br>
          <label>Recipient department:</label>
          <input
            type="text"
            value={upackage.senderDepartment.number}
            placeholder=""
          ></input>
        </div>
        <button className="action-btn green ml">Edit</button>
      </form>
    </div>
  );
}
