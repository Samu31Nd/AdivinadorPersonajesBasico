import '../style.css'

// Cargar el JSON del árbol de decisiones
import conocimiento from './baseConocimiento.json';

// Obtener los elementos del DOM
const preguntaEl = document.getElementById('pregunta');
const divImagen = document.getElementById('divImagen');
const botonSi = document.getElementById('botonSi');
const botonNo = document.getElementById('botonNo');
const botonReiniciar = document.getElementById('botonReiniciar');
const image = document.createElement('img');

let nodoActual = conocimiento;

const actualizarPregunta = () => {
  if (nodoActual.personaje) {
    preguntaEl.textContent = `Creo que tu personaje es: ${nodoActual.personaje}`;
    addImage(nodoActual.personaje);
    botonSi.style.display = 'none';
    botonNo.style.display = 'none';
    botonReiniciar.style.display = 'block';
  } else {
    preguntaEl.textContent = nodoActual.pregunta;
  }
}

const addImage = (personaje) => {
  let imgSrc = personaje.trim().split(" ");
  imgSrc = imgSrc[0].toLowerCase();
  divImagen.innerHTML = "";
  divImagen.style.display = 'block';
  image.alt =personaje;
  if(imgSrc == "yapdollar") image.src = `/${imgSrc}.gif`;
  else
    image.src = `../public/${imgSrc}.png`;
  divImagen.append(image);
}

const hideImage = () => { divImagen.innerHTML = ""; 
  divImagen.style.display = 'none';
};

const manejarRespuesta = (respuesta) => {
  if (respuesta === 'si') {
    nodoActual = nodoActual.si;
  } else {
    nodoActual = nodoActual.no;
  }
  actualizarPregunta();
}

const reiniciarPrograma = () => {
  nodoActual = conocimiento;  
  botonSi.style.display = 'inline-block'; 
  botonNo.style.display = 'inline-block';
  botonReiniciar.style.display = 'none';  
  hideImage();
  actualizarPregunta();  
}


botonSi.addEventListener('click', () => manejarRespuesta('si'));
botonNo.addEventListener('click', () => manejarRespuesta('no'));
botonReiniciar.addEventListener('click', () => reiniciarPrograma());

actualizarPregunta();

