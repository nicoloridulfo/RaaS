import { Group, Recipe } from "./parser";

/**
 * Returns the elements in common between the given sets.
 */
const intersection = (sets: Array<string>[]) =>
  [...sets[0]].filter((x) => sets.slice(1).every((s) => s.includes(x)));

/**
 * Uses random sampling to find groups of recipes
 */
export const find_groups = (recipes: Recipe[], n: number, samples: number) => {
  const result: Group[] = [];
  for (let sample = 0; sample < samples; sample++) {
    let remaining: Recipe[] = [...recipes];
    const initial = remaining.splice(
      Math.floor(Math.random() * remaining.length),
      1
    )[0];

    const week = [initial];

    for (let m = 0; m < n - 1; m++) {
      const similarities = remaining.map(
        (recipe) =>
          intersection([recipe.ingredients, ...week.map((r) => r.ingredients)])
            .length
      );
      const max = Math.max(...similarities);

      const indices = remaining.filter(
        (_, index) => similarities[index] === max
      );
      const next = indices[Math.floor(Math.random() * indices.length)];
      week.push(next);
      remaining.splice(remaining.indexOf(next), 1);
    }
    const inCommon = intersection(week.map((r) => r.ingredients));
    result.push({ recipes: week, in_common: inCommon, score: inCommon.length });
  }
  return result;
};
