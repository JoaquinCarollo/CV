/*      <div id="fotoDePerfilYTitulo">
        <img src="./imagenes/fotoDePerfil.jpg" />
        <div id="titulo">
          <h1>JOAQUIN CAROLLO</h1>
          <h2>ESTUDIANTE DE PROGRAMACIÓN WEB</h2>
        </div>
      </div> */
const fotoDePerfilYTitulo = document.createElement("div");
fotoDePerfilYTitulo.id = "fotoDePerfilYTitulo";
fotoDePerfilYTitulo.innerHTML = `        <img src="./imagenes/fotoDePerfil.jpg" />
        <div id="titulo">
          <h1>JOAQUIN CAROLLO</h1>
          <h2>ESTUDIANTE DE PROGRAMACIÓN WEB</h2>
        </div>`;
const botonesDeInformacion = document.createElement("div");
botonesDeInformacion.id = "botonesDeInformacion";
botonesDeInformacion.innerHTML = `        <button id="informacionGeneralBoton">Información General</button
        ><button id="habilidadesBoton">Habilidades</button
        ><button id="academicoYCursosBoton">Académico y Cursos</button
        ><button id="experienciaLaboralBoton">Experiencia Laboral</button>`;
const informacionDelCV = document.getElementById("informacionDelCV");
informacionDelCV.appendChild(fotoDePerfilYTitulo);
informacionDelCV.appendChild(botonesDeInformacion);
