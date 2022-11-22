import { RecipeAPI } from "../interfaces";
import { Box, Stack } from "../layout";
import { Text } from "../ui";
import { uniqueIngredients } from "../utils/Ingredients";

interface RecipeList {
  recipes: RecipeAPI[];
  removeRecipe: (recipeId: string) => void;
}
export const RecipeList = ({ recipes, removeRecipe }: RecipeList) => (
  <Box backgroundColor="rgb(0,0,0,0.1)" height="100vh" width="100%">
    <Stack vertical spaceBetween>
      <Stack vertical>
        <Text size="text-3xl" bold>
          Week
        </Text>
        {recipes.map((recipe, index) => (
          <div key={recipe.id}>
            <Stack centerY>
              <Text>{recipe.name}</Text>
              <button
                className="w-5 h-full bg-slate-600 text-center"
                onClick={() => removeRecipe(recipe.id)}
              >
                X
              </button>
            </Stack>
            {index !== recipes.length - 1 && (
              <Box padding="0 10px">
                <hr
                  style={{
                    backgroundColor: "#eee",
                    border: "0 none",
                    color: "#eee",
                    height: "3px",
                  }}
                />
              </Box>
            )}
          </div>
        ))}
      </Stack>
      <Text bold size="text-2xl">
        Ingredients
      </Text>
      <Stack vertical scrollVertical>
        {uniqueIngredients(recipes).map((ingredient) => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </Stack>
    </Stack>
  </Box>
);
