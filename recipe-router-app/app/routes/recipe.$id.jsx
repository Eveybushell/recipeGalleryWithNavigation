import { useParams, Link } from "react-router";
import recipes from "../data/recipes";

export default function Recipe() {
    const { id } = useParams();

    const selectedRecipe = recipes.find(recipe => recipe.id === Number(id));
    return (
        <>
            <h3>
                {selectedRecipe.title}
            </h3>


             <p>
                <strong>Ingredients:</strong> {selectedRecipe.ingredients.join(", ")}
            </p>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} />

            <p>Cooking Instructions</p>

            <Link to="/gallery">Back to gallery</Link>
        </>
    );
};