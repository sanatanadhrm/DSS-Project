import { Card } from "antd";
import { MappingComp } from "../components/Mapping";
import db from "../lib/db.json";
import { useEffect, useState } from "react";
import useAdminStore from "../store/useAdminStore.js";
import maps from "../assets/maps.png";

export const ParkingPage = () => {
  const [postiion, setPostiion] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [filter, setFilter] = useState<any>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dbParking: any = db.ParkingSection;
  const { sections } = useAdminStore();
  useEffect(() => {
    if (postiion === "") return;
    const handleFully = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const list: any[] = [];
      dbParking[postiion].map((item: string) => {
        if (sections[Object.keys(item)] === "not_full") {
          list.push(item);
        }
      });
      setFilter(list);
    };
    handleFully();
  }, [sections, postiion]);
  console.log(filter);
  return (
    <div className="flex flex-col gap-4">
      <span className="text-4xl">Masuk Lewat Pintu Gerbang...</span>
      <Card
        className="shadow-lg hover:shadow-xl cursor-pointer"
        style={{ width: 800 }}
        onClick={() => setPostiion("depan")}
      >
        Utama / Depan
      </Card>
      <Card
        className="shadow-lg hover:shadow-xl cursor-pointer"
        style={{ width: 800 }}
        onClick={() => setPostiion("belakang")}
      >
        Belakang
      </Card>
      <img
        src={maps}
        alt="maps"
        className={`h-[400px] ${postiion === "" ? "hidden" : ""}`}
      />
      <span className="text-4xl">Tempat Parkir yang Tersedia</span>
      <ol>
        {filter.map((item: string, i: number) => (
          <li key={i} className="text-lg font-semibold">
            {i + 1}. {Object.values(item)} -{" "}
            {Object.keys(item)[0].replace(/_/g, " ")}
          </li>
        ))}
      </ol>
    </div>
  );
};
