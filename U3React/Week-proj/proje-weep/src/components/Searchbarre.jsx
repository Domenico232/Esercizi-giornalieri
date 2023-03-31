import React, { Component} from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"




class Searchbarre extends Component {
    
 state = {
    datifilms : []
}

refreshData(e) {
    const word = e.target.value;
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=d3e16d80&s=${word}`;
    const bello = document.getElementById('cirio') 

      async function name() {
        
            const response =  await fetch(url)
            const movies =  await response.json()
            console.log(movies)
            let lello = movies.Search;
                bello.innerHTML="";
            for (let index = 0; index < lello.length; index++) {
                bello.innerHTML += `<div class="card bg-dark" style="width: 18rem;">
                <img class="card-img-top" src="${lello[index].Poster}" alt="Card image cap">
                <div class="card-body bg-dark">
                  <h5 class="card-title text-white">${lello[index].Title}</h5>
                </div>
              </div>`
              console.log(bello)
               
                
            }}
      name();
  } 



  
render(){
    return (
        <div className="search">
        <input type="text" placeholder="Qui?" className="search bg-dark text-white" onChange={this.refreshData}/> 

        
        <div className="dataResult row" id="cirio" > 

         
           </div>
          
        </div>
    )
    }}

export default Searchbarre;

/*getfilms = async(dati) =>  {
    try {
       const response =  await fetch(Url+dati)
       const movies =  await response.json()
       this.setState({
        datifilms : movies.Search
       })
    } catch (error) {
        console.log(error)
    }
}*/