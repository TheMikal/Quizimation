import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function Header(){
    return (
        <ButtonGroup spacing={2}>
            <Button colorScheme='purple'>Home</Button>
            <Button colorScheme='pink'>Hi-Scores</Button>
            <Button colorScheme='gray'>Login/Sign-up</Button>
        </ButtonGroup>
    )
};
