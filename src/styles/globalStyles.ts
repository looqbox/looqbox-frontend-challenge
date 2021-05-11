import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
   /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
/* Sections
   ========================================================================== */
/**
 * Remove the margin in all browsers.
 */
body {
  background-color: #fff;
  margin: 0;
  font-family: "Inter"
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}
pre {
  font-size: 1em; /* 2 */
}
/* Text-level semantics
   ========================================================================== */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
}
/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}
/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-size: 1em; /* 2 */
}
/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
&.rec-slider-container {
  border-radius:20px;
}
sup {
  top: -0.5em;
}
/* Embedded content
   ========================================================================== */
/**
 * Remove the border on images inside links in IE 10.
 */
img {
  border-style: none;
}
/* Forms
   ========================================================================== */
/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */
button,
input,
optgroup,
select,
textarea {
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}
/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */
button,
input { /* 1 */
  overflow: visible;
}
/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */
button,
select { /* 1 */
  text-transform: none;
}
/**
 * Correct the inability to style clickable types in iOS and Safari.
 */
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
/**
 * Remove the inner border and padding in Firefox.
 */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
/**
 * Restore the focus styles unset by the previous rule.
 */
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
/**
 * Correct the padding in Firefox.
 */
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}
/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}
/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */
[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/* Interactive
   ========================================================================== */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}
/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}
/* Misc
   ========================================================================== */
/**
 * Add the correct display in IE 10+.
 */
template {
  display: none;
}
/**
 * Add the correct display in IE 10.
 */
[hidden] {
  display: none;
}
:root {
  --background_normal: rgba(164, 172,175, 0.6);
  --tag_normal: #A4ACAF;
  --background_fighting: rgba(213, 103, 35, 0.6);
  --tag_fighting: #D56723;
  --background_flying: rgba(61,199,239,0.6);
  --tag_flying: #3DC7EF;
  --background_poison: rgba(185,127,201,0.6);
  --tag_poison: #B97FC9;
  --background_ground: rgba(247,222,63,0.6);
  --tag_ground: #F7DE3F;

  --background_rock: rgba(163,140,33,0.6);
  --tag_rock: #A38C21;
  --background_bug:rgba(114,159,64,0.6);
  --tag_bug: #729F40;
  --background_ghost: rgba(123,98,163, 0.6);
  --tag_ghost: #7B62A3;
  --background_steel: rgba(158,183,184,0.6);
  --tag_steel: #9EB7B8;
  --background_fire: rgba(253,125,36,0.6);
  --tag_fire: #FD7D24;

  --background_water: rgba(69,146,196,0.6);
  --tag_water: #4592C4;
  --background_grass: rgba(155,204,80,0.6);
  --tag_grass: #9BCC50;
  --background_electric: rgba(238,213,53,0.6);
  --tag_electric: #EED535;
  --background_psychic: rgba(244,103,186,0.6);
  --tag_psychic: #F467BA;
  --background_ice: rgba(81,196,231,0.6);
  --tag_ice: #51C4E7;

  --background_dragon: rgba(241,110,87,0.6);
  --tag_dragon: #F16E57;
  --background_dark: rgba(112,112,112,0.6);
  --tag_dark: #707070;
  --background_fairy: rgba(253,185,233,0.6);
  --tag_fairy: #FDB9E9;
  --background_unknown: rgba(196,196,196,0.6);
  --tag_unknown: #C4C4C4;
  --background_shadow: rgba(189,185,184,0.6);
  --tag_shadow: #BDB9B8;
}
`;
