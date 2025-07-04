import { Link } from "react-router";
import "./Explore.css";
function Explore() {
  const homepage: string = "/destination";
  return (
    <Link to={homepage} className="explore-link">
      <button className="explore explore-mobile flex flex-center upper text-dark circle">
        <span>Explore</span>
      </button>
    </Link>
  );
}

export default Explore;
