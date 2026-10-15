"use client";

import { FiStar } from "react-icons/fi";

const FavoriteButton = ({ filled = false }) => {
  return (
    <button
      type="button"
      aria-label="Favorite"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/40 text-white backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      onClick={(event) => event.preventDefault()}
    >
      <FiStar size={19} fill={filled ? "currentColor" : "none"} />
    </button>
  );
};

export default FavoriteButton;
