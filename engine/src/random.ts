import { Recipe } from "./parser";

/**
 * Returns the elements in common between the given sets.
 */
const intersection = (sets: Set<string>[]) =>
  [...sets[0]].filter((x) => sets.slice(1).every((s) => s.has(x)));

export const find_groups = (recipes: Recipe[], n: number, samples: number) => {
  const result: Recipe[][] = [];

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
          intersection([recipe, ...week].map((r) => r.ingredients)).length
      );

      const max = Math.max(...similarities);

      const indicies = remaining.filter(
        (_, index) => similarities[index] === max
      );
      const next = indicies[Math.floor(Math.random() * indicies.length)];
      week.push(next);
      remaining.splice(remaining.indexOf(next), 1);
    }
    result.push(week);
  }
  return result;
};
