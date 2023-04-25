import React, { useState, useEffect } from 'react';
import DishCard from './DishCard';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Call the API to get all dishes and their ingredients
    // Replace the function below with the actual API call
    const fetchDishes = async () => {
      const mockData = [
        {
          name: 'Soup #1',
          image: 'https://th.bing.com/th/id/OIP.QDGp8bFUaQloSl7hFZypfAHaFP?pid=ImgDet&rs=1',
          type: 'Vegetable Soup',
          ingredients: ['Carrots', 'Potatoes', 'Celery', 'Onion', 'Garlic', 'Vegetable Broth'],
        },
        // Add more mock data here
      ];

      setDishes(mockData);
    };

    fetchDishes();
  }, []);

  return (
    <div className="container">
      <h1>All Dishes</h1>
      <div className="row">
        {dishes.map((dish, index) => (
          <div className="col-md-4" key={index}>
            <DishCard dish={dish} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishList;