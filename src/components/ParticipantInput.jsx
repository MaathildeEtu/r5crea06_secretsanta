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
    <div className=" flex flex-col gap-8">

      {/* Champs de saisie pour ajouter un participant */}
      <div className="flex">
        <input
          type="text"
          className="input flex-grow text-white"
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
          <li key={index} className="flex flex-col gap-0">
            <div className=" py-2 px-4 bg-white rounded-md">{name}</div>
            <div className=" flex justify-end">
              <button
                className="text-red-500 hover:text-red-700 text-sm"
                onClick={() => onRemoveParticipant(index)}
              >Supprimer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
