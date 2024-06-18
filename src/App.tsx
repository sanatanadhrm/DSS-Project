import { Outlet } from "react-router-dom";
import "./App.css";
import { Dropdown, MenuProps } from "antd";
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span>Sanatana Dharma</span>,
  },
  {
    key: "2",
    label: <span>Nathan Gilbert Pasaribu</span>,
  },
  {
    key: "3",
    label: <span>Triandika Bayu Satria</span>,
  },
  {
    key: "4",
    label: <span>Nicholas Rayden</span>,
  },
  {
    key: "5",
    label: <span>Alexander Bryan Oktavianus</span>,
  },
];

function App() {
  return (
    <div
      className="h-full"
      style={{
        overflowX: "hidden",
      }}
    >
      <div className="bg-blue-600 p-4 flex justify-between items-center shadow-md fixed w-screen z-50">
        <div className="text-white text-2xl font-bold">
          DSS Parking UPNVJ Pondok Labu
        </div>
        <div>
          <Dropdown menu={{ items }} placement="bottom">
            <span className="text-white cursor-pointer mr-12">
              Nama Anggota
            </span>
          </Dropdown>
        </div>
      </div>
      <div
        className="flex flex-row p-10 justify-evenly items-start w-screen gap-5 mt-28"
        style={{
          overflowY: "auto",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
