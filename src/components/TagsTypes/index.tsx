import React from 'react';
import styles from './styles.module.css';

interface IProps {
    types: {
        type: {
            name: string;
        };
    }[];
    name_pokemon: string;
}
const TagsTypes: React.FC<IProps> = ({ types, name_pokemon }) => {
    return (
        <>
            {types.map(item => {
                return (
                    <div
                        className={`${styles.type}`}
                        style={{
                            background: `var(--type-${item.type.name})`,
                        }}
                        key={`${name_pokemon}_${item.type.name}`}
                    >
                        {item.type.name}
                    </div>
                );
            })}
        </>
    );
};

export default TagsTypes;
