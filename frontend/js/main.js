// Get DOM elements
const addDishForm = document.getElementById("add-dish-form");
const updateDishForm = document.getElementById("update-dish-form");
const searchDishesForm = document.getElementById("search-dishes-form");
const dishesTable = document.getElementById("dishes-table");

// Helper function to create table row
function createDishRow(dish) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${dish._id}</td>
    <td>${dish.name}</td>
    <td><img src="${dish.image}" alt="${dish.name}" width="100"></td>
    <td>${dish.type}</td>
    <td>${dish.ingredients.join(", ")}</td>
  `;

  return row;
}

// Function to fetch all dishes and display them in the table
async function fetchDishes() {
  const response = await fetch("http://localhost:3001/dishes");
  const dishes = await response.json();

  dishesTable.querySelector("tbody").innerHTML = "";
  dishes.forEach(dish => {
    dishesTable.querySelector("tbody").appendChild(createDishRow(dish));
  });
}

// Add dish event listener
addDishForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(addDishForm);
  const ingredients = formData.get("ingredients").split(",").map(ingredient => ingredient.trim());

  const dish = {
    name: formData.get("name"),
    image: formData.get("image"),
    type: formData.get("type"),
    ingredients: ingredients
  };

  await fetch("http://localhost:3001/dishes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dish),
  });

  addDishForm.reset();
  fetchDishes();
});

// Update dish event listener
updateDishForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(updateDishForm);
  const id = formData.get("update-id");
  const ingredients = formData.get("update-ingredients")
    ? formData.get("update-ingredients").split(",").map(ingredient => ingredient.trim())
    : undefined;

  const dish = {
    name: formData.get("update-name") || undefined,
    image: formData.get("update-image") || undefined,
    type: formData.get("update-type") || undefined,
    ingredients: ingredients
  };

  await fetch(`http://localhost:3001/dishes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dish),
  });

  updateDishForm.reset();
  fetchDishes();
});

// Search dishes event listener
searchDishesForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(searchDishesForm);
  const type = formData.get("search-type");
  const ingredient = formData.get("search-ingredient");
  const name = formData.get("search-name");

  let url = "http://localhost:3001/dishes?";
  if (type) url += `type=${type}&`;
  if (ingredient) url += `ingredient=${ingredient}&`;
  if (name) url += `name=${name}`;

  const response = await fetch(url);
  const dishes = await response.json();

  dishesTable.querySelector("tbody").innerHTML = "";
  dishes.forEach(dish => {
dishesTable.querySelector("tbody").appendChild(createDishRow(dish));
});
});

// Fetch dishes on page load
fetchDishes();