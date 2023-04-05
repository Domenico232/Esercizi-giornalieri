
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
let eventid = new URLSearchParams(window.location.search).get('Eventid')

function Moviedetails(){
    const [oggettofilm, setOggettofilm] = useState({})
    const params = useParams()
    console.log(params)
  

      
     useEffect(() => {
        async function SingleMovieFetch() {
            try {
                const response = await fetch(`https://www.omdbapi.com/?i=${params.MovieID}&apikey=d3e16d80&s`)
            const movie = await response.json();
            setOggettofilm(movie)
            } catch (error) {
                console.log(error)
            }
            
            
         }  
         SingleMovieFetch();
 },[]);

           
        
            

    return (
        <div>
            <div className="dataResult row" id="cirio" > 
            </div>
            <h1>{oggettofilm.Title}</h1>
            <img src={oggettofilm.Poster} alt="" sizes="" /> 
            <p>{oggettofilm.Plot}</p>
            <span>Writer : {oggettofilm.Writer}</span>
            <span>Community : {oggettofilm.Rated}</span>
        </div>
    )

}

export default Moviedetails;