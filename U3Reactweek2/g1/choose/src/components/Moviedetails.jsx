
import { useEffect, useState } from "react";
let eventid = new URLSearchParams(window.location.search).get('Eventid')

function Moviedetails(paramo){
    const [oggettofilm, setOggettofilm] = useState({})
           let none = 0;
                useEffect(() => {
            async function SingleMovieFetch() {
                const response = await fetch(`https://www.omdbapi.com/?i=${eventid}&apikey=d3e16d80&s`)
                const movie = await response.json();
                setOggettofilm(movie)
                
             }
             SingleMovieFetch();
             
          },[]);
          console.log("sonooggetto",oggettofilm)
    return (
        <div>
            <h1>{oggettofilm.Title}</h1>
            <img src={oggettofilm.Poster} alt="" sizes="" /> 
            <p>{oggettofilm.Plot}</p>
            <span>Writer : {oggettofilm.Writer}</span>
            <span>Community : {oggettofilm.Rated}</span>
        </div>
    )

}

export default Moviedetails;