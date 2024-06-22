import { background, extendTheme } from "@chakra-ui/react";

export const theme  = extendTheme({
    fonts:{
        heading:`Ubuntu`,
        body:"Ubuntu",
    },
    styles: {
        global: {
          'body': {
            background: '#F3F3F7',
           
          },
         
        },
      },
})