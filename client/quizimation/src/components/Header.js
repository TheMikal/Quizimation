import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import '../../src/App.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <ButtonGroup className='header' spacing={2}>
            <Button colorScheme='purple'> <Link to="/"> Home </Link> </Button>
            <Button colorScheme='pink'>Hi-Scores</Button>
            <Button colorScheme='gray'>Login/Sign-up</Button>
        </ButtonGroup>
    )
};
