
import React, { useState } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Searchbar({data}) {
    
const [filteredData, setFilteredData] = useState([]);

const handleFilter =  (event) =>{
    const searchWord = event.target.value
    console.log(searchWord);
    const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter)
}
    return (
        <div className="search">
        <input type="text" placeholder="Qui?" onChange={handleFilter}/> 

        
        <div className="dataResult row" > 
          {filteredData.map((value, key)=>{
            
             
            return (
              <Card style={{ width: '18rem' }}  key={value.asin} >
              <Card.Img variant="top" src={value.img}/>
              <Card.Body>
                <Card.Title>{value.title}</Card.Title>
                <Card.Text>
                  {value.category}
                </Card.Text>
                <Button variant="primary">BUY</Button> <span>{value.price}$</span>
              </Card.Body>
              </Card>
            )
           
           
          })}  
           </div>
          
        </div>
    )
    }

export default Searchbar