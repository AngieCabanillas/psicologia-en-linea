import { Link } from 'react-router-dom'
import './Foro-Card.css'
import { LikeOutlined } from '@ant-design/icons'

export const ForoCard = (props) =>{

    return(
        <section className="foro-card p-6 sm:p-10 rounded-xl bg-white">
            <Link to='/foros/ver-foro'>
                <h3 className="foro-title text-xl sm:text-3xl font-bold mb-6 color-bg">Título del Foro de Discusión</h3>
            </Link>
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
            <div className="foro-content py-6 w-full mb-16 sm:mb-0">
                <p className="foro-paragraph text-md sm:text-lg text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique placeat optio architecto quae veniam dolorum! Vitae eius, beatae, fuga dolores quo fugit odit praesentium consequuntur nihil quasi eligendi voluptates.</p>
            </div>
            <div className="foro-buttons w-full justify-between sm:justify-start relative flex gap-4">
                <div className='foro-save w-14 rounded-xl bg-gray-100 flex justify-center gap-6 p-4'>
                    <LikeOutlined className='text-lg text-gray-600 font-bold'/>
                </div>
                <Link to='/foros/ver-foro'>
                    <div className="foro-add w-fit rounded-xl bg-gray-100 flex items-center gap-6 p-4">
                            <span className="text-lg text-gray-600 font-bold">A</span>
                            <p className="text-md sm:text-lg text-gray-600 font-light  whitespace-nowrap">Añadir respuesta</p>
                    </div>
                </Link>
                <div className='profiles flex gap-2 absolute right-0  bottom-20 sm:bottom-0'>
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
        </section>
    )
}