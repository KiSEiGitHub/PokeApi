import { Button, Container, Flex, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SinglePokemon from "../components/SinglePokemon";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=386')
  const [pokeActive, setPokeActive] = useState({})

  const getPokemon = async () => {
    const res = await fetch(url)
    const data = await res.json()

    // fetch base
    const pokeActiveBase = data.results[0];
    const resBase = await fetch(pokeActiveBase.url)
    const dataBase = await resBase.json()
    // fetch species
    const pokeActiveSpecies = await fetch('https://pokeapi.co/api/v2/pokemon-species/turtwig')
    const dataSpeciesActive = await pokeActiveSpecies.json()

    setPokeActive({
      base: dataBase,
      species: dataSpeciesActive
    })

    setUrl(data.next)

    const pokeRsult = data.results

    pokeRsult.forEach(async (pokemon) => {
      // fetch basic 
      const resBasic = await fetch(pokemon.url)
      const dataBase = await resBasic.json()

      // fetch species
      const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
      const dataSpecies = await resSpecies.json()

      setPokemon(curr => [...curr, {
        base: dataBase,
        species: dataSpecies
      }])

    })

    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading) {
      getPokemon()
    }
  }, [])

  console.log(pokeActive);

  return (
    <>
      <Container variant='Main'>
        <Grid templateColumns='1fr 0.4fr' h='100vh'>
          <GridItem colStart={1}>
            {!isLoading && <SinglePokemon pokemon={pokeActive} />}
          </GridItem>
          <GridItem colStart={2} overflow='auto' mb={10}>
            {pokemon.map((poke, key) => (
              <Container variant='Pokemon' key={key} onClick={() => setPokeActive(poke)}>
                <Flex alignItems='center'>
                  <Image
                    src={poke.base.sprites['front_default']}
                    alt={poke.base.name}
                    w='60px'
                  />
                  <HStack>
                    <Text variant='PokemonName'>N°{poke.base.id}</Text>
                    <Text variant='PokemonName'>{poke.base.name}</Text>
                  </HStack>
                </Flex>
              </Container>
            ))}
            <Button mx='auto' display='block' colorScheme='blue' w='250px' onClick={() => getPokemon()}>Load More</Button>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default App
