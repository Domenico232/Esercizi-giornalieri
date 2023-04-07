

const change= ((lat,lon,i)=>{
    console.log(lat,lon)
    const fetchata = (async()=>{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e8bbf9844bb572fe76f9cd349b485bb6&units=metric`)
       const meteodiv = await response.json()
       console.log(meteodiv)
       console.log(meteodiv.weather)
       document.getElementById("ricercadef").innerHTML = `

       <div class="text-white">
       <h2>Today at: ${meteodiv.name}</h2>

                <span> ${meteodiv.weather.map((e)=>{
                            console.log(e)
                       return `<span>${e.main},${e.description}</span>`
                })}</span> 
                <br>

                <div>Med Temperature: ${meteodiv.main.temp} c°<div> <br>
                <div>min Temperature: ${meteodiv.main.temp_min} c°<div> <br>
                <div>Max Temperature: ${meteodiv.main.temp_max} c°<div> <br>
                <div>Wind Speed: ${meteodiv.wind.speed} km/h<div> <br>
       
       </div>`
    })
    
    fetchata();
 })