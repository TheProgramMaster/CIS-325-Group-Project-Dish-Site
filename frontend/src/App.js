import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DishForm from './components/DishForm';
import DishList from './components/DishList';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <DishForm />
      <DishList />
    </div>
  );
}

export default App;