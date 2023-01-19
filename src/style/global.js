import { createGlobalStyle } from "styled-components";
import { Reset } from "./reset";


export const GlobalStyle = createGlobalStyle`
 ${Reset};
:root {
    --color-primary: #91dcd2;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-grey-600:  #333333;
    --color-grey-300:  #828282;
    --color-grey-100:  #E0E0E0;
    --color-grey-0:  #f5f5f5;
    --color-white:  #FFFFFF;
    --color-negative: #E60000;
    --color-sucess:   #168821;
  }

  ::-webkit-scrollbar {
      width: 10px;
  } 

  ::-webkit-scrollbar-thumb {   
      border-radius: 40px;
      
  }

  ::-webkit-scrollbar-thumb:hover { 
      background-color: var(--gray-300);   
  }

  ::-webkit-scrollbar-thumb:not(:hover) {   
      background-color: var(--gray-100);   
  }

  ::-webkit-scrollbar-thumb:window-inactive {
      background-color: var(--color-primary);
  }

`;
