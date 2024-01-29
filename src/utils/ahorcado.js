import { palabrasPaises } from "../data/ahorcado.data";
import {
  getInfoAhorcado,
  setPalavraAdivinar,
  setcantAciertos,
  setcantErrores,
} from "../global/state/ahorcado.state";

export const id = (str) => {
  return document.getElementById(str);
};

export const obtener_random = (num_min, num_max) => {
  const amplitude_valores = num_max - num_min; // valor más alto - mas bajo del randon (7-0)*/
  const valAzar = Math.floor(Math.random() * amplitude_valores) + num_min;
  return valAzar;
};

export const iniciar = (event) => {
  document.getElementById("resultado").innerHTML = "";
  const imagen = id("imagen");
  imagen.src = "img/img0.png";
  const btn = id("jugar");
  btn.disabled = true;
  setcantErrores(0);
  setcantAciertos(0);

  const parrafo = id("palavra_a_advinar");
  console.log(parrafo);
  parrafo.innerHTML = "";

  const cant_palabras = palabrasPaises.length;
  const valor_al_azar = obtener_random(0, cant_palabras);
  setPalavraAdivinar(palabrasPaises[valor_al_azar]);

  const cant_letras = getInfoAhorcado().palabraAdivinar.length;

  const btn_letras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = false;
  }

  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
};

export const click_letras = (event) => {
  const spans = document.querySelectorAll("#palavra_a_advinar span");
  const button = event.target; /* cual de todas las letras, llamo la function*/
  button.disabled = true;

  const letra = button.innerHTML.toUpperCase();
  const palabra = getInfoAhorcado().palabraAdivinar.toUpperCase();

  let correto = false;

  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      /*la variable i es la posición de la letra  en la palara */
      /* que coincide con el span que tenemos que mostrarle esta letra*/
      spans[i].innerHTML = letra;
      let aciertos = parseInt(getInfoAhorcado().cantAciertos);
      setcantAciertos(getInfoAhorcado().cantAciertos + 1);
      correto = true;
    }
  }

  if (correto == false) {
    let errores = parseInt(getInfoAhorcado().cantErrores);
    setcantErrores(getInfoAhorcado().cantErrores + 1);
    console.log("errores", getInfoAhorcado().cantErrores);
    const source = `img/img${getInfoAhorcado().cantErrores}.png`;
    const imagen = document.getElementById("imagen");
    imagen.src = source;
  }
  console.log(getInfoAhorcado().cantAciertos);
  console.log(getInfoAhorcado().palabraAdivinar.length);

  if (getInfoAhorcado().cantErrores == 7) {
    id("resultado").innerHTML =
      "Perdiste \uD83D\uDE2D, la palabra era " +
      getInfoAhorcado().palabraAdivinar +
      "\uD83C\uDF0E";

    game_over();
  } else if (
    getInfoAhorcado().cantAciertos == getInfoAhorcado().palabraAdivinar.length
  ) {
    id("resultado").innerHTML = "!MUY BIEN, GANASTE EL JUEGO \uD83E\uDD29";

    game_over();
  }
  console.log(
    "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + correto
  );
};

export const game_over = () => {
  const btn_letras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].disabled = true;
  }
  const btn = id("jugar");
  btn.disabled = false;
};
