import { Button, Modal, Select, TimePicker } from "antd";
import { Controller, useForm } from "react-hook-form";
import { ScheduleType } from "../../../../shared/types/schedule.type";
import { useSerenityContext } from "../../../../shared/contexts/SerenityProvider";
import { ScheduleResolver } from "./modal-horario.yup";
import { useState } from "react";
import moment from "moment";

type ModalHorarioProps = {
  modalOpen: boolean;
  setModalClose: () => void;
  title: string;
  isEdit: boolean;
};

const OPTIONS = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];

export const ModalHorario = ({
  modalOpen,
  setModalClose,
  title,
  isEdit,
}: ModalHorarioProps) => {
  const { user } = useSerenityContext();
  const [timeRange, setTimeRange] = useState<any>(null);

  const { getValues, control } = useForm<Omit<ScheduleType, "id">>({
    resolver: ScheduleResolver,
    mode: "all",
    defaultValues: {
      days: "[]",
      dateStart: new Date(),
      dateEnd: new Date(),
      detail: "-",
      userId: user.getUser()?.id,
    },
  });

  const filteredOptions = OPTIONS.filter(
    (o) => !JSON.parse(getValues().days).includes(o)
  );

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

      <Controller
        name="days"
        control={control}
        render={({ field }) => (
          <Select
            mode="multiple"
            placeholder="Seleccione los días de la semana"
            value={JSON.parse(field.value)}
            onChange={(data) => {
              field.onChange(JSON.stringify(data));
            }}
            style={{ width: "100%" }}
            options={filteredOptions.map((item) => ({
              value: item,
              label: item,
            }))}
          />
        )}
      />

      <div className="text-base flex justify-center py-3">Horario:</div>
      <TimePicker.RangePicker
        className="w-full"
        placeholder={["Inicio", "Fin"]}
        value={timeRange && [moment(timeRange[0]), moment(timeRange[1])]}
        onChange={(dates) => {
          if (dates && dates.length === 2) {
            const startDate = dates[0]?.toDate();
            const endDate = dates[1]?.toDate();
            setTimeRange([startDate, endDate]);
          } else {
            setTimeRange(null);
          }
        }}
      />
    </Modal>
  );
};
