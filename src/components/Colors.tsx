import { Button, Container, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Colors = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#bd0000')

  const randomColor = (length: number) => {
    return Math.floor(Math.random() * length)
  }

  const handleHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let color = 0; color < 6; color++) {
      hexColor += hex[randomColor(hex.length)]
    }

    console.log(hexColor);
    setColor(hexColor)

  }

  const handleRgbColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    console.log(r, g, b);
    setColor(`rgb(${r},${g},${b})`)
  }

  const generateColor = () => {
    return typeOfColor === 'hex'
      ? handleHexColor()
      : handleRgbColor()
  }

  return (
    <>
      <Container
        maxW='4xl'
        style={{ background: color, height: '450px', width: '100%' }}
      >
        <Flex
          justifyContent={'center'}
          gap={'4'}
        >
          <Button
            my='3'
            colorScheme={`${(typeOfColor === 'hex') ? 'orange' : 'gray'}`}
            onClick={() => setTypeOfColor('hex')}
          >
            Create HEX Color
          </Button>
          <Button
            my='3'
            colorScheme={`${(typeOfColor === 'rgb') ? 'orange' : 'gray'}`}
            onClick={() => setTypeOfColor('rgb')}
          >
            Create RGB Color
          </Button>
          <Button
            my='3'
            colorScheme="cyan"
            onClick={generateColor}
          >
            Generate Random Color
          </Button>
        </Flex>
      </Container>
    </>
  )
}

export default Colors