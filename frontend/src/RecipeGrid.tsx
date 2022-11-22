import { RecipeAPI } from "./interfaces";
import { Box, Grid } from "./layout";
import { Recipe } from "./Recipe";
import { inCommon, uniqueIngredients } from "./utils/Ingredients";

interface RecipeGridProps {
  recipes: RecipeAPI[];
  onTileClick: (recipe: RecipeAPI) => void;
  picked: RecipeAPI[];
}
export const RecipeGrid = ({
  recipes,
  onTileClick,
  picked,
}: RecipeGridProps) => {
  return (
    <Box width="100%">
      <Grid cols={4} spacing="10px">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            onClick={() => onTileClick(recipe)}
            ingredientsInCommon={
              !picked.includes(recipe)
                ? inCommon(recipe, uniqueIngredients(picked)).length
                : 0
            }
          />
        ))}
      </Grid>
    </Box>
  );
};
