import { Link } from "react-router-dom";
import {useState, useEffect } from "react";

interface Space {
    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    string;
    summary:     string;
    publishedAt: Date;
    updatedAt:   Date;
    featured:    boolean;
    launches:    Launch[];
    events:      any[];
}

interface Launch {
    id:       string;
    provider: string;
}




export const Home = () =>{
    const [Articoli, setArticoli] = useState<Space[]>([]) 

const fetchata = async() =>{
    try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
        if (response.ok) {
            const risultati = await response.json();
            setArticoli(risultati)
        }
    } catch (error) {
        console.log("error",error)
    }
}
useEffect(()=>{
    fetchata()
},[])


return(

<div>
    <h2 className="text-white">Articoli Disponibili</h2>
    <ul>
        {Articoli.map((Space)=>(
            <li key={Space.id}>
            <Link className="Links" to={`/article/`+ Space.id}>{Space.title}</Link>
            </li>
        ))}
    </ul>
</div> 

)}