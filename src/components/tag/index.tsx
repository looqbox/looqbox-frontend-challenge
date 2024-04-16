import React from "react";
import { Spinner } from "../spinner";
import classNames from "classnames";
import "./style.css";
import { ITag } from "./interface";
import { PokemonTypeTypes } from "../../types";
import { typeIcons, typeTranslations } from "../../types/constants.type";
import { Flex } from "rebass";

export const Tag: React.FC<ITag> = ({
  children,
  pokemonType = "normal",
  error,
  loading,
  ...props
}) => {
  const translatedType = typeTranslations[pokemonType] || pokemonType;
  const typeKey: string = pokemonType;
  const IconComponent = typeIcons[typeKey as PokemonTypeTypes];

  return (
    <div
      className={classNames("tag", {
        [`tag-${pokemonType.toLowerCase()}`]: pokemonType,
      })}
      {...props}
    >
      <Flex className="tag-icon">{IconComponent && <IconComponent />}</Flex>

      <span className="tag-label">{pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}</span>

      {loading && (
        <div className="tag-loading-container">
          <Spinner className="loading-tag" scale={0.5} />
        </div>
      )}
    </div>
  );
};
