import React from 'react';

function Food({ name }) {
  return <h1>I like {name}</h1>;
}

const foodILike = [
  {
    name : "kimchi"
  },
  {
    name : "삼겹살"
  },
  {
    name : "김밥"
  },
  {
    name : "족발"
  }
]


function App() {
  return (
  <div>
    {foodILike.map(dish => <Food name = {dish.name} picture = {dish.image} />)}
  </div>
  //2.2     9 : 19
  
  );
}

export default App;
