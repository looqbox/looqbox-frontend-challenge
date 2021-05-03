import { extendTheme } from '@chakra-ui/react';

import "@fontsource/poppins/700.css"
import "@fontsource/roboto/400.css"

const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Roboto',
    },
    
});
export default theme;
