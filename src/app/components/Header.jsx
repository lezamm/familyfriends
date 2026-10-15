import { FiBell } from "react-icons/fi";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <Logo />

      <button
        type="button"
        aria-label="Notifications"
        className="relative rounded-full p-2 text-xl focus-visible:outline-2 focus-visible:outline-coral"
      >
        <FiBell />

        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-coral" />
      </button>
    </header>
  );
};

export default Header;
