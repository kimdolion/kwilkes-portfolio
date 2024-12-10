"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke",
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

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
          My name is Kimberly Wilkes. <br />
          Welcome to my portfolio project!
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
        <div className="joke-container">
          <h4>Random Joke Generator</h4>
          <p>{joke}</p>
          <button className="button" onClick={fetchJoke}>
            Get {joke === "" ? "A" : "Another"} Joke
          </button>
        </div>
      </div>
    </div>
  );
}
