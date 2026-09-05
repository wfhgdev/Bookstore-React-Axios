//importamos la librería
import axios from "axios";

//Construimos una constante porque usaremos más veces el link de la API
const API_URL = "http://localhost:3000/books";

//Este código es responsable de pedir todos los libros al servidor y devolverlos ya listos para usarlos en la aplicación.
export const getAllBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBook = async (bookData) => {
    const response = await axios.post(API_URL, bookData);
    return response.data;
};

export const updateBook = async (id, bookData) => {
    const response = await axios.put(`${API_URL}/${id}`, bookData);
    return response.data;
};

export const deleteBook = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};