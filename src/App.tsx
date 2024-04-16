import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Colors from './components/Colors'

function App() {


    return (
        <>
            <ChakraProvider>
                <Colors />
            </ChakraProvider>
        </>
    )
}

export default App
