import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className=" container p-8 font-primary flex justify-center min-h-screen items-center">
      <div className=" phone relative h-[667px] w-[375px] border rounded-4xl p-4 overflow-auto pb-10 ">
        <div className=" relative z-20">
          {/* Affiche l'écran en fonction de l'état de l'application */}
          {/* WELCOME */}
          {currentScreen === "welcome" && (
            <WelcomeScreen onStart={() => setCurrentScreen("input")} />
          )}

          {/* INPUT */}
          {currentScreen === "input" && (
            <div className="flex flex-col gap-5">
              <div className=" flex flex-col gap-2 mt-14">
                <h2 className="text-2xl font-bold text-center">Ajoutez des participants</h2>
                <p className="text-center text-lg leading-5">Entrez les noms des participants, puis appuyez sur "Ajouter"</p>
              </div>
              <ParticipantInput
                onAddParticipant={addParticipant}
                participants={participants}
                onRemoveParticipant={removeParticipant}
              />
              <div className="mt-6 flex justify-center">
                <button className="button text-lg px-4 py-2 text-white bg-green-light rounded-md hover:bg-green-dark" onClick={distributeGifts}>Distribuer les cadeaux</button>
              </div>
            </div>
          )}

          {/* ASSIGNMENTS */}
          {currentScreen === "assignments" && (
            <div className=" mt-14 flex flex-col gap-28">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-center">Attributions des cadeaux</h2>
                <AssignmentDisplay assignments={assignments} />
              </div>
            
              <div className="mt-6 flex justify-center">
                <button className="button text-lg px-4 py-2 text-white bg-green-light rounded-md hover:bg-green-dark" onClick={resetApp}>Recommencer</button>
              </div>
            </div>
          )}
        </div>
      
        <div className=" absolute bottom-5 left-4 z-10 scroll-none">
            <img className="h-48 w-full" src="illustration-bouledenaige-secretsanta-final.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
