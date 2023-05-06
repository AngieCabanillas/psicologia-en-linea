import "./Footer.css"
import logoFooter from "/svg/logo-white.svg"

export default function Footer() {

    return (
        
        <div className="footer">
            <div className="footer-content">
                <div className="logo-footer">
                    <img src={logoFooter} alt="logo"/>
                </div>
                <div style={{display: "flex"}}>
                    <p>Política de Privacidad</p>
                    <p>Términos y Condiciones</p>
                    <p>Política de Cookies</p>
                    <p>Contacto</p>
                </div>
            </div>
        </div>
    )

}