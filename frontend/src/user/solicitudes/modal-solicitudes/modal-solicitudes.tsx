import { Button, Modal } from "antd";

type ModalSolicitudesProps = {
  modalSolicitudesOpen: boolean;
  setModalSolicitudesClose: () => void;
};

export const ModalSolicitudes = ({
  modalSolicitudesOpen,
  setModalSolicitudesClose,
}: ModalSolicitudesProps) => {
  return (
    <Modal
      title="Reserva de cita"
      centered
      open={modalSolicitudesOpen}
      onCancel={setModalSolicitudesClose}
      footer={
        <div className="py-3 flex justify-center items-center gap-x-2">
          <Button
            type="primary"
            style={{ backgroundColor: "#2d3648" }}
            onClick={setModalSolicitudesClose}
          >
            Cerrar
          </Button>
        </div>
      }
    >
      <div className="w-full py-6">
        <div className="flex gap-x-6 items-center">
          <div className="w-10 h-10 bg-slate-500 rounded-full"></div>
          <div className="text-base font-bold">Título de reserva</div>
        </div>

        <div className="py-6">
          <div className="text-base">Subtitulo de reserva</div>
          <div className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor
            sit amet, consectetur adipiscingLorem ipsum dolor sit amet,
            consectetur adipiscingLorem ipsum dolor sit amet, consectetur
            adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem
            ipsum dolor sit amet, consectetur adipiscing
          </div>

          <div className="text-base">Subtitulo de reserva</div>
        </div>
      </div>
    </Modal>
  );
};
