import { Button, Modal, Select, TimePicker } from "antd";
import { useState } from "react";

type ModalHorarioProps = {
  modalOpen: boolean;
  setModalClose: () => void;
  title: string;
};

const OPTIONS = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];

export const ModalHorario = ({
  modalOpen,
  setModalClose,
  title,
}: ModalHorarioProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Modal
      title={title}
      centered
      open={modalOpen}
      onCancel={setModalClose}
      footer={
        <div className="py-3 flex justify-center items-center gap-x-2">
          <Button
            type="primary"
            style={{ backgroundColor: "#2d3648" }}
            onClick={setModalClose}
          >
            Guardar
          </Button>
          <Button
            type="primary"
            style={{ border: "1px solid #2d3648", color: "black" }}
            onClick={setModalClose}
          >
            Cancelar
          </Button>
        </div>
      }
    >
      <div className="my-8 shadow-xl rounded-lg w-full h-28 px-8 flex flex-row justify-between items-center">
        <div className="text-base">Horario de Día:</div>
        <div className="text-base" style={{ color: "#878D96" }}>
          Martes, Jueves, Viernes 9:00 AM - 12:30 PM
        </div>
      </div>

      <div className="text-base flex justify-center py-3">
        Días de la semana:
      </div>
      <Select
        mode="multiple"
        placeholder="Seleccione los días de la semana"
        value={selectedItems}
        onChange={setSelectedItems}
        style={{ width: "100%" }}
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />

      <div className="text-base flex justify-center py-3">Horario:</div>
      <TimePicker.RangePicker
        className="w-full"
        placeholder={["Inicio", "Fin"]}
      />
    </Modal>
  );
};
