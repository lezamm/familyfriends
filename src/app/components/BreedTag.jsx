const colors = {
  blue: "bg-pastel-blue",
  pink: "bg-pink",
  green: "bg-pastel-green",
  yellow: "bg-pastel-yellow",
};

const BreedTag = ({ label, color = "blue" }) => {
  return (
    <span
      className={`rounded-full px-3 py-2 text-xs text-gray-600 ${colors[color]}`}
    >
      {label}
    </span>
  );
};

export default BreedTag;
