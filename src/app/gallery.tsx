import Image from "next/image";

const images = [
  {
    src: "/pinkie-pie.png",
    alt: "My Little Pony Pinkie Pie cosplay. Grand Galloping Gala version.",
  },
  {
    src: "/ancient-magus.png",
    alt: "Ancient Magus Bride Elias Ainsworth cosplay. Genderbent version.",
  },
  { src: "/faun-nuaeani.png", alt: "Original Faun Character Nuaeani." },
  { src: "/modern-nezuko.png", alt: "Demon Slayer's Nezuko. Modern version." },
  { src: "/outlaw-star.png", alt: "Outlaw Star's Aisha Clan-Clan." },
];

export const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          width={150}
          height={150}
        />
      ))}
    </div>
  );
};
