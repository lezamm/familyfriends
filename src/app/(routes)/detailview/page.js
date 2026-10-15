import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";

import Header from "../../components/Header";
import FavoriteButton from "../../components/FavoriteButton";
import BreedTag from "../../components/BreedTag";
import BottomNav from "../../components/Bottom.Nav";

const dogs = {
  Affenpinscher: {
    image: "/affenpinscher.jpg",
    description:
      "Small, sturdy toy breed with a distinctive monkey-like expression and shaggy, wiry coat. Known for its confident, terrier-like personality despite its small size.",
    history:
      "Originating in 17th-century Germany, the Affenpinscher was originally bred to catch rodents. Today, it is known as a lively and affectionate companion.",
  },
  "Afghan Hound": {
    image: "/afghan-hound.jpg",
    description:
      "The Afghan Hound is an elegant and independent breed known for its long, silky coat and graceful appearance.",
    history:
      "This ancient breed originated in Afghanistan, where it was used for hunting in mountainous regions.",
  },
  "Airedale Terrier": {
    image: "/airedale-terrier.jpg",
    description:
      "The Airedale Terrier is an intelligent, energetic and confident dog with a playful personality.",
    history:
      "The breed originated in Yorkshire, England, and was developed as a versatile working and hunting dog.",
  },
  Akbash: {
    image: "/akbash.jpg",
    description:
      "The Akbash is a calm, loyal and protective breed, traditionally known for guarding livestock.",
    history:
      "The breed originated in Turkey and has been used for generations to protect sheep and other animals.",
  },
  Akita: {
    image: "/affenpinscher.jpg",
    description:
      "The Akita is a strong, loyal and dignified breed known for its protective nature.",
    history:
      "The Akita originated in Japan and has a long history as a hunting and companion dog.",
  },
  "Alaskan Malamute": {
    image: "/airedale-terrier.jpg",
    description:
      "The Alaskan Malamute is a powerful, friendly and hardworking dog bred for endurance.",
    history:
      "The breed originated in Alaska and was traditionally used to pull heavy sleds.",
  },
};

export default async function DetailView({ searchParams }) {
  const params = await searchParams;
  const requestedName = params?.name || "Affenpinscher";

  const name = Object.prototype.hasOwnProperty.call(dogs, requestedName)
    ? requestedName
    : "Affenpinscher";

  const dog = dogs[name];

  return (
    <main className="relative mx-auto h-dvh max-w-[390px] overflow-hidden bg-white shadow-xl">
      <div className="h-full overflow-y-auto px-4 pb-28">
        <Header />

        {/* Stort hundebillede */}
        <div className="relative mt-2 h-[335px] overflow-hidden rounded-[28px] bg-pink">
          <Image
            src={dog.image}
            alt={name}
            fill
            priority
            sizes="390px"
            className="object-cover object-[center_35%]"
          />

          {/* Tilbageknap */}
          <Link
            href="/"
            aria-label="Tilbage til forsiden"
            className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black focus-visible:outline-2 focus-visible:outline-coral"
          >
            <FiChevronLeft size={24} />
          </Link>

          {/* Favoritknap */}
          <div className="absolute right-5 top-5">
            <FavoriteButton filled />
          </div>

          {/* Lille hundebillede */}
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl bg-white/30 p-2 backdrop-blur-sm">
            <div className="relative h-9 w-9 overflow-hidden rounded-lg">
              <Image
                src={dog.image}
                alt=""
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>

            <span className="text-xs text-white">{name}</span>
          </div>
        </div>

        {/* Hundens navn */}
        <h1 className="mt-4 text-[27px] font-semibold text-text-dark">
          {name}
        </h1>

        {/* Egenskaber */}
        <div className="mt-4 flex flex-wrap gap-2">
          <BreedTag label="Confident" color="blue" />
          <BreedTag label="Alert" color="pink" />
          <BreedTag label="Playful" color="green" />
          <BreedTag label="Loyal" color="yellow" />
        </div>

        {/* Beskrivelse */}
        <section className="mt-5">
          <h2 className="text-xs text-text-light">Breed description</h2>

          <p className="mt-1 text-base leading-6 text-gray-600">
            {dog.description}
          </p>
        </section>

        {/* Historie */}
        <section className="mt-5">
          <h2 className="text-xs text-text-light">Breed history</h2>

          <p className="mt-1 text-base leading-6 text-gray-600">
            {dog.history}
          </p>
        </section>
      </div>

      <BottomNav active="favorites" />
    </main>
  );
}
