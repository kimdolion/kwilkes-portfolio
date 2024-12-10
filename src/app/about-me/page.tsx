import Image from "next/image";
import { Gallery } from "../gallery";

export default function AboutMe() {
  return (
    <div className="about-me-page">
      <div className="two-column-container">
        <h2>About Me: Professionally</h2>
        <div>
          <p>
            I&apos;m an Software Engineer with a passion for optimizing
            workflows and driving impactful solutions. I am a career changer who
            started in elementary education, then made the switch to Software
            Engineering through General Assembly&apos;s Software Engineering
            Immersive bootcamp. I love working in the frontend, making beautiful
            UIs and thoroughly testing the UX with the goal of ensuring
            accessible and responsive apps. I&apos;m committed to continuous
            learning, problem-solving, and collaboration to create user-centric,
            efficient solutions that make a difference.
          </p>
          <p>
            With my can-do attitude, love of puzzles, and willingness to do
            deep-dives into things I&apos;ve developed quite a few skills that
            help me do my job.
          </p>
          <h4>Professional Skills</h4>
          <div>
            <p>Languages and Software Dev Tools</p>
            <ul>
              <li>Frontend Developemnt</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Git</li>
            </ul>
            <p>Work Management Tools</p>
            <ul>
              <li>Jira</li>
              <li>Github</li>
              <li>BitBucket</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column-container">
        <div className="casual-container">
          <h2>About Me: Casually</h2>
          <p>
            I&apos;m African Korean American and proud of my multicultural
            heritage. I&apos;m a jill of all trades, master of none; I find joy
            in just about anything. That being said, I&apos;m a huge nerd:
            animals, gaming, cosplay, crafts, and anything to do with fantasy
            will catch my attention. I probably know something random about an
            animal that you may have never heard of before.
          </p>
          <Gallery />
          <ul>
            <li>Cat Mom of 2</li>
            <li>Cosplayer</li>
            <li>Concert-goer: over 20 in the last year!</li>
            <li>Puzzle Solver</li>
            <li>Music Lover</li>
            <li>Twitch Streamer</li>
            <li>WoW Player (For the Horde!)</li>
          </ul>
        </div>
        <Image
          alt="South Korean and United States flags blended to make a multinational patriot flag"
          className="image-round"
          height={240}
          width={240}
          src="/kor_am_flag.jpg"
        />
      </div>
    </div>
  );
}
