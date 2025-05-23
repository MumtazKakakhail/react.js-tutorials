export const SeriesCard = ({data}) => {
    const {  img_url, name, rating, summary, genre, cast, watch_url } = data;
    return (
        <li className="card">
            <div>
                <img src={img_url} alt="name" width="40%" height="40%" />
            </div>
            <div className="card-content">
            <h2>Name: {name} </h2>
            <h3>Rating: {rating} </h3>
            <p>Summary: {summary} </p>
            <p>Genre: {genre} </p>
            <p>Cast: {cast} </p>
            <a href={watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </div>
        </li>
    );
}