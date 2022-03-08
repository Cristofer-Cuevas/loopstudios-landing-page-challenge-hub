import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
}

body {
	width: 100%;
	height: 100%;
	margin: 0;
}


#root {
	width: 100%;
	height: 100%;
}

h1 {
	font-size: 2rem;
	margin: 0.67em 0;
}

a {
	 background-color: transparent;
	 text-decoration: none;
}

img {
	width: 100%;
	border-style: none;
}

button {
	cursor: pointer;
}

`;

export default GlobalStyles;
