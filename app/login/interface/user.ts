export default interface User {
    _id: string;
    email: string;
    password: string; // Nota: Nunca debes almacenar contraseñas en texto plano
    createdAt: string;
    __v: number;
  }