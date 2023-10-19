import React, { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

function QuizBody({mainText, op1, op2, op3, op4, updateCount}) {
    const [backgroundColor, setBackgroundColor] = useState('#a989f38a');
  
    // Function to handle the button click
    const buttonClick = () => {
      // Change the background color and increment the count
      setBackgroundColor('green');
      updateCount();
    };

    return(
        <div>
            <section style={{ backgroundColor : backgroundColor }}>
                <section className="mainText"> {mainText} </section>
                <ButtonGroup spacing={2} className="options">
                    <section className="op1"> <Button onClick={buttonClick}colorScheme="purple"> {op1} </Button> </section>
                    <section className="op2"> <Button onClick={buttonClick} colorScheme="teal">{op2}</Button> </section>
                    <section className="op3"> <Button onClick={buttonClick} colorScheme="purple">{op3}</Button> </section>
                    <section className="op4"> <Button onClick={buttonClick} colorScheme="teal">{op4}</Button> </section>
                </ButtonGroup>
            </section>
        </div>
    )
}

export default QuizBody;

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