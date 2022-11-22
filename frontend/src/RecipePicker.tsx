import { useState } from "react";
import recipesAPI from "./assets/recipedb.json";
import { RecipeList } from "./features/RecipeList";
import { RecipeAPI } from "./interfaces";
import { Box, Stack } from "./layout";
import { RecipeGrid } from "./RecipeGrid";
import { SearchBar } from "./SearchBar";

export const RecipePicker = () => {
  const recipes = (recipesAPI as RecipeAPI[]).filter(
    (recipe) => recipe.name && recipe.image.cloudinaryUrl
  );
  const [picked, setPicked] = useState<RecipeAPI[]>([]);
  const [filterFunc, setFilterFunc] =
    useState<(recipes: RecipeAPI) => boolean>();
  const [sortFunc, setSortFunc] =
    useState<(recipesA: RecipeAPI, recipeB: RecipeAPI) => number>();
  const [numToShow, setNumToShow] = useState(20);

  console.log(sortFunc);

  const recipesToShow = recipes
    .sort(sortFunc)
    .filter((recipe) => !picked.includes(recipe))
    .filter(filterFunc || ((recipe: RecipeAPI) => true));
  return recipes ? (
    <Stack width="100%" key="Main">
      <Stack vertical width="80%">
        <SearchBar
          setFilterFunc={setFilterFunc}
          setSortFunc={setSortFunc}
          showingRecipes={recipesToShow}
          pickedRecipes={picked}
        />
        <Box width="100%" scrollVertical>
          <RecipeGrid
            recipes={recipesToShow.slice(0, numToShow)}
            onTileClick={(recipe) => setPicked((prev) => [...prev, recipe])}
            picked={picked}
          />
        </Box>
        <button
          style={{ height: "50px", width: "100%", border: "1px solid black" }}
          onClick={() => setNumToShow((prev) => prev + 20)}
        >
          Show More
        </button>
      </Stack>
      <Box width="20%">
        <RecipeList
          recipes={picked}
          removeRecipe={(recipeId) =>
            setPicked((prev) => prev.filter((recipe) => recipe.id !== recipeId))
          }
        />
      </Box>
    </Stack>
  ) : (
    <h1>Loading...</h1>
  );
};
