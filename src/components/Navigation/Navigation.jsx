import {
    navWrapper,
    navItemsWrapper,
    navLinks
} from './navigation.module.css'

export const Navigation = ()=>{
    return (
        <header className={navWrapper}>
            <div className={navItemsWrapper}>
                <span>HIMFG</span>
                <ul className={navLinks}>
                    <li>Inicio</li>
                    <li>Registro</li>
                    <li>Iniciar sesión</li>
                </ul>
            </div>
        </header>
    )
}