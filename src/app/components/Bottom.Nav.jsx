import Link from "next/link";
import { FiHome, FiStar, FiMessageCircle, FiUser } from "react-icons/fi";

const BottomNav = ({ active = "home" }) => {
  const items = [
    { name: "home", icon: FiHome, href: "/" },
    { name: "favorites", icon: FiStar, href: "/detailview" },
    { name: "messages", icon: FiMessageCircle, href: "#" },
    { name: "profile", icon: FiUser, href: "#" },
  ];

  return (
    <nav
      aria-label="Bottom navigation"
      className="absolute bottom-0 left-0 right-0 z-20 flex h-20 items-start justify-around border-t border-gray-100 bg-white/95 pt-4 backdrop-blur-md"
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            aria-current={active === item.name ? "page" : undefined}
            className={`rounded-lg p-2 text-2xl focus-visible:outline-2 focus-visible:outline-coral ${
              active === item.name ? "text-coral" : "text-gray-400"
            }`}
          >
            <Icon />
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNav;
