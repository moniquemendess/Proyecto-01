import { click_letras } from "../../utils";
import "./ButtonLetras.css";

/* hacer una constante para enviar al html */
const templateLetras = `
    <button>a</button>
    <button>b</button>
    <button>c</button>
    <button>d</button>
    <button>e</button>
    <button>f</button>
    <button>g</button>
    <button>h</button>
    <button>i</button>
    <button>j</button>
    <button>k</button>
    <button>l</button>
    <button>m</button>
    <button>n</button>
    <button>o</button>
    <button>p</button>
    <button>q</button>
    <button>r</button>
    <button>s</button>
    <button>t</button>
    <button>u</button>
    <button>v</button>
    <button>w</button>
    <button>x</button>
    <button>y</button>
    <button>z</button>
`;

const listeners = () => {
  const btn_letras = document.querySelectorAll("#letras button");
  for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener("click", click_letras);
  }
};

export const PrintButtonLetras = () => {
  document.getElementById("letras").innerHTML = templateLetras;
  listeners();
};
// creando una function para poner el template dentro de letras
