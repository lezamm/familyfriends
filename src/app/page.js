import Link from "next/link";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BreedCard from "./components/BreedCard";
import BottomNav from "./components/Bottom.Nav";

const dogs = [
  {
    name: "Affenpinscher",
    origin: "Northern, Germany",
    image: "/affenpinscher.jpg",
  },
  {
    name: "Afghan Hound",
    origin: "Afghanistan",
    image: "/afghan-hound.jpg",
  },
  {
    name: "Airedale Terrier",
    origin: "Yorkshire, England",
    image: "/airedale-terrier.jpg",
  },
  {
    name: "Akbash",
    origin: "Western Turkey",
    image: "/akbash.jpg",
  },
  {
    name: "Akita",
    origin: "Japan",
    image: "/affenpinscher.jpg",
  },
  {
    name: "Alaskan Malamute",
    origin: "Alaska",
    image: "/airedale-terrier.jpg",
  },
];

export default function ListView() {
  return (
    <main className="relative mx-auto h-dvh max-w-[390px] overflow-hidden bg-white shadow-xl">
      <div className="h-full overflow-y-auto px-5 pb-28">
        <Header />

        <div className="mb-6 mt-4">
          <SearchBar />
        </div>

        <div className="grid grid-cols-2 items-start gap-4">
          {dogs.map((dog) => (
            <Link
              href={`/detailview?name=${encodeURIComponent(dog.name)}`}
              key={dog.name}
              className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <BreedCard
                name={dog.name}
                origin={dog.origin}
                image={dog.image}
              />
            </Link>
          ))}
        </div>
      </div>

      <BottomNav active="home" />
    </main>
  );
}
