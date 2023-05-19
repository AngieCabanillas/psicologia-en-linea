import "./my-horario.css";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Modal, Spin } from "antd";
import MyHorarioCalendar from "./my-horario-calendar/my-horario-calendar";
import { ModalDeleteHorario } from "./modals/modal-delete-horario/modal-delete-horario";
import { ModalHorario } from "./modals/modal-horario/modal-horario";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const MyHorarioComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [modalInfoOpen, setModalInfoOpen] = useState<boolean>(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);
  const [titleState, setTitleState] = useState<string>("");

  useEffect(() => {
    setLoading(false);
  });

  const openModalCreate = () => {
    setTitleState("Crear Horario");
    setModalInfoOpen(true);
  };

  const openModalEdit = () => {
    setTitleState("Editar Horario");
    setModalInfoOpen(true);
  };

  const openModalDelete = () => {
    setModalDeleteOpen(true);
  };

  const closeModalHorario = () => {
    setModalInfoOpen(false);
  };

  const closeModalDelete = () => {
    setModalDeleteOpen(false);
  };

  return (
    <>
      <Spin spinning={loading} className="h-100" indicator={circleIcon}>
        <div className="content p-20">
          <div className="py-2"></div>

          <div className="my-8 shadow-xl rounded-lg w-full h-28 px-8 flex flex-row justify-between items-center">
            <div className="text-xl">Horario de Día:</div>
            <div className="text-base" style={{ color: "#878D96" }}>
              Martes, Jueves, Viernes 9:00 AM - 12:30 PM
            </div>
            <div className="flex gap-x-3">
              <button className="btn-editar" onClick={openModalEdit}>
                Editar
              </button>
              <button className="btn-eliminar" onClick={openModalDelete}>
                Eliminar
              </button>
            </div>
          </div>

          <div className="py-4 w-full flex justify-center">
            <button className="btn-editar" onClick={openModalCreate}>
              Crear Horario
            </button>
          </div>

          <MyHorarioCalendar />

          <ModalHorario
            modalOpen={modalInfoOpen}
            setModalClose={closeModalHorario}
            title={titleState}
          />

          <ModalDeleteHorario
            modalDeleteOpen={modalDeleteOpen}
            setModalDeleteClose={closeModalDelete}
          />
        </div>
      </Spin>
    </>
  );
};
