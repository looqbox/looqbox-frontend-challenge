import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

		color: var(--text-black);
		text-transform: capitalize;
    }
    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: 'Outfit', sans-serif;
    }

	html {
        background: white;
    }

    :root {
		--text-black: #343A40;
		--text-white: #FAFAFA;

        --normal: #A8A77A;
	    --fire: #EE8130;
	    --water: #6390F0;
	    --electric: #F7D02C;
	    --grass: #7AC74C;
	    --ice: #96D9D6;
	    --fighting: #C22E28;
	    --poison: #A33EA1;
	    --ground: #E2BF65;
	    --flying: #A98FF3;
	    --psychic: #F95587;
	    --bug: #A6B91A;
	    --rock: #B6A136;
	    --ghost: #735797;
	    --dragon: #6F35FC;
	    --dark: #705746;
	    --steel: #B7B7CE;
	    --fairy: #D685AD;

        --background-normal: #A8A77A88;
	    --background-fire: #EE813088;
	    --background-water: #6390F088;
	    --background-electric: #F7D02C88;
	    --background-grass: #7AC74C88;
	    --background-ice: #96D9D688;
	    --background-fighting: #C22E2888;
	    --background-poison: #A33EA188;
	    --background-ground: #E2BF6588;
	    --background-flying: #A98FF388;
	    --background-psychic: #F9558788;
	    --background-bug: #A6B91A88;
	    --background-rock: #B6A13688;
	    --background-ghost: #73579788;
	    --background-dragon: #6F35FC88;
	    --background-dark: #70574688;
	    --background-steel: #B7B7CE88;
	    --background-fairy: #D685AD88;

		--hp: #FF2626;
		--attack: #FF7700;
		--defense: #FFBC35;
		--special-attack: #6891F0;
		--special-defense: #78C850;
		--speed: #F85888;
    }
`;