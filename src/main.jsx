import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from '../theme/theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </>
)
