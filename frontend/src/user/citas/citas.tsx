import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const CitasComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      <Spin spinning={loading} className="h-100" indicator={circleIcon}>
        <div className="content p-20" style={{ backgroundColor: "#EDF0F7" }}>
          <div className="py-10">
            <input
              className="w-full h-14 rounded-lg border-2 border-solid border-black p-4"
              type="text"
              placeholder="Buscar"
            />
          </div>

          <div>Lista de citas</div>
        </div>
      </Spin>
    </>
  );
};
