import { Link } from "react-router";
import recipes from "../data/recipes"

function RecipeCard({ recipe }) {
  return (
    <div className="recipeCard">
      <h3>
        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
      </h3>
      
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
      </p>
      
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
}

export default function RecipeGallery() {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}