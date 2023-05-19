import { Button, Modal } from "antd";

type ModalDeleteHorarioProps = {
  modalDeleteOpen: boolean;
  setModalDeleteClose: () => void;
};

export const ModalDeleteHorario = ({
  modalDeleteOpen,
  setModalDeleteClose,
}: ModalDeleteHorarioProps) => {
  return (
    <Modal
      title="Eliminar Horario"
      centered
      open={modalDeleteOpen}
      onCancel={setModalDeleteClose}
      footer={
        <div className="py-3 flex justify-center items-center gap-x-2">
          <Button
            type="primary"
            style={{ backgroundColor: "#2d3648" }}
            onClick={setModalDeleteClose}
          >
            Aceptar
          </Button>
          <Button
            type="primary"
            style={{ border: "1px solid #2d3648", color: "black" }}
            onClick={setModalDeleteClose}
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

      <div className="text-base flex justify-center">
        Estás seguro/a de eliminar este horario?
      </div>
    </Modal>
  );
};
