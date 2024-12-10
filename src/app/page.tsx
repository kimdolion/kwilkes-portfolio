import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-page">
      <Image
        className="image"
        src="/profile.jpg"
        alt="Next.js logo"
        height={440}
        width={320}
        priority
      />
      <div className="home-container">
        <p>
          Hey y'all! My name is Kimberly Wilkes. Welcome to my portfolio
          project!
        </p>
        <Link className="link" href="/about-me">
          About Me
        </Link>
        <Link className="link" href="/work-experience">
          Work Experience
        </Link>
        <Link className="link" href="/village-values">
          Village Values
        </Link>
      </div>
    </div>
  );
}
