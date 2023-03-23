import React from "react";
const imageUrl = `https://image.tmdb.org/t/p/w500`;

const MovieBox = ({ title, poster_path, overview, release_date }) => {

    return (

        <div className="bg-white p-4">
            <img className="h-[450px] w-full mb-4" src={imageUrl + poster_path} alt="1" />
            <h1 className="text-2xl font-bold">{title}</h1>
            <p>{overview}</p>
            <p className="font-bold">Release Date:{release_date}</p>
        </div>

    );

}

export default MovieBox;