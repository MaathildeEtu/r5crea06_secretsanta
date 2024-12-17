// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className=" h-screen flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-4xl font-bold text-primary">Secret Santa</h1>
      <p className="text-lg">
        Bienvenue dans l'application Secret Santa ! Organisez facilement votre
        échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="button text-lg px-8 py-3">
        Commencer
      </button>
    </div>
  );
}
