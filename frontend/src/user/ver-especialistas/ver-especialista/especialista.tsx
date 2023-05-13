import { Spin } from 'antd'
import './especialista.css'
import { LoadingOutlined, } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { DatosEspecialistaPage } from './datos-especialista'
import { DetallesEspecialistaPage } from './detalles-especialista'
import { HorarioComponent } from '../../../components/Horario'

const circleIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

export const EspecialistaPage = () => {
    const [loading, setLoading] = useState<boolean>(true);

    const especialista = {
        id: 1,
        nombre: 'Dr. Ana Gonzales',
        especialidad: ['Psicología', 'Psiquiatría'],
        descripcion: 'Soy una profesional de la salud mental con amplia experiencia en el tratamiento de diversas patologías y trastornos psicológicos. Me apasiona mi trabajo y estoy comprometida en brindar una atención de calidad a mis pacientes.',
        descripcionEspecialidad: 'Mi especialidad se enfoca en la terapia cognitivo-conductual, la cual se ha demostrado efectiva en el tratamiento de diversos trastornos, tales como ansiedad, depresión, trastornos alimentarios, entre otros.',
        descripcionCarrera1: 'Estudié psicología en la Universidad Nacional Mayor de San Marcos y luego realicé una especialización en psiquiatría en la Universidad Peruana Cayetano Heredia. Además, he participado en diversos cursos y talleres en terapias alternativas como el mindfulness y la meditación.',
        descripcionCarrera2: 'Cuento con más de 10 años de experiencia en el campo de la psicología y psiquiatría, trabajando tanto en el sector público como privado. Actualmente, me desempeño como jefa del departamento de psiquiatría en el Hospital Nacional Dos de Mayo.',
        descripcionCarrera3: 'Soy miembro activo de la Asociación Peruana de Psicología y de la Asociación Peruana de Psiquiatría, participando en diversas actividades y congresos para mantenerme actualizada en los últimos avances en el campo de la salud mental.',
        horarios: {
            lunes: ['10am - 1pm', '3pm - 6pm', '7pm - 8pm'],
            martes: ['9am - 12pm', '2pm - 5pm','5pm - 7pm','8pm - 10pm'],
            miercoles: ['8am - 12pm', '4pm - 7pm']
        }
    };

    useEffect(() => {


        setLoading(false)
    }, []);

    return (
        <Spin spinning={loading} className="h-100" indicator={circleIcon}>
            <DatosEspecialistaPage {...especialista} />
            <section className='content p-5 -mb-32 sm:p-20' style={{ backgroundColor: '#EDF0F7' }}>
                <DetallesEspecialistaPage {...especialista} />
                <div className="contenido grid grid-cols-4 p-10">
                    <div className="horarios__contenedor col-span-3">
                        <div className="horarios__title mb-12">
                            Horarios de Atención
                        </div>
                        <div className="horario mr-10 p-10 mb-10">
                            <div className="horario__title mb-6">
                                Lunes
                            </div>
                            <div className="horarios__contenedor grid grid-cols-3 gap-3">
                                {especialista.horarios.lunes ? especialista.horarios.lunes.map((hora, index) => (
                                    <HorarioComponent key={index} hora={hora} />
                                )) : "No hay horarios para este día."}
                            </div>
                        </div>
                        <div className="horario mr-10 p-10 mb-10">
                            <div className="horario__title mb-6">
                                Martes
                            </div>
                            <div className="horarios__contenedor grid grid-cols-3 gap-3">
                                {especialista.horarios.martes ? especialista.horarios.martes.map((hora, index) => (
                                    <HorarioComponent key={index} hora={hora} />
                                )) : "No hay horarios para este día."}
                            </div>
                        </div>
                        <div className="horario mr-10 p-10 mb-10">
                            <div className="horario__title mb-6">
                                Miércoles
                            </div>
                            <div className="horarios__contenedor grid grid-cols-3 gap-3">
                                {especialista.horarios.miercoles ? especialista.horarios.miercoles.map((hora, index) => (
                                    <HorarioComponent key={index} hora={hora} />
                                )) : "No hay horarios para este día."}
                            </div>
                        </div>
                    </div>
                    <div className="especialidad__contenedor col-span-1">
                        <div className="especialidad__title mb-12">
                            Especialidad
                        </div>
                        <div className="especialidad__datos">
                            <div className="especialidad__paragraph p-10 text-justify">
                                La Dra. Gonzales es miembro activo de la Asociación Peruana de Psiquiatría y ha recibido varios reconocimientos por su trabajo en el campo de la salud mental. Actualmente ofrece sesiones de terapia en línea a través de la plataforma web Ver-Especialista, utilizando un enfoque centrado en el paciente y basado en la evidencia. Está disponible de lunes a viernes de 9:00 am a 6:00 pm y sus pacientes han elogiado su capacidad para crear un ambiente acogedor y seguro durante las sesiones.
                            </div>
                            <div className="especialidad__specialty px-10 py-6">
                                Psiquiatría clínica
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Spin>
    )
}