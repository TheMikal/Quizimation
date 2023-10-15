import React from 'react';
import { Button } from '@chakra-ui/react'

export default function Header(){
    return (
        <div>
            <Button colorScheme='purple'>Home</Button>
            <Button colorScheme='pink'>Hi-Scores</Button>
            <Button colorScheme='gray'>Login/Sign-up</Button>
        </div>
    )
};
