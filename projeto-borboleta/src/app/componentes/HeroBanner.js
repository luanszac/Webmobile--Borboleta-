// src/componentes/HeroBanner.js

const HeroBanner = ({ titulo, subtitulo, mostrarImagem = true }) => {
    return (
        <section id="opcoes">
            <h1 id="titulo">{titulo}</h1>
            <h2>{subtitulo}</h2>

            {mostrarImagem && (
                <img
                    className="imagem"
                    src="https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta.png"
                />
            )}
        </section>
    );
};

export default HeroBanner;
