import { Link } from "react-router-dom";
import { Flex, Image, Tag } from "antd";
import { CardDetails } from "./styles";
import { ReactElement } from "react";
import pokemonTypes from "../../constants/pokemonTypes";
import { Type } from "../../models/PokemonInfo";

export type CardPokemonProps = {
  name: string;
  title: string;
  src: string;
  linkTo?: string;
  tags?: Type[];
};

const CardPokemon = (props: CardPokemonProps) => {
  const { name, title, src, linkTo, tags } = props;

  const renderTags = () => {
    return tags?.map(({ type }) => {
      const { name: typeName } = type;
      const color = pokemonTypes[typeName].color;

      return (
        <Tag key={typeName} bordered color={color}>
          {typeName}
        </Tag>
      );
    });
  };

  return (
    <Wrapper name={name} linkTo={linkTo}>
      <CardDetails
        hoverable={!!linkTo}
        title={title}
        cover={<Image preview={false} alt={title} src={src} />}>
        <Flex justify="center">{renderTags()}</Flex>
      </CardDetails>
    </Wrapper>
  );
};

const Wrapper = ({
  name,
  linkTo,
  children,
}: {
  name: string;
  linkTo?: string;
  children: ReactElement;
}) => {
  if (linkTo) {
    return (
      <Link data-testid={`card-link-${name}`} to={linkTo}>
        {children}
      </Link>
    );
  } else {
    return <>{children}</>;
  }
};

export default CardPokemon;
