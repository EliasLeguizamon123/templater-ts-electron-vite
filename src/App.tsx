import {Button, VStack, HStack,  Text, Image} from '@chakra-ui/react'
import { useState } from 'react'
import vite from '/vite.svg'
import react from '/react.svg'
import electron from '/electron.png'

export default function App() {
const [count, setCount] = useState(0)
  return (
      <>
      <VStack spacing={4} align='center' pt={12}>
        <HStack>
          <Image src={vite} alt='vite logo' boxSize='150px' />
          <Image src={react} alt='vite logo' boxSize='150px' />
          <Image src={electron} alt='vite logo' boxSize='150px' />
        </HStack>
          <Button color='blue.200' onClick={() => setCount(count + 1)} >Count</Button>
          <Text>count is {count}</Text>
      </VStack>
      </>
  )
}
