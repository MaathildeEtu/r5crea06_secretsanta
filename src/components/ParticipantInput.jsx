// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className=" flex flex-col gap-4">

      {/* Champs de saisie pour ajouter un participant */}
      <div className="flex gap-2">
        <input
          type="text"
          className="input flex-grow text-white px-2 py-1 border rounded-md"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button text-white" onClick={addParticipant}>
          Ajouter
        </button>
      </div>

      {/* Liste des participants ajoutés */}
      <ul className="space-y-2">
        <h3>Vous avez rentrées :</h3>
        {participants.map((name, index) => (
          <li key={index} className="flex flex-row gap-2 items-center">
            <div className="py-2 px-4 bg-white rounded-md w-full text-green-dark">{name}</div>
            <button
                className="bg-red-500 hover:bg-red-700 text-xs p-1 rounded-full"
                onClick={() => onRemoveParticipant(index)}>
                  <img className=" text-white" src="./icons8-poubelle.svg" alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
