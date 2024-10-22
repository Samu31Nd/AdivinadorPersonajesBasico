import '../style.css'

// Cargar el JSON del árbol de decisiones
import conocimiento from './baseConocimiento.json';

// Obtener los elementos del DOM
const preguntaEl = document.getElementById('pregunta');
const botonSi = document.getElementById('botonSi');
const botonNo = document.getElementById('botonNo');
const botonReiniciar = document.getElementById('botonReiniciar');

let nodoActual = conocimiento;

const actualizarPregunta = () => {
  if (nodoActual.personaje) {
    preguntaEl.textContent = `Creo que tu personaje es: ${nodoActual.personaje}`;
    botonSi.style.display = 'none';
    botonNo.style.display = 'none';
    botonReiniciar.style.display = 'block';
  } else {
    preguntaEl.textContent = nodoActual.pregunta;
  }
}

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
  actualizarPregunta();  
}


botonSi.addEventListener('click', () => manejarRespuesta('si'));
botonNo.addEventListener('click', () => manejarRespuesta('no'));
botonReiniciar.addEventListener('click', reiniciarPrograma());

actualizarPregunta();

