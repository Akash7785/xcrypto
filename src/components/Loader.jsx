import React from 'react';
import { Container, Spinner, VStack } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Container maxH={'full'}>
      <VStack justifyContent={'center'}>
        <Spinner size={'xl'} />
      </VStack>
    </Container>
  );
};

export default Loader;
