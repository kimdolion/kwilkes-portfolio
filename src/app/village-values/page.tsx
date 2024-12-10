import Image from "next/image";

export default function VillageValues() {
  return (
    <div className="village-values-page">
      <h2>Village Values</h2>
      <Image
        alt="A variety of multinational flags that have been made into combinations of popular countries surrounding a statement 'Reimaging Patriotism Two Flags At A Time' made by Onjena Yo, an artist of Village Values."
        height={320}
        src="/multinationalpatriotflag_honorboth_ourpatriotism_patriot_flag_twitter_banner2.png"
        width={960}
      />
      <p>
        Village Values is a collaboration between multicultural sisters who are
        celebrating community through design, art, and heritage. Connecting
        identity, patriotism, education, and language.
      </p>
      <p>
        We'd love to collaborate with others as we unpack what it means to be a
        patriot, find commonalities across languages, and learn to celebrate
        life around us through art. One of our biggest questions for world is
        what does patriotism mean to you? You can contribute to #OurPatriotism.
        <a
          className="link"
          href="https://www.villagevalues.org/blog/ourpatriotism-profile-korean-black-american-rynaidrosa"
        >
          #OurPatriotism
        </a>
      </p>
      <a className="link-button" href="https://www.villagevalues.org/">
        Village Vlaues
      </a>
    </div>
  );
}
