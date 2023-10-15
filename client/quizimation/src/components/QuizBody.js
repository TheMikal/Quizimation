import React from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function QuizBody(mainText, op1, op2, op3, op4) {
    return(
        <div>
            <section>
                <section className="mainText"> {mainText} </section>
                <section className="options">
                    <section className="op1"> <Button colorScheme="purple">{op1}</Button> </section>
                    <section className="op2"> <Button colorScheme="teal">{op2}</Button> </section>
                    <section className="op3"> <Button colorScheme="purple">{op3}</Button> </section>
                    <section className="op4"> <Button colorScheme="teal">{op4}</Button> </section>
                </section>
            </section>
        </div>
    )
}



/* 
<FormControl as='fieldset'>
  <FormLabel as='legend'>
  Favorite Naruto Character
</FormLabel>
<RadioGroup defaultValue='Itachi'>
  <HStack spacing='24px'>
    <Radio value='Sasuke'>Sasuke</Radio>
    <Radio value='Nagato'>Nagato</Radio>
    <Radio value='Itachi'>Itachi</Radio>
    <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
  </HStack>
</RadioGroup>
<FormHelperText>Select only if you're a fan.</FormHelperText>
</FormControl>
*/