import "./Explore.css";
function Explore() {
  const homepage: string = "#";
  return (
    <a href={homepage} className="explore-link">
      <button className="explore explore-mobile flex flex-center upper text-dark circle">
        <span>Explore</span>
      </button>
    </a>
  );
}

export default Explore;
