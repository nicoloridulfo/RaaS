import { Group } from "./parser";

export const toBuy = (group: Group): string[] => {
  const ingredients = Array.from(
    new Set(group.recipes.flatMap((r) => r.ingredients))
  );
  const inCommon = group.in_common;
  return ingredients.filter((i) => !inCommon.includes(i));
};
