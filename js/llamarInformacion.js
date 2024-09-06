const habilidadesBoton = document.getElementById("habilidadesBoton");
const informacionGeneralBoton = document.getElementById(
  "informacionGeneralBoton"
);
const academicoYCursosBoton = document.getElementById("academicoYCursosBoton");
const experienciaLaboralBoton = document.getElementById(
  "experienciaLaboralBoton"
);
const volver = document.createElement("button");
volver.id = "volver";
volver.innerText = "Volver";
function mostrarInfo(informacion) {
  if (informacion === 0) {
    informacionDelCV.innerHTML = "";
    informacionDelCV.appendChild(fotoDePerfilYTitulo);
    informacionDelCV.appendChild(botonesDeInformacion);
  } else if (informacion === 1) {
    informacionDelCV.innerHTML = "";
    informacionDelCV.appendChild(fotoDePerfilYTitulo);
    habilidades.appendChild(volver);
    informacionDelCV.appendChild(habilidades);
  } else if (informacion === 2) {
    informacionDelCV.innerHTML = "";
    informacionDelCV.appendChild(fotoDePerfilYTitulo);
    iconos.appendChild(volver);
    informacionDelCV.appendChild(iconos);
  } else if (informacion === 3) {
    informacionDelCV.innerHTML = "";
    informacionDelCV.appendChild(fotoDePerfilYTitulo);
    academicoYCursos.appendChild(volver);
    informacionDelCV.appendChild(academicoYCursos);
  } else if (informacion === 4) {
    informacionDelCV.innerHTML = "";
    informacionDelCV.appendChild(fotoDePerfilYTitulo);
    experienciaLaboral.appendChild(volver);
    informacionDelCV.appendChild(experienciaLaboral);
  }
}
experienciaLaboralBoton.onclick = () => {
  mostrarInfo(4);
};
academicoYCursosBoton.onclick = () => {
  mostrarInfo(3);
};
informacionGeneralBoton.onclick = () => {
  mostrarInfo(2);
};
habilidadesBoton.onclick = () => {
  mostrarInfo(1);
};
volver.onclick = () => {
  mostrarInfo(0);
};
