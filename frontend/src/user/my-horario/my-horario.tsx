import "./my-horario.css";
import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import MyHorarioCalendar from "./my-horario-calendar/my-horario-calendar";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const MyHorarioComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  });

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
              <button className="btn-editar">Editar</button>
              <button className="btn-eliminar">Eliminar</button>
            </div>
          </div>

          <div className="my-8 shadow-xl rounded-lg w-full h-28 px-8 flex flex-row justify-between items-center">
            <div className="text-xl">Horario de Día:</div>
            <div className="text-base" style={{ color: "#878D96" }}>
              Martes, Jueves, Viernes 9:00 AM - 12:30 PM
            </div>
            <div className="flex gap-x-3">
              <button className="btn-editar">Editar</button>
              <button className="btn-eliminar">Eliminar</button>
            </div>
          </div>

          <div className="my-8 shadow-xl rounded-lg w-full h-28 px-8 flex flex-row justify-between items-center">
            <div className="text-xl">Horario de Día:</div>
            <div className="text-base" style={{ color: "#878D96" }}>
              Martes, Jueves, Viernes 9:00 AM - 12:30 PM
            </div>
            <div className="flex gap-x-3">
              <button className="btn-editar">Editar</button>
              <button className="btn-eliminar">Eliminar</button>
            </div>
          </div>

          <div className="py-4 w-full flex justify-center">
            <button className="btn-editar">Crear Horario</button>
          </div>

          <MyHorarioCalendar />
        </div>
      </Spin>
    </>
  );
};
