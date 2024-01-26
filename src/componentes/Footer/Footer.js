import "./Footer.css";
const template = () => `
<h3><span>With 💘 to </span></h3> 
`;

export const PrintTemplateFooter = () => {
  // Exportación de la Función PrintTemplateFooter
  document.querySelector("footer").innerHTML = template(); // creando el elemento al html
};
