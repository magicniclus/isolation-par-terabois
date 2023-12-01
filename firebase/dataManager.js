import { getDatabase, ref, push, set } from "firebase/database";
import { database } from "./firebase.config";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export function writeUserData(
  nom,
  prenom,
  email,
  telephone,
  type,
  combles,
  rampants,
  iti,
  surface,
  situationPersonnelle,
  revenus,
  secteur,
  nbrDePart,
  projet
) {
  // Créer un nouvel objet Date
  const dateEtHeure = new Date();

  // Convertir en string avec le format local français
  const dateEtHeureFrancais = dateEtHeure.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const database = getDatabase();
  const contactIsolationRef = ref(database, "contactIsolation");

  return new Promise((resolve, reject) => {
    const newContactRef = push(contactIsolationRef);
    set(newContactRef, {
      nom,
      prenom,
      email,
      telephone,
      type,
      combles,
      rampants,
      iti,
      surface,
      situationPersonnelle,
      revenus,
      secteur,
      nbrDePart,
      projet,
      dateEtHeureFrancais,
    })
      .then(() => {
        resolve(newContactRef.key); // Retourne l'ID généré par Firebase
      })
      .catch((error) => {
        reject(error);
      });
  });
}
