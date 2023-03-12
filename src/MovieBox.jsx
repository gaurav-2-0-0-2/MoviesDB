import React from "react";
const imageUrl = `https://image.tmdb.org/t/p/w500`;

const MovieBox = ({ title, poster_path, overview, release_date }) => {

    return (

        <div>
            <img className="h-[450px] w-full" src={imageUrl + poster_path} alt="1" />
            <h1>{title}</h1>
            <p>{overview}</p>
            <p>{release_date}</p>
        </div>

    );

}

export default MovieBox;