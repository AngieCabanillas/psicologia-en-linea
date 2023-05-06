import { Button } from "../components/Button"
import heroImg from "/img/fondo-hero.jpg"
import "./Hero.css"

const handleClick1 = () => {
    redirectTo("/especialistas");
  };

const handleClick2 = () => {
    redirectTo("/info-ayuda");
  };

export default function Hero () { 

    return (
        
       <div className="hero">
            <img src={heroImg} className="hero-img" alt="hero-img"/>

            <div className="hero-text">
                <h3>Te damos la bienvenida a Serenity</h3>
                <h1>El apoyo que necesitas</h1>
                <p>Conecta con nuestros especialistas y déjanos acompañarte a mejorar tu bienestar emocional.</p>
                <div className="button-group">
                    <Button buttonStyle="btn-primary" onClick={handleClick2}>Información de Ayuda</Button>
                    <div className="espacio-entre-componentes"></div>
                    <Button buttonStyle="btn-outline" onClick={handleClick1}>Especialistas</Button>
                </div>
            </div>
       </div>
        
    )

}
function redirectTo(arg0: string) {
    throw new Error("Function not implemented.");
}

