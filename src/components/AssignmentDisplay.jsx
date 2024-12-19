// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <ul className="space-y-2 flex flex-col items-center">
      {assignments.map((assignment, index) => (
        <li key={index} className="text-white font-extralight">
          <span className="font-bold">{assignment.giver}</span> offre un beau cadeau à{" "}
          <span className="font-bold">{assignment.receiver}</span>
        </li>
      ))}
    </ul>
  );
}
