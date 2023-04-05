import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

class FirstCarousel extends Component{
    state = {
        films:[]
    }

   
  
    

    getHarryfilms = async() =>  {
            try {
               const response = await fetch(this.props.APIFilms)
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
       <div className="mt-5">
        <h2>{this.props.title}</h2>
        <Carousel responsive={responsive}>

            {this.state.films.map((e)=>{
                    return(
                    <Link to={'/Moviedetails/'+(e.imdbID)} key={e.imdbID} className="carim"><img src={e.Poster} alt="" width={400}/></Link>
                    )
            })}
          
          
        </Carousel>
        </div>
        
        )
        }
    }

export default FirstCarousel