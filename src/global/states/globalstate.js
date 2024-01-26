//! -----------------------------------------------------------------------------------
//?-----------------> INICIALIZACION EN LAZY DEL ESTADO ------------------------------
//! -----------------------------------------------------------------------------------

/** Siempre lo primero que se hace es crear los estados y le damos su valor
 *  inicial antes de modificarlos */

/* este estado de currrentUser es el usuario que se encuenta actualmente logado en la aplicacion
tiene una inicializacion en lazy. Esto quiere decir que mira si tenemos algun valor en le local storage 
si tenemos un valor lo vamos asignar al valor de currentUser sino será un string vacio


ESTO SE HACE PORQUE SI RECARGO LA PAGINA LOS ESTADOS VUELVEN A SU VALOR INCIAL, si no tubieramos esto
si recargo sería "" STRING vacio por lo cual cuando recargo en este caso lo que hace es valorar si en
el sessionStorage existe currentUser y se existir lo setea en este objeto
 */

const currentUser = {
  name: sessionStorage.getItem("currentUser")
    ? sessionStorage.getItem("currentUser")
    : "",
};
