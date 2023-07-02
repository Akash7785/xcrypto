import { Avatar, Text, Box, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import avtar from '../asset/avt1.png';

const Footer = () => {
  return (
    <Box
      bg="blackAlpha.900"
      color={'whiteAlpha.700'}
      minH={'50'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>About Us</Text>
          <Text
            fontSize={'sm'}
            letterSpacing={'widest'}
            textAlign={['center', 'left']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
            numquam at totam vero enim deserunt necessitatibus magni voluptatum
            a.
          </Text>
        </VStack>
        <VStack>
          <Avatar size={'2xl'} src={avtar} boxSize={'28'} mt={['4', '0']} />
          <Text>Developer</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
