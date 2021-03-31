import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picturem, rating }) {
  return (
    <div>
      <h2>I kile {name}</h2>
      <h4>{rating}/5 </h4>
      <img src={picture} alt={name} />
    </div>
  );
}
//2.4  3:43
Food.PropTypes={

}

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    rating: 5
  },
  {
    id : 2,
    name : "삼겹살",
    rating:4.9
  },
  {
    id : 3,
    name : "김밥",
    rating:5.5
  },
  {
    id : 4,
    name : "족발",
    rating:4.7
  }
]


function App() {
  return (
  <div>
   {foodILike.map(dish => (
     <Food 
      key={dish.id}
      name={dish.name}
      picture={dish.imge}
      rating={dish.rating}
       />
   ))}
  </div>

  
  );
}

export default App;
