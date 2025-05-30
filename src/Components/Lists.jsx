// import "./Netflix.css";
import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, summary, genre, cast, watch_url } = data;


  // const btn_style = {}
  const ButtonOne = styled.button ({
 padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: `${rating >= 97 ? " rgb(37, 219, 219)" : " rgb(240, 191, 132)"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  });
   
  
  const ratingClass = rating >= 97 ? styles.super : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt="name" width="40%" height="40%" />
      </div>
      <div className={styles["card-content"]}>
        <h2>Name: {name} </h2>
        <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>
          {rating}
        </span>
        </h3>
        <p>Summary: {summary} </p>
        <p>Genre: {genre} </p>
        <p>Cast: {cast} </p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
        <ButtonOne>Watch Now</ButtonOne>
        </a>
      </div>
    </li>
  );
};
