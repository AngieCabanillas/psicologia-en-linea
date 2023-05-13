import './datos-especialista.css'

export function DatosEspecialistaPage(props) {

    return (
        <section className='presentation p-32 flex items-center justify-center' style={{ height: 'calc(100vh - 100px)' }}>
            <div className="presentation__img w-70  m-auto mr-20">
                <img className="mx-auto w-full block" src="/img/user.png" alt="Foto de Usuario" />
            </div>
            <div className="presentation__datos relative">
                <div className="presentation__title relative z-10">
                    {props.nombre}
                </div>
                <div className="presentation__undeline absolute rounded w-auto top-8 h-8 z-0 inset-0"></div>
                <div className="presentation__paragraph text-justify">
                    {props.descripcion}
                    La Dra. Gonzales tiene más de 10 años de experiencia en el campo de la salud mental. Ha trabajado en diferentes hospitales y clínicas en Lima y Trujillo, donde ha tratado una amplia gama de trastornos mentales, incluyendo depresión, ansiedad, trastornos del estado de ánimo, trastornos de personalidad, trastornos alimentarios y adicciones. También ha participado en proyectos de investigación y publicado artículos en revistas científicas especializadas en psiquiatría.
              </div>
            </div>
        </section>

    )
}