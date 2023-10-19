import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Link } from '@chakra-ui/react'

function TitleTile({quizTitle, genre, topScore}) {
    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Stack>
                <CardBody>
                    <Link to={quizTitle.id} fontSize='4xl'>{quizTitle}</Link>
                    <Text fontSize='md'> Genre: {genre} </Text>
                </CardBody>
                <CardFooter>
                    <Text fontSize='md'> Current Top Score: {topScore} </Text>
                </CardFooter>
            </Stack>
        </Card>
    )
}

// function QuizList() {
//     let Quizzes= []

//     return (
//         <div>
//             {Quizzes.map((quiz) => (
//                 <TitleTile
//                     key={quiz.id}
//                     quizTitle={quiz.quizTitle}
//                     genre={quiz.genre}
//                     topScore={quiz.topScore}
//                 />
//             ))}
//         </div>
//     );
// }

export default TitleTile;