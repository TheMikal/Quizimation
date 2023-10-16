import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Directory({ genres }) {
    if (!genres || !Array.isArray(genres)) {
        return <p>No genres available.</p>;
    }

    return (
        <ButtonGroup spacing={2}>
            {genres.map((genre, index) => (
                <Button key={index} colorScheme="teal" variant='ghost'>
                {genre}
                </Button>
            ))}
        </ButtonGroup>
    )
}