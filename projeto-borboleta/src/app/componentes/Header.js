// src/componentes/Header.js

import Link from "next/link";

const Header = () => {
    return (
        <header>
            <img src="/logomarca.jpg" width="50px" />

            <nav id="main-nav">
                <Link href="/">Inicio</Link>
                <Link href="/comparar">Comparações</Link>
                <Link href="/calcular">Calcular</Link>
                <Link href="/dicas">Dicas</Link>
            </nav>

            <section className="menu-buttons">
                <button>Login</button>
                <button className="register">Registre-se</button>
            </section>
        </header>
    );
};

export default Header;
