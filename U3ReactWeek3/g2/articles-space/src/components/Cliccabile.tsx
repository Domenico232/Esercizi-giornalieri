import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface Spacedw {
  id:          number;
  title:       string;
  url:         string;
  imageUrl:    string;
  newsSite:    string;
  summary:     string;
  publishedAt: Date;
  updatedAt:   Date;
  featured:    boolean;
  launches:    any[];
  events:      any[];
}


export const Cliccabile = () =>{
  const par:any= useParams()

  const [Articolisingoli, setArticoliS] = useState<Spacedw>() 

  console.log(par)

  const fetchata2 = async() =>{
    try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles/" + par.Eventid)
        if (response.ok) {
            const risultati = await response.json();
            setArticoliS(risultati)
            console.log(risultati)
            console.log(Articolisingoli)
        }
    } catch (error) {
        console.log("error",error)
    }
}

useEffect(()=>{
    fetchata2()
},[])



    return(<div className="text-white"><div>{Articolisingoli?.title}  </div>
            <img src={Articolisingoli?.imageUrl} alt="logo" />
    
    </div>
    )
    
    }