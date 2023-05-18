import { Tooltip, Popconfirm } from 'antd'
import './Horario.css'

export function HorarioComponent(props){

    return(
        <div className="horario flex">
            <div className="horario__side w-2"></div>
            <div className="horario__datos w-full p-3 flex items-center justify-between">
                <div className="horario__horas font-medium">
                    {props.hora}
                </div>
                <Tooltip title="Reservar">
                    <Popconfirm
                        key={1}
                        title="¿Está seguro de reservar este horario?"
                        onConfirm={() => console.log('reservar')}
                        onCancel={() => console.log("cancel")}
                        okText="Sí"
                        cancelText="No"
                        okButtonProps={{ style: { background: '#2d3648' } }}
                    >
                        <button className="horario__button font-semibold h-10 w-24">
                            Reservar
                        </button>
                    </Popconfirm>
                </Tooltip>
            </div>
        </div>
    )
}