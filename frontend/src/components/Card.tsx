import './Card.css'

export function CardComponent(props){

    return(
        <div className="contenedor-card p-10 max-w-xl flex items-center mb-10">
            <div className="contenedor-img">
                <img className="imagen" src="../../public/img/user.png" alt="foto de usuario" />
            </div>
            <div className="info text-justify">
                <div className="nombres mb-5">
                    {props.nombres}
                </div>
                <div className="detalles mb-5">
                    {props.detalles}
                </div>
                <div>
                    <button className="btn-ver">
                        Ver Perfil
                    </button>
                </div>
            </div>
        </div>
    )
}