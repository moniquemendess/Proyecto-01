export const info = {
  palabraAdivinar: "",
  cantErrores: 0,
  cantAciertos: 0,
};

export const getInfoAhorcado = () => info; // retornar el estado de las variables

export const setPalavraAdivinar = (data) => (info.palabraAdivinar = data);

export const setcantErrores = (data) => (info.cantErrores = data);

export const setcantAciertos = (data) => (info.cantAciertos = data);
