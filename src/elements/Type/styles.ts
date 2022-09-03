import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > b {
        font-size: 20px;
        color: var(--text-white);
    }

    -webkit-box-shadow: 4px 2px 7px -2px rgba(0,0,0,0.3); 
    box-shadow: 4px 2px 7px -2px rgba(0,0,0,0.3);

    padding: 8px 16px;
    border-radius: 4px;

    @media (max-width: 768px) {
        & > b {
            font-size: 18px;
        }
    }

    &.normal {
        background-color: var(--normal);
    }

    &.fire{
        background-color: var(--fire);
    }

	&.water{
        background-color: var(--water);
    }

	&.electric{
        background-color: var(--electric);
    }

	&.grass{
        background-color: var(--grass);
    }

	&.ice{
        background-color: var(--ice);
    }

	&.fighting{
        background-color: var(--fighting);
    }

	&.poison{
        background-color: var(--poison);
    }

	&.ground{
        background-color: var(--ground);
    }

	&.flying{
        background-color: var(--flying);
    }

	&.psychic{
        background-color: var(--psychic);
    }

	&.bug{
        background-color: var(--bug);
    }

	&.rock{
        background-color: var(--rock);
    }

	&.ghost{
        background-color: var(--ghost);
    }

	&.dragon{
        background-color: var(--dragon);
    }

	&.dark{
        background-color: var(--dark);
    }

	&.steel{
        background-color: var(--steel);
    }

	&.fairy{
        background-color: var(--fairy);
    }

`;