import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Tabs, TabsProps } from "antd";
import { PanelSolicitudes } from "./panel-solicitudes/panel-solicitudes";

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const SolicitudesComponent = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Todas`,
      children: <PanelSolicitudes />,
    },
    {
      key: "2",
      label: `Pendientes`,
      children: <PanelSolicitudes />,
    },
    {
      key: "3",
      label: `Aceptadas`,
      children: <PanelSolicitudes />,
    },
  ];

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      <Spin spinning={loading} className="h-100" indicator={circleIcon}>
        <div className="content p-20">
          <div className="py-2"></div>

          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </Spin>
    </>
  );
};
