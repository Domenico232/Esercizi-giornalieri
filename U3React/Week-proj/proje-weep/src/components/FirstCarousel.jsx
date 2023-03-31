import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

class FirstCarousel extends Component{
    state = {
        films:[]
    }

    

    getHarryfilms = async() =>  {
            try {
               const response = await fetch({})
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
        this.getHarryfilms()
    }

    render(){
        
        return (
            <div className="pt-5">
                <h2>Serie del momento </h2>
                <div> (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );</div>
              </div>    
        )
    }
}

export default FirstCarousel