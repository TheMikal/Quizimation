import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import '../../src/App.css';

export default function Header(){
    return (
        <ButtonGroup className='header' spacing={2}>
            <Button colorScheme='purple'>Home</Button>
            <Button colorScheme='pink'>Hi-Scores</Button>
            <Button colorScheme='gray'>Login/Sign-up</Button>
        </ButtonGroup>
    )
};
