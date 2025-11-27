// Exemple dans un fichier React/JS
import { jwtDecode } from "jwt-decode";

const decodeToken = (token) => {
  try {
    const payload = jwtDecode(token);
    console.log(payload);
    return payload;
  } catch (e) {
    console.error("Token invalide", e);
    return null;
  }
};
