import seriesData from "../api/seriesData.json";
const NetflixSeries = () => {
    return (

<ul>
    {seriesData.map((curElem) => {
        return(
 <li key={curElem.id}>
      <div>
        <img src= {curElem.img_url} alt="" width="40%" height="40%" />
        </div>
    <h2>Name: {curElem.name} </h2>
    <h3>Rating: {curElem.rating} </h3>
     <p>Summary: {curElem.summary} </p>
    <p>Genre: {curElem.genre}</p>
</li>)
    })}
   
    </ul>

    );
}
export default NetflixSeries;