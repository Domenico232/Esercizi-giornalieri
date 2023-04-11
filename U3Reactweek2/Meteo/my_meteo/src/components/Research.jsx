import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const state=""
const limit = 5;
let i=1;
export default function Research(){
   

  const handleresearch = (e)=>{
     const city = e.target.value
     console.log(city)
     const APIK = "e8bbf9844bb572fe76f9cd349b485bb6"

        const APIsearch = async()=>{
           const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=${limit}&appid=${APIK}`)
           const meteoris = await response.json();
           console.log(meteoris)
           document.getElementById("ricerca").innerHTML ="";
           meteoris.map((e)=>{
                  
            document.getElementById("ricerca").innerHTML += `<li id="lista${i}" onclick="change(${(e.lat)},${e.lon},lista${i})" class="listaris">${e.name},${e.state} </li>`
            i++;
           })
         }
           

               APIsearch();
            };
           
          
        
        return ( 
         <div>
         <input type="search" name="" placeholder="Insert city" onChange={handleresearch} />
      
         </div>
      )
         }
 
  


   // meteoris.map((e)=>{
   //   document.getElementById("ricerca").innerHTML += `<li class="listaris">${e.name},${e.state} </li>`
    // })
   //

   /*   async function fetch2() {
      meteoris.map(async(e)=>{
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=${APIK}`)
         const newresult = await response.json();
         console.log(newresult)
              document.getElementById("ricerca").innerHTML += `<li class="listaris">${newresult.name},${newresult.state} </li>`
            
      })
      
   }
   fetch2();*/
