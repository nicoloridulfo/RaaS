import { useState } from "react";
import { RecipeAPI } from "./interfaces";
import { Text } from "./ui";

interface RecipeProps {
  recipe: RecipeAPI;
  onClick: () => void;
  ingredientsInCommon?: number;
}

export const Recipe = ({
  recipe,
  onClick,
  ingredientsInCommon,
}: RecipeProps) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className={`relative h-full w-full border-1 rounded-xl overflow-hidden`}
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={onClick}
    >
      {ingredientsInCommon !== undefined && ingredientsInCommon > 0 && (
        <div className="absolute top-1 left-1 rounded-full text-white bg-red-500 w-6 align-middle text-center">
          <Text bold>{ingredientsInCommon?.toString()}</Text>
        </div>
      )}
      <div
        className="flex absolute bottom-0 w-full p-1"
        style={{ backgroundColor: "rgb(0,0,0,0.3)" }}
      >
        {showDescription ? (
          <div className={`w-full p-1 overflow-y-scroll`}>
            <p
              dangerouslySetInnerHTML={{ __html: recipe.shortDescription }}
              className={`text-xl font-bold align-middle text-white m-0`}
            ></p>
          </div>
        ) : (
          <h3 className={`text-xl font-bold align-middle text-white m-0`}>
            {recipe.name}
          </h3>
        )}
      </div>
      {recipe.image.cloudinaryUrl && (
        <img
          src={recipe.image.cloudinaryUrl
            .replace("{w}", "400")
            .replace("{h}", "400")
            .replace("{device}", "mobile")}
          alt={recipe.name}
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
        />
      )}
    </div>
  );
};
