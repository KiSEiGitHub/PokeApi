import { extendTheme } from "@chakra-ui/react";

const styles = {
    global: (props) => ({
        html: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        body: {
            bg: '#060f19'
        }
    })
}

const components = {
    Container: {
        variants: {
            Main: {
                maxW: '100%',
                bg: '#060f19'
            },
            Pokemon: {
                maxW: '300px',
                h: 'auto',
                my: 4,
                borderRadius: 10,
                p: 3,
                bg: '#e4e1b9',
                cursor: 'pointer'
            }
        }
    },
    Heading: {
        variants: {
            Title: {
                fontSize: '2.5em',
                textAlign: 'center',
                mb: 10
            }
        }
    },
    Text: {
        variants: {
            PokemonName: {
                fontWeight: 600,
                fontSize: '1.45em'
            }
        }
    }
}

export const theme = extendTheme({
    styles,
    components
})