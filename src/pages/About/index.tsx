import React from "react";

function Home(): JSX.Element {
  return (
    <div>
      <h2>Acerca</h2>
      <article>
        <p>
          OpenVE es una comunidad libre para la investigación y el desarrollo
          de proyectos de computación de código abierto.
        </p>
        <p>
          En OpenVE mantenemos tambien un listado de canales de Telegram, si tienes
          interes en ver dicha lista, puedes hacer click aqui
        </p>
        <p>
          Queremos impulsar el desarrollo de software de calidad en Venezuela, haciendo
          disponible una biblioteca de código abierto, llena de conocimientos concebidos
          por una comunidad no jerárquica de profesionales pertenecientes al sector público
          y privado con años de experiencia, además de estudiantes entusiastas y otros
          importantes colaboradores.
        </p>
      </article>
    </div>
  );
}

export default Home;
