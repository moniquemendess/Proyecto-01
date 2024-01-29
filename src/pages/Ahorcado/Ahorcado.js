import { PrintButtonLetras } from "../../componentes";
import { id, iniciar, game_over } from "../../utils";
import "./Ahorcado.css";

const templateAhorcado = () => `

<img id= "imagen" src="img/img0.png" alt="ahorcado"/>

<div>

     <p id= "palavra_a_advinar"></p>

     <button id= "jugar">Obtener palavra</button>

      <p id="resultado"></p>

    <div id="letras"></div>

</div>
    
`;
// haciendo una const con id jugar con el evento click, llama la function iniciar
const listeners = () => {
  const btn = id("jugar");
  btn.addEventListener("click", iniciar);
};

export const PrintAhorcado = () => {
  document.querySelector("main").innerHTML = templateAhorcado();
  PrintButtonLetras();
  listeners();
  game_over();
}; // es la const para exportar al route
