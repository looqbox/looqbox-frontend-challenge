import React from 'react';
import styles from './styles.module.css';

interface IProps {
    abilities: {
        ability: {
            name: string;
        };
    }[];
    name_pokemon: string;
}
const TagAbilities: React.FC<IProps> = ({ abilities, name_pokemon }) => {
    return (
        <>
            {abilities.map(item => {
                return (
                    <div
                        className={`${styles.type}`}
                        key={`ability_${name_pokemon}_${item.ability.name}`}
                    >
                        {item.ability.name}
                    </div>
                );
            })}
        </>
    );
};

export default TagAbilities;
