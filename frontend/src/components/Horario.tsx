import './Horario.css'

export function HorarioComponent(props){

    return(
        <div className="horario flex">
            <div className="horario__side w-2"></div>
            <div className="horario__datos w-full p-3 flex items-center justify-between">
                <div className="horario__horas font-medium">
                    {props.hora}
                </div>
                <button className="horario__button font-semibold h-10 w-24">
                    Reservar
                </button>
            </div>
        </div>
    )
}