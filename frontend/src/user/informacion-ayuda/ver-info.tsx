import './ver-info.css'
import { Spin, Tabs } from "antd"
import { LoadingOutlined, } from '@ant-design/icons'
import { useEffect, useState } from "react";
import { PresentationInformationPage } from "./presentation";
import TabPane from "antd/es/tabs/TabPane";


const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
export const InfoAyudaPag = () => {
    const [loading, setLoading] = useState<boolean>(true);

    
    


    useEffect(() => {
        setLoading(false)
    },);


    // const cardsPsicologia = categorias.map((especialista, id) => (
    //     <CardComponent key={id} nombres={especialista.nombres} detalles={especialista.detalles} />
    // ))


    return (
        <>
            <Spin spinning={loading} className="h-100" indicator={circleIcon}>
                <PresentationInformationPage />
                <section className='content p-20 -mb-32' style={{ backgroundColor: '#EDF0F7' }}>
                    <div className='content w-full'>
                        <Tabs
                            defaultActiveKey='1'
                            centered
                            size='large'
                        >
                            <TabPane tab='Inicio' key='1'>
                                <div className='descripcion mt-5 mb-10'>
                                    <div className='especialidad-title mb-5 text-center'>
                                        ¿Cómo obtener ayuda?
                                    </div>
                                    <div className='especialidad-paragraph text-justify'>
                                        No dudes en buscar ayuda psicológica si la necesitas. Habla con amigos o familiares cercanos o acude a un profesional. Serenity te ofrece una forma fácil y segura de encontrar especialistas en diferentes áreas de la psicología. Cuida tu bienestar emocional, no tengas miedo de pedir ayuda. Recuerda que no estás solo y hay personas dispuestas a ayudarte. ¡Toma el primer paso y pide ayuda hoy mismo!
                                    </div>
                                </div>
                                <div className="ayuda mt-10 mb-10">
                                    <div className='seccion-ayuda'>
                                       
                                       <div className="especialidad-title  mb-5 text-center ">
                                            ¿Dónde acceder a ayuda?
                                       </div>
                                       
                                            
                                        <section className="information mt-5 mb-10">
                                        <img className="rounded-md ml-5 "src="https://centropsicologiahemisferios.es/wp-content/uploads/2020/12/hemisferios-post-1.jpg" alt="psicologo" />
                                        <img className="rounded-md ml-5 "src="https://i1.wp.com/expresasalud.com/wp-content/uploads/2020/02/beneficios-de-la-terapia-psicologica-1.jpg" alt="psicologo" />
                                        
                                    </section>
                                    <div className="info-paragraph">
                                        Si estás buscando ayuda psicológica en Trujillo, existen diversas opciones a las que puedes acudir. Una de las alternativas es utilizar Serenity, una plataforma en línea que te permite encontrar especialistas en salud mental en tu área de manera fácil y rápida <br></br>

                                        En <b>Serenity</b>, puedes buscar por especialidad y filtrar los resultados según tus preferencias. Además, puedes leer las reseñas y calificaciones de otros pacientes para tomar una decisión informada sobre el profesional que deseas consultar.<br></br>

                                        También puedes buscar en directorios en línea de psicólogos y terapeutas en Trujillo. Es posible que algunas clínicas y hospitales también ofrezcan servicios de salud mental, así que asegúrate de investigar todas tus opciones.<br></br>

                                        Recuerda que buscar ayuda psicológica es un paso importante para cuidar de tu bienestar emocional. No dudes en pedir ayuda si la necesitas, y no te rindas si no encuentras a alguien adecuado de inmediato. La terapia puede ser un proceso de prueba y error, pero el esfuerzo vale la pena para mejorar tu calidad de vida.
                                    </div>
                                    
                                    </div>
                                    
                                    <section className="instituciones">
                                    <div className="tabla-container">
                                        <div className="tabla-titulo">
                                            <p>Instituciones de ayuda</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Hospital Primavera</b>
                                            <p>Contacto: (044) 505020</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Por Ti</b>
                                            <p>Contacto: 968 666 015</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Médico Psicológico Morgan Salud</b>
                                            <p>Contacto: 992 561 223</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Despertar Centro Psicologico Para La Familia Y Pareja</b>
                                            <p>Contacto: 964 969 376</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicologico Sanamente</b>
                                            <p>Contacto: 959 005 775</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Inside You</b>
                                            <p>Contacto: 923 171 390</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Humanista S.A.C.</b>
                                            <p>Contacto: (044) 631885</p>
                                        </div>
                                       
                                        
                                        </div>
                                    

                                    </section>
                                </div>
                                
                                
                            </TabPane>
                            <TabPane tab="Estrés" key='2'>
                            <div className="ayuda mt-10 mb-10">
                            <div className='seccion-ayuda'>
                                       
                                       <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es el estrés?
                                       </div>
                                       
                                            
                                    <section className="information mt-5 mb-10">
                                        <img className="rounded-md ml-5 "src="https://terapica.mx/wp-content/uploads/2019/02/Blog-Terapica-Estres-Laboral-2021-4.jpg"/>
                                    </section>
                                    <div className="info-paragraph">
                                        El estrés es una respuesta natural del cuerpo ante situaciones que se perciben como amenazantes o desafiantes. Esta respuesta se activa a través del sistema nervioso y la liberación de hormonas como el cortisol y la adrenalina, lo que puede tener efectos tanto físicos como emocionales. <br />

                                        Cuando el cuerpo está bajo estrés crónico, puede haber un aumento en la frecuencia cardíaca y la presión arterial, lo que puede llevar a enfermedades cardiovasculares. También puede haber efectos en el sistema inmunológico y gastrointestinal, así como en la salud mental, como ansiedad y depresión. <br />

                                        Es importante aprender a reconocer los signos de estrés y a manejarlo de manera efectiva para evitar efectos negativos en la salud.
                                    </div>
                                    
                                    
                                    </div>
                                    <section className="instituciones">
                                    <div className="tabla-container">
                                        <div className="tabla-titulo">
                                            <p>Instituciones de ayuda</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Hospital Primavera</b>
                                            <p>Contacto: (044) 505020</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Por Ti</b>
                                            <p>Contacto: 968 666 015</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Médico Psicológico Morgan Salud</b>
                                            <p>Contacto: 992 561 223</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Despertar Centro Psicologico Para La Familia Y Pareja</b>
                                            <p>Contacto: 964 969 376</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicologico Sanamente</b>
                                            <p>Contacto: 959 005 775</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Inside You</b>
                                            <p>Contacto: 923 171 390</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Humanista S.A.C.</b>
                                            <p>Contacto: (044) 631885</p>
                                        </div>
                                       
                                        
                                        </div>
                                    

                                    </section>
                                    
                                    </div>
                            </TabPane>
                            <TabPane tab="Depresión" key='3'>
                            <div className="ayuda mt-10 mb-10">
                            <div className='seccion-ayuda'>
                                       
                                       <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es el estrés?
                                       </div>
                                       
                                            
                                    <section className="information mt-5 mb-10">
                                        <img className="rounded-md ml-5 "src="https://terapica.mx/wp-content/uploads/2019/02/Blog-Terapica-Estres-Laboral-2021-4.jpg"/>
                                    </section>
                                    <div className="info-paragraph">
                                        El estrés es una respuesta natural del cuerpo ante situaciones que se perciben como amenazantes o desafiantes. Esta respuesta se activa a través del sistema nervioso y la liberación de hormonas como el cortisol y la adrenalina, lo que puede tener efectos tanto físicos como emocionales. <br />

                                        Cuando el cuerpo está bajo estrés crónico, puede haber un aumento en la frecuencia cardíaca y la presión arterial, lo que puede llevar a enfermedades cardiovasculares. También puede haber efectos en el sistema inmunológico y gastrointestinal, así como en la salud mental, como ansiedad y depresión. <br />

                                        Es importante aprender a reconocer los signos de estrés y a manejarlo de manera efectiva para evitar efectos negativos en la salud.
                                    </div>
                                    
                                    
                                    </div>
                                    <section className="instituciones">
                                    <div className="tabla-container">
                                        <div className="tabla-titulo">
                                            <p>Instituciones de ayuda</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Hospital Primavera</b>
                                            <p>Contacto: (044) 505020</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Por Ti</b>
                                            <p>Contacto: 968 666 015</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Médico Psicológico Morgan Salud</b>
                                            <p>Contacto: 992 561 223</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Despertar Centro Psicologico Para La Familia Y Pareja</b>
                                            <p>Contacto: 964 969 376</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicologico Sanamente</b>
                                            <p>Contacto: 959 005 775</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Inside You</b>
                                            <p>Contacto: 923 171 390</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Humanista S.A.C.</b>
                                            <p>Contacto: (044) 631885</p>
                                        </div>
                                       
                                        
                                        </div>
                                    

                                    </section>
                                    
                                    </div>
                            </TabPane>
                            <TabPane tab="Ansiedad" key='4'>
                            <div className="ayuda mt-10 mb-10">
                            <div className='seccion-ayuda'>
                                       
                                       <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es el estrés?
                                       </div>
                                       
                                            
                                    <section className="information mt-5 mb-10">
                                        <img className="rounded-md ml-5 "src="https://terapica.mx/wp-content/uploads/2019/02/Blog-Terapica-Estres-Laboral-2021-4.jpg"/>
                                    </section>
                                    <div className="info-paragraph">
                                        El estrés es una respuesta natural del cuerpo ante situaciones que se perciben como amenazantes o desafiantes. Esta respuesta se activa a través del sistema nervioso y la liberación de hormonas como el cortisol y la adrenalina, lo que puede tener efectos tanto físicos como emocionales. <br />

                                        Cuando el cuerpo está bajo estrés crónico, puede haber un aumento en la frecuencia cardíaca y la presión arterial, lo que puede llevar a enfermedades cardiovasculares. También puede haber efectos en el sistema inmunológico y gastrointestinal, así como en la salud mental, como ansiedad y depresión. <br />

                                        Es importante aprender a reconocer los signos de estrés y a manejarlo de manera efectiva para evitar efectos negativos en la salud.
                                    </div>
                                    
                                    
                                    </div>
                                    <section className="instituciones">
                                    <div className="tabla-container">
                                        <div className="tabla-titulo">
                                            <p>Instituciones de ayuda</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Hospital Primavera</b>
                                            <p>Contacto: (044) 505020</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Por Ti</b>
                                            <p>Contacto: 968 666 015</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Médico Psicológico Morgan Salud</b>
                                            <p>Contacto: 992 561 223</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Despertar Centro Psicologico Para La Familia Y Pareja</b>
                                            <p>Contacto: 964 969 376</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicologico Sanamente</b>
                                            <p>Contacto: 959 005 775</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Inside You</b>
                                            <p>Contacto: 923 171 390</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Humanista S.A.C.</b>
                                            <p>Contacto: (044) 631885</p>
                                        </div>
                                       
                                        
                                        </div>
                                    

                                    </section>
                                    
                                    </div>
                            </TabPane>
                            <TabPane tab="Problemas alimenticios" key='5'>
                            <div className="ayuda mt-10 mb-10">
                            <div className='seccion-ayuda'>
                                       
                                       <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es el estrés?
                                       </div>
                                       
                                            
                                    <section className="information mt-5 mb-10">
                                        <img className="rounded-md ml-5 "src="https://terapica.mx/wp-content/uploads/2019/02/Blog-Terapica-Estres-Laboral-2021-4.jpg"/>
                                    </section>
                                    <div className="info-paragraph">
                                        El estrés es una respuesta natural del cuerpo ante situaciones que se perciben como amenazantes o desafiantes. Esta respuesta se activa a través del sistema nervioso y la liberación de hormonas como el cortisol y la adrenalina, lo que puede tener efectos tanto físicos como emocionales. <br />

                                        Cuando el cuerpo está bajo estrés crónico, puede haber un aumento en la frecuencia cardíaca y la presión arterial, lo que puede llevar a enfermedades cardiovasculares. También puede haber efectos en el sistema inmunológico y gastrointestinal, así como en la salud mental, como ansiedad y depresión. <br />

                                        Es importante aprender a reconocer los signos de estrés y a manejarlo de manera efectiva para evitar efectos negativos en la salud.
                                    </div>
                                    
                                    
                                    </div>
                                    <section className="instituciones">
                                    <div className="tabla-container">
                                        <div className="tabla-titulo">
                                            <p>Instituciones de ayuda</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Hospital Primavera</b>
                                            <p>Contacto: (044) 505020</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Por Ti</b>
                                            <p>Contacto: 968 666 015</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Médico Psicológico Morgan Salud</b>
                                            <p>Contacto: 992 561 223</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Despertar Centro Psicologico Para La Familia Y Pareja</b>
                                            <p>Contacto: 964 969 376</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicologico Sanamente</b>
                                            <p>Contacto: 959 005 775</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Inside You</b>
                                            <p>Contacto: 923 171 390</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Humanista S.A.C.</b>
                                            <p>Contacto: (044) 631885</p>
                                        </div>
                                       
                                        
                                        </div>
                                    

                                    </section>
                                    
                                    </div>
                            </TabPane>
                            <TabPane tab="Problemas de Parejas" key='6'>
                            <div className="ayuda mt-10 mb-10">
                            <div className='seccion-ayuda'>
                                       
                                       <div className="especialidad-title  mb-5 text-center ">
                                            ¿Qué es el estrés?
                                       </div>
                                       
                                            
                                    <section className="information mt-5 mb-10">
                                        <img className="rounded-md ml-5 "src="https://terapica.mx/wp-content/uploads/2019/02/Blog-Terapica-Estres-Laboral-2021-4.jpg"/>
                                    </section>
                                    <div className="info-paragraph">
                                        El estrés es una respuesta natural del cuerpo ante situaciones que se perciben como amenazantes o desafiantes. Esta respuesta se activa a través del sistema nervioso y la liberación de hormonas como el cortisol y la adrenalina, lo que puede tener efectos tanto físicos como emocionales. <br />

                                        Cuando el cuerpo está bajo estrés crónico, puede haber un aumento en la frecuencia cardíaca y la presión arterial, lo que puede llevar a enfermedades cardiovasculares. También puede haber efectos en el sistema inmunológico y gastrointestinal, así como en la salud mental, como ansiedad y depresión. <br />

                                        Es importante aprender a reconocer los signos de estrés y a manejarlo de manera efectiva para evitar efectos negativos en la salud.
                                    </div>
                                    
                                    
                                    </div>
                                    <section className="instituciones">
                                    <div className="tabla-container">
                                        <div className="tabla-titulo">
                                            <p>Instituciones de ayuda</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Hospital Primavera</b>
                                            <p>Contacto: (044) 505020</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Por Ti</b>
                                            <p>Contacto: 968 666 015</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Médico Psicológico Morgan Salud</b>
                                            <p>Contacto: 992 561 223</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Despertar Centro Psicologico Para La Familia Y Pareja</b>
                                            <p>Contacto: 964 969 376</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicologico Sanamente</b>
                                            <p>Contacto: 959 005 775</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Inside You</b>
                                            <p>Contacto: 923 171 390</p>
                                        </div>
                                        <div className="tabla-fila">
                                            <b>Centro Psicológico Humanista S.A.C.</b>
                                            <p>Contacto: (044) 631885</p>
                                        </div>
                                       
                                        
                                        </div>
                                    

                                    </section>
                                    
                                    </div>
                            </TabPane>
                            
                        </Tabs>
                    </div>
                </section>
            </Spin>
        </>
    )

}