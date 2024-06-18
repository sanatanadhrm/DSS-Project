import { Button } from "antd";
import logo from "../assets/LOGO_UPN_Tanpa_Kutip.png";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-evenly items-start w-screen gap-5">
      <div className="w-[500px]">
        <img src={logo} alt="random" />
      </div>
      <div className="flex flex-col w-[500px] h-full">
        <span className="text-4xl font-bold">
          Penerapan Decision Support System Terhadap Sistem Parkir di Lingkungan
          Universitas Pembangunan Nasional Veteran Jakarta
        </span>
        <p className="text-lg mt-5">
          Aplikasi ini bertujuan untuk membantu pengguna dalam menentukan tempat
          parkir yang tersedia di lingkungan Universitas Pembangunan Nasional
          Veteran Jakarta
        </p>
        <div className="flex justify-center h-full mt-10 md:mt-[70px] gap-5">
          <Button
            type="primary"
            className="w-[150px] md:w-[200px] h-[50px] rounded-full text-lg font-semibold transform hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            onClick={() => {
              navigate("/parking");
            }}
          >
            Mulai
          </Button>
          <Button
            type="primary"
            className="w-[150px] md:w-[200px] h-[50px] rounded-full text-lg font-semibold transform hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: "#1890ff", borderColor: "#1890ff" }}
            onClick={() => {
              navigate("/admin");
            }}
          >
            Set Parking - Admin
          </Button>
        </div>
      </div>
    </div>
  );
};
