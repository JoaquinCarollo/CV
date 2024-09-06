const habilidadesBoton = document.getElementById("habilidadesBoton");
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
  }
}
habilidadesBoton.onclick = () => {
  mostrarInfo(1);
};
volver.onclick = () => {
  mostrarInfo(0);
};
