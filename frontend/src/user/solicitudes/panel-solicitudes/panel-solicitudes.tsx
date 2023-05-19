import { Button, DatePicker, DatePickerProps } from "antd";
import { ModalSolicitudes } from "../modal-solicitudes/modal-solicitudes";
import { useState } from "react";

export const PanelSolicitudes = () => {
  const [modalSolicitudesOpen, setModalSolicitudesOpen] =
    useState<boolean>(false);

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
      <div className="w-full flex gap-x-5 py-3">
        <div className="text-base  py-3">Rango de fecha:</div>
        <DatePicker onChange={onChange} />
      </div>

      <div className="w-full py-4">
        <div className="w-full flex justify-between items-center border p-6">
          <div className="w-10 h-10 bg-slate-500"></div>
          <div className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </div>
          <div className="flex gap-x-4">
            <Button
              type="primary"
              style={{ backgroundColor: "#000" }}
              onClick={openModalSolicitudes}
            >
              Ver
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

        <div className="w-full flex justify-between items-center border p-6">
          <div className="w-10 h-10 bg-slate-500"></div>
          <div className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </div>
          <div className="flex gap-x-4">
            <Button
              type="primary"
              style={{ backgroundColor: "#000" }}
              onClick={openModalSolicitudes}
            >
              Ver
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
      </div>

      <ModalSolicitudes
        modalSolicitudesOpen={modalSolicitudesOpen}
        setModalSolicitudesClose={closeModalSolicitudes}
      />
    </div>
  );
};
