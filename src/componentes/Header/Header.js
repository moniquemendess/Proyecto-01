import { getUser } from "../../global/state/globalstate";
import { changeColorRGB } from "../../utils";
import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `
<img
  src="/img/mona-removebg-preview.png"
  alt="title hub game website (app)"
  class="logo"
/>
<nav>
  <img
    src="https://cdn-icons-png.flaticon.com/256/2071/2071669.png"
    alt=" change to style mode page"
    id="changeColor"
  />
  <img
    src="https://cdn-icons-png.flaticon.com/256/4562/4562862.png"
    alt=" navigate to home app"
    id="buttonDashboard"
  />
  <img
    src="https://cdn-icons-png.flaticon.com/256/8914/8914308.png"
    alt="logout"
    id="buttonLogout"
  />
</nav>
`;

const addListeners = () => {
  // creamos una variable para el evento

  //! ---------------->COLOR CHANGE RANDOM------ evento click del boton de cambio de color
  const changeColor = document.getElementById("changeColor");
  changeColor.addEventListener("click", (e) => {
    /** en este caso lo que hacemos el generar un color y cambiar el stylo del background del body */
    const color = changeColorRGB();
    document.body.style.background = color;
  });

  //! ----------------> DASHBOARD ------------- evento click del boton que nos lleva a los juegos
  const buttonDashboard = document.getElementById("buttonDashboard");
  buttonDashboard.addEventListener("click", (e) => {
    // llamamos al initController con el dashboard para que pinte la pagina del dashboard
    initControler("Dashboard");
  });

  //! ----------------> LOGOUT ----------------
  const buttonLogout = document.getElementById("buttonLogout");
  buttonLogout.addEventListener("click", (e) => {
    /** Ahora vamos a empezar a utilizar los estados con sus funciones get y set
     * En este caso primero vamos a traernos el nombre del usuario que esta logado y
     * que se encuentra en el sessionStorage
     * Esto lo hacemos porque es el nombre con el que podemos traer los datos del localStorage
     * Al traernos los datos del localStorage vamos a modificar el objeto y poner el token a false
     * porque es el token lo que nos da el ok o no en nuestra aplicacion
     *
     * Es una simulacion para luego cuando estemos en el back nos sea mucho mas sencillo entender que
     * para las request al back que necesiten autenticacion necesitaremos un token valido.
     */
    const userState = getUser().name;
    const currentUser = localStorage.getItem(userState);
    const parseCurrentUser = JSON.parse(currentUser);
    const updateUser = { ...parseCurrentUser, token: false };
    const stringUpdateUser = JSON.stringify(updateUser);
    localStorage.removeItem(userState);
    sessionStorage.removeItem("currentUser");
    localStorage.setItem(userState, stringUpdateUser);
    initControler("Login");
  });
};
export const PrintTemplateHeader = () => {
  // export la function
  document.querySelector("header").innerHTML = template();
  addListeners();
};
