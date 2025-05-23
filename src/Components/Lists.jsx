import './Netflix.css'

export const SeriesCard = ({data}) => {
    const {  img_url, name, rating, summary, genre, cast, watch_url } = data;
    return (
        <li className="card">
            <div>
                <img src={img_url} alt="name" width="40%" height="40%" />
            </div>
            <div className="card-content">
            <h2>Name: {name} </h2>
            <h3 style={{margin: "1.2rem  0"}}>Rating: {rating} </h3>
            <p style={{margin: "1.2rem  0"}}>Summary: {summary} </p>
            <p style={{margin: "1.2rem  0"}}>Genre: {genre} </p>
            <p style={{margin: "1.2rem  0"}}>Cast: {cast} </p>
            <a href={watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </div>
        </li>
    );
}