import { IconButton, useColorMode, IconButtonProps } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import React from 'react';

export const ButtonColorMode = ({ ...props }: IconButtonProps) => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            marginTop="10px"
            marginLeft="10px"
            marginBottom="10px"
            aria-label=""
            maxWidth="20px"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            {...props}
        />
    );
};
