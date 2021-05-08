import React from 'react';
import * as Style from './styled';

function Card({ pokemon }) {
    return (
        <Style.CardStyled>
            <Style.CardImg>
                <img src={pokemon.sprites.front_default} alt="" />
                <Style.CardName>
                    {pokemon.name}
                </Style.CardName>
            </Style.CardImg>
            <Style.CardTypes>
                {
                    pokemon.types.map(type => {
                        return (
                            <Style.CardType>
                                {type.type.name}
                            </Style.CardType>
                        );
                    })
                }
            </Style.CardTypes>
            <Style.CardInfo>
                <div className="Card__data Card__data--weight">
                    <p className="title">Peso: {pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Altura: {pokemon.height} </p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Habilidade: {pokemon.abilities[0].ability.name}</p>
                </div>
            </Style.CardInfo>
        </Style.CardStyled>
    );
}

export default Card;
