import { createGlobalStyle } from "styled-components";

const Themes = {
  light: {
    color: "#00000",
    bg: "#E4EBFA",
    position: "4px",
    nav: "white",
    mode: "#E4EBFA",
  },
  dark: {
    color: "#ffff",
    bg: "#20212c",
    position: "24px",
    nav: " var(--nav)",
    mode: "var(--background)",
  },
};
const GlobalStyles = createGlobalStyle`
body{
    font-family: "Plus Jakarta Sans", sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color:${({ theme }) => theme.color};
    transition:'2s linear';
}
.circle_theme {
    transition: 1s;
    left: ${({ theme }) => theme.position}
  }
  .header{
    background-color: ${({ theme }) => theme.nav};
  }
  .nav_desktop{
    background-color: ${({ theme }) => theme.nav};
  }
  .mode{
  background-color: ${({ theme }) => theme.mode} ;

  }
 
  .nav_link{
    
  }
  .task{
    background-color: ${({ theme }) => theme.nav};

  }
 
  @media (min-width: 765px) {
  
  }

`;

export { GlobalStyles, Themes };
