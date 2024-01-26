import { PrintTemplateFooter, PrintTemplateHeader } from "../componentes";

export const initTemplate = () => {
  // definimos la function
  const app = document.getElementById("app");

  const header = document.createElement("header"); // creando elementos p/ html
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  app.append(header, main, footer); // enviando los elementos para  el contenedor app
  PrintTemplateFooter();
  PrintTemplateHeader();
};
