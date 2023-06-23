import { Button, DatePicker, DatePickerProps } from "antd";
import { ModalSolicitudes } from "../modal-solicitudes/modal-solicitudes";
import { useState, useEffect } from "react";
import { getReserveByUser } from "../../../shared/services/reserve.service";
import { useContext } from "react";
import { SerenityContext } from "../../../shared/contexts/SerenityProvider";



export const PanelSolicitudes = () => {
  const [modalSolicitudesOpen, setModalSolicitudesOpen] = useState<boolean>(false);
  const [reserves, setReserves] = useState([]);

  const context = useContext(SerenityContext);

  if (context === null) {
    throw new Error("useSerenityContext must be used within a SerenityProvider");
  }

  const { user } = context;
  const userId = user.getUser().id;


  useEffect(() => {
    const fetchReserves = async () => {
      try {
        const response = await getReserveByUser(userId);
        setReserves(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching reserves:", error);
      }
    };

    fetchReserves();
  }, []);

  const openModalSolicitudes = () => {
    setModalSolicitudesOpen(true);
  };

  const closeModalSolicitudes = () => {
    setModalSolicitudesOpen(false);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="w-full">
      <div className="w-full py-4">
        {reserves.map((reserve, index) => (
          <div key={index} className="w-full flex justify-between items-center border p-6 my-2">
            <div className="w-10 h-10 bg-slate-500"></div>
            <div className="text-base">{reserve.description}</div>
            <div className="flex gap-x-4">
              <Button
                type="primary"
                style={{ backgroundColor: "#000" }}
                onClick={() => openModalSolicitudes(reserve.id)}
              >
                Ver:
              </Button>
              <Button type="primary" style={{ backgroundColor: "#2d3648" }}>
                Aceptar
              </Button>
              <Button
                type="primary"
                style={{ border: "1px solid #2d3648", color: "black" }}
              >
                Rechazar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <ModalSolicitudes
        modalSolicitudesOpen={modalSolicitudesOpen}
        setModalSolicitudesClose={closeModalSolicitudes}
      />
    </div>
  );
};
