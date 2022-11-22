import React, { useState } from "react";
import { RecipeAPI } from "./interfaces";
import { Box, Stack } from "./layout";
import { Text } from "./ui";
import { inCommon, uniqueIngredients } from "./utils/Ingredients";

interface SearchBarProps {
  setFilterFunc: React.Dispatch<
    React.SetStateAction<((recipes: RecipeAPI) => boolean) | undefined>
  >;
  setSortFunc: React.Dispatch<
    React.SetStateAction<
      ((recipeA: RecipeAPI, recipeB: RecipeAPI) => number) | undefined
    >
  >;
  showingRecipes: RecipeAPI[];
  pickedRecipes: RecipeAPI[];
}
export const SearchBar = ({
  setFilterFunc,
  setSortFunc,
  showingRecipes,
  pickedRecipes,
}: SearchBarProps) => {
  const ingredients = uniqueIngredients(pickedRecipes);
  return (
    <Box height="50px">
      <Stack spacing={20} centerY>
        <input
          style={{ height: "40px", width: "400px", fontSize: "40px" }}
          placeholder="Search Recipe"
          className="border-2"
          onChange={(change) =>
            setFilterFunc(
              () => (recipe: RecipeAPI) =>
                recipe?.name
                  .toLowerCase()
                  .includes(change.target.value.toLowerCase()) || false
            )
          }
        />
        <button
          className="border-4 text-xs"
          style={{ height: "40px" }}
          onClick={() =>
            setSortFunc(
              () => (recipeA: RecipeAPI, recipeB: RecipeAPI) =>
                inCommon(recipeB, ingredients).length -
                inCommon(recipeA, ingredients).length
            )
          }
        >
          Sort By In Common
        </button>
        <button
          className="border-4 text-xs"
          style={{ height: "40px" }}
          onClick={() =>
            setSortFunc(
              () => (recipeA: RecipeAPI, recipeB: RecipeAPI) =>
                recipeB.name.localeCompare(recipeA.name)
            )
          }
        >
          Sort By Name
        </button>
        <button
          className="border-4 text-xs"
          style={{ height: "40px" }}
          onClick={() => {
            setFilterFunc(undefined);
            setSortFunc(undefined);
          }}
        >
          Clear
        </button>
        <Text>Showing {showingRecipes.length} recipes</Text>
      </Stack>
    </Box>
  );
};
