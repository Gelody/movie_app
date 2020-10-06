import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="200px" />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://biancazapatka.com/wp-content/uploads/2020/07/kimchi-recipe.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyueopsal',
    image: 'https://img3.tmon.kr/cdn3/deals/2019/07/31/2305755250/2305755250_front_b6cbdb3314.jpg',
    rating: 4.9
  }
];

function App() {
  return (
    <div>
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
