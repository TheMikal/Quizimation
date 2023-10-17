import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import '../../src/App.css'

export default function Directory({ genres }) {
    if (!genres || !Array.isArray(genres)) {
        return <p>No genres available.</p>;
    }

    return (
        <ButtonGroup className="directory" spacing={2}>
            {genres.map((genre, index) => (
                <Button key={index} colorScheme="teal" variant='ghost'>
                {genre}
                </Button>
            ))}
        </ButtonGroup>
    )
}