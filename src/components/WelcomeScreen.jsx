// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className=" flex flex-col items-center text-center space-y-6 mt-36">
      <h1 className="text-4xl font-bold text-primary text-white">Secret Santa</h1>
      <p className="text-lg leading-5">Bienvenue dans votre application <span className=" italic">Secret Santa</span> ! Organisez facilement votre échange de cadeaux entre amis ou collègues.</p>
      <button onClick={onStart} className="button text-lg px-4 py-2 text-white bg-green-light rounded-md hover:bg-green-dark">Commencer</button>
    </div>
  );
}
