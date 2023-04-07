const state=""
const limit = 5;

export default function Research(){

  const handleresearch = (e)=>{
     const city = e.target.value
     console.log(city)
     const APIK = "e8bbf9844bb572fe76f9cd349b485bb6"

        const APIsearch = async()=>{
           const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state}&limit=${limit}&appid=${APIK}`)
           const meteoris = await response.json();
              effective(meteoris)
             
          };
        APIsearch();
         }
   const effective = async(meteoris)=>{
      const NewKey = "e9dce3355d5c940205eedfba5ea7cef7"
        meteoris.map(async(e)=>{
         console.log("lon",e.lon)
         console.log("lat",e.lat)
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=${NewKey}`)
         const meteoeffective = await response.json()
         console.log("sono meteo",meteoeffective)
       })
   }

   return (
      <input type="search" name="" id="ricerca" onChange={handleresearch} />
   )


   }