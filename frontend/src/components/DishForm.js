import React, { useState } from 'react';

const DishForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    type: '',
    ingredients: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the API to add a dish to the database
  };

  return (
    <div className="container">
      <h1>Add a Dish</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Dish Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="image">Dish Image URL:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />
        <label htmlFor="type">Dish Type:</label>
        <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} required />
        <label htmlFor="ingredients">Dish Ingredients:</label>
        <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} required></textarea>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default DishForm;