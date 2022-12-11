import { Box, Divider, Grid, GridItem, Heading, HStack, Image, Tag, Text } from "@chakra-ui/react";
import React from 'react';

export default function SinglePokemon({ pokemon }) {

    const { base: poke, species } = pokemon;
    console.log(poke.abilities);
    const schemeTag = (type) => {
        switch (type) {
            case 'fire': return 'red';
            case 'water': return 'blue';
            case 'grass': return 'green';
            case 'fighting': return 'orange';
            case 'flying': return 'grey';
            case 'electric': return 'yellow';
            case 'ground': return 'orange';
            case 'poison': return 'purple';
        }
    }

    return (
        <Box color='#fff' p={3}>
            <Heading textAlign='center'>{poke.name}</Heading>
            <Grid templateColumns='repeat(2, 1fr)' mt={10}>
                <GridItem colStart={1}>
                    <Image
                        src={poke.sprites.other['dream_world']['front_default']}
                        alt={poke.name}
                        w='450px'
                    />
                </GridItem>
                <GridItem colStart={2}>
                    <Box>
                        <Heading size='lg' mb={2}>Flavor text</Heading>
                        <Text mb={2}>{species['flavor_text_entries'][0]['flavor_text']}</Text>
                        <Text my={2}>{species['flavor_text_entries'][1]['flavor_text']}</Text>
                        <Text>{species['flavor_text_entries'][2]['flavor_text']}</Text>
                    </Box>

                    <Divider my={4} />

                    <Box>
                        <Heading size='lg' mb={2}>Characteristic</Heading>
                        <Text>Weight: {poke.weight}</Text>
                        <Text>Height: {poke.height}</Text>
                        <HStack>
                            <Text>Egg groups : </Text>
                            {species['egg_groups'].map((group) => (
                                <Text>{group.name}</Text>
                            ))}
                        </HStack>
                        <Text>Color: <Tag colorScheme={species.color.name}>{species.color.name}</Tag></Text>
                    </Box>

                    <Divider my={4} />

                    <Box mt={5}>
                        <Heading size='lg' mb={4}>Types</Heading>
                        {poke.types.map((item, key) => (
                            <Tag key={key} colorScheme={schemeTag(item.type.name)} mr={2}>{item.type.name}</Tag>
                        ))}
                    </Box>

                    <Divider my={4} />

                    <Box mt={5}>
                        <Heading size='lg' mb={4}>Abilities</Heading>
                        {poke.abilities.map((skill, key) => (
                            <Text key={key}>{skill.ability.name}</Text>
                        ))}
                    </Box>

                </GridItem>
            </Grid>
        </Box>
    )
}
