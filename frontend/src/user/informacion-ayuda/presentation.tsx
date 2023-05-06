import './presentation.css'

export const PresentationInformationPage = () => {
    return (
        <section className='presentation p-20 flex items-center justify-center' style={{height: 'calc(100vh - 100px)'}}>
            <div className='content text-center'>
                <div className='max-w-lg relative'>
                    <div className="title relative z-10">
                        Información de Ayuda
                    </div>
                    <div className='subrayado absolute rounded w-96 top-8 h-8 z-0 inset-0 mx-auto' />
                    <div className='paragraph mt-10'>
                    Nuestra sección de ayuda psicológica está diseñada para ofrecerte apoyo emocional y orientación personalizada para superar momentos difíciles y mejorar tu bienestar emocional. Encontrarás información y recursos útiles para manejar el estrés, la ansiedad, la depresión, problemas alimenticios o de pareja
                    </div>
                </div>
            </div>
        </section>

    )
}