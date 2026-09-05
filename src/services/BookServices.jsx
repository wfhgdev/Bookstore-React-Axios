//importamos la librería
import axios from "axios";

//Construimos una constante porque usaremos más veces el link de la API
const API_URL = "http://localhost:3000/books";

//Este código es responsable de pedir todos los libros al servidor y devolverlos ya listos para usarlos en la aplicación.
export const getAllBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};