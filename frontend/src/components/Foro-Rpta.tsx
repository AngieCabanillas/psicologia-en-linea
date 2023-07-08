

export const ForoRptaComponent = (props) => {

    return (
        <section className="foro-rpta w-full h-fit flex items-center gap-6 my-6">
            <div className="rpta-profile w-36 justify-center hidden md:flex">
                <div className="profile-pic relative ml-2 mr-4 w-16 h-16 rounded-xl ">
                    <img className="object-cover rounded-xl ml-2 w-full h-full" src="/img/citas.jpg" alt="" />
                    <div className='iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold'>{props.user}</div>
                </div>
            </div>
            <div className="rpta-comentario rounded-xl bg-gray-100 w-full px-10 py-6">
                <div className="rpta-data flex items-center">
                    <div className="profile-pic relative mr-4 w-16 h-16 rounded-xl mr-6 md:hidden">
                        <img className="object-cover rounded-xl ml-2 w-full h-full" src="/img/citas.jpg" alt="" />
                        <div className='iconito w-6 h-6 rounded-lg absolute -bottom-2 left-0 flex justify-center items-center text-white font-bold'>{props.user}</div>
                    </div>
                    <div className="data-user">
                        <p className="profile-name text-md sm:text-lg font-semibold mb-1 ">Nombre del usuario</p>
                        <p className="profile-time text-md sm:text-lg text-gray-300 ">Tiempo del foro</p>
                    </div>
                </div>
                <div className="rpta-paragraph mt-4 text-justify">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptate modi ullam in explicabo facere eius labore sequi dolores aperiam, veniam placeat nam delectus consequuntur deserunt asperiores ipsa dolorem! Voluptatum.</p>

                </div>
            </div>
        </section>
    )
}