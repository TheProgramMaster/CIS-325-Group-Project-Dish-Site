import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={dish.image} className="img-thumbnail" alt="Dish Image" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{dish.name}</h5>
            <p className="card-text">Type: {dish.type}</p>
            <p className="card-text">Ingredients: {dish.ingredients.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;