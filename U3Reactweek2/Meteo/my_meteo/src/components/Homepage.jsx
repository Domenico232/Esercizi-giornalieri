
import Container from "react-bootstrap/esm/Container";

import Research from "./Research";
export default function Home(params) {
      
return(
   <Container>
      <div><Research /></div>
       <ul id="ricerca"></ul>
       <div id="ricercadef">
         <span id="Whead" className="text-white"></span>
       </div>
   </Container>
   
 )
 }

/*  meteoris.map(async(e)=>{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=e8bbf9844bb572fe76f9cd349b485bb6`)orf
            const singolo = await response.json();
               console.log(singolo)      
           
         })*/