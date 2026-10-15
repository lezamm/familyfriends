import Image from "next/image";
import FavoriteButton from "./FavoriteButton";

const BreedCard = ({ name, origin, image, imagePosition = "center" }) => {
  return (
    <article className="breed-card">
      <div className="relative h-[112px] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 448px) 50vw, 200px"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />

        <div className="absolute right-2 top-2">
          <FavoriteButton />
        </div>
      </div>

      <div className="px-3 pb-4 pt-2">
        <h2 className="text-sm font-semibold leading-tight">{name}</h2>

        <p className="mt-1 text-xs leading-tight text-text-light">{origin}</p>
      </div>
    </article>
  );
};

export default BreedCard;
