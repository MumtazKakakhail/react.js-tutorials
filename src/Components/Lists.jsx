import "./Netflix.css";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, summary, genre, cast, watch_url } = data;
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "rgb(49, 107, 201)",
    color: "white",
  };
  return (
    <li className="card">
      <div>
        <img src={img_url} alt="name" width="40%" height="40%" />
      </div>
      <div className="card-content">
        <h2>Name: {name} </h2>
        <h3>Rating: <span className= {rating >= 95 ? "super-hit" : "average"}>
           {rating}
            </span> 
            </h3>
        <p>Summary: {summary} </p>
        <p>Genre: {genre} </p>
        <p>Cast: {cast} </p>
        <a href={watch_url} target="_blank">
          <button style={btn_style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
