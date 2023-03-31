import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class FirstCarousel extends Component{
    state = {
        films:[]
    }
  
    

    getHarryfilms = async() =>  {
            try {
               const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=d3e16d80&s=harry%20potter")
               const Harrymovies = await response.json()
               console.log(Harrymovies)
               this.setState({
                films : Harrymovies.Search
               })
            } catch (error) {
                console.log(error)
            }
    }
    componentDidMount(){
        this.getHarryfilms();
    }

    render(){
        
        return (
            <div className="pt-5">
                <h2>Serie del momento </h2>
                <div> (
    <Carousel>
       
        
        <Carousel.Item>
        
            <div className="d-flex">
            {this.state.films.map((e)=>{
            return(
                <>
        <img
          className="d-block w-100"
          src={e.Poster}
          alt="First slide"
        />
        </>)
        })}

        </div>
        </Carousel.Item>
      
                
            
    
        
      
    </Carousel>
  );</div>
              </div>    
        )
    }
}

export default FirstCarousel