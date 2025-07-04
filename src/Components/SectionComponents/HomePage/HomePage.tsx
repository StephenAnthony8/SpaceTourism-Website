import type { JSX } from "react";
import Explore from "../../GroupedComponents/Explore/Explore";
import "./HomePage.css";

/**
 * HomePage component for the Space Tourism website.
 * Displays the hero section with introductory text and an Explore button.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */

export default function HomePage(): JSX.Element {

  return (
    <section className="homepage homepage-responsive flex">
      <div className="herosection-content herosection-content-responsive flex">
        <article className="herosection-text herosection-text-responsive  half-width flex">
          <p className="text-area1 text-area1-responsive upper text-blue">
            SO, YOU WANT TO TRAVEL TO
          </p>

          <h1 className="space-text space-text-responsive upper text-white">
            Space
          </h1>

          <p className="text-area2 text-area2-responsive text-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <aside className="herosection-explore herosection-explore-responsive half-width center-flex flex">
          <Explore />
        </aside>
      </div>
    </section>
  );
}
