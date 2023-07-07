import { ForoRptaComponent } from '../../../components/Foro-rpta'
import { LikeOutlined } from '@ant-design/icons'
import './ver-foro.css'

export const VerForoPag = () => {

    return (
        <section className="px-10 py-32 sm:px-20 -mb-32 h-full" style={{ backgroundColor: '#EDF0F7' }}>
            <div className="foro-card p-6 sm:p-10 rounded-xl bg-white">
                <h3 className="foro-title text-xl sm:text-3xl font-bold mb-6">Título del Foro de Discusión</h3>
                <div className="foro-identifiers md:flex justify-between">
                    <div className="profile flex relative mb-6 md:mb-0 items-center">
                        <div className="profile-pic ml-2 mr-4 w-16 h-16 rounded-xl overflow-hidden">
                            <div className='iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold'>P</div>
                            <img className="object-cover w-full h-full" src="/img/especialista.jpg" alt="" />
                        </div>
                        <div className="profile-data">
                            <p className="profile-name text-md sm:text-lg font-semibold mb-1 ">Nombre del usuario</p>
                            <p className="profile-time text-md sm:text-lg text-gray-300 ">Tiempo del foro</p>
                        </div>
                    </div>
                    <div className="tags flex items-center gap-4">
                        <div className="tags-button rounded-3xl border-2 border-violet-200 bg-violet-100 text-violet-500 font-semibold py-2 px-4 sm:px-6 text-md text-center">
                            Categoría
                        </div>
                        <div className="tags-button rounded-3xl border-2 border-teal-200 bg-teal-100 text-teal-500 font-semibold py-2 px-4 sm:px-6 text-md text-center">
                            Categoría
                        </div>
                    </div>
                </div>
                <div className="foro-content py-6 w-full mb-616 sm:mb-0">
                    <p className="foro-paragraph text-md sm:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.</p>
                </div>
                <div className="foro-buttons w-full items-center relative flex gap-4">
                    <div className='foro-save w-14 rounded-xl bg-gray-100 flex justify-center gap-6 p-4'>
                        <LikeOutlined className='text-lg text-gray-600 font-bold'/>
                    </div>
                    <p className='text-lg text-gray-600 font-semibold'>305</p>
                    <div className='profiles flex gap-2 absolute right-0  bottom-0'>
                        <div className='w-12 h-12 rounded-xl overflow-hidden'>
                            <img className='object-cover object-right w-full h-full' src="/img/info.jpg" alt="Perfil 1" />
                        </div>
                        <div className='w-12 h-12 absolute left-6 -top-4 rounded-xl border-4 border-white overflow-hidden'>
                            <img className='object-cover w-full h-full' src="/img/citas.jpg" alt="Perfil 1" />
                        </div>
                        <div className='w-12 h-12 rounded-xl bg-gray-100 flex justify-center items-center'>
                            <p className='text-xl text-gray-400'>+3</p>
                        </div>
                    </div>
                </div>
                <div className="foro-input w-full relative my-4">
                    <textarea className="resize-none h-auto rounded-xl p-4 text-md sm:text-lg focus:outline-none" placeholder="Ingresa tu comentario..." maxLength={250}  rows={3} required/>
                    <button className="foro-add w-fit rounded-xl bg-gray-100 flex items-center gap-6 p-4 absolute -bottom-6 right-6">
                        <span className="text-lg text-gray-600 font-bold">A</span>
                        <p className="text-md sm:text-lg text-gray-600 font-light whitespace-nowrap">Añadir respuesta</p>
                    </button>
                </div>
                <div className="my-responses">
                </div>
                <div className="all-responses my-10">
                    <h4 className='responses-title text-lg sm:text-2xl font-bold mb-6'>Todas las respuestas:</h4>
                    <ForoRptaComponent user="P" />
                    <ForoRptaComponent user="E" />
                    <ForoRptaComponent user="E" />

                </div>
            </div>

        </section>
    )
}