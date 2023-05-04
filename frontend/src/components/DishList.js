import React, { useState, useEffect } from 'react';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetchDishes();
  }, []);

  const fetchDishes = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/dishes');
      const data = await response.json();
      setDishes(data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  return (
    <div>
      <h2>Dishes</h2>
      <ul>
        {dishes.map((dish) => (
          <li key={dish._id}>
            <h3>{dish.name}</h3>
            <p>Type: {dish.type}</p>
            <p>Ingredients: {dish.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
