import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack bgColor={'blackAlpha.900'} color={'white'}>
      <Button marginLeft={'6'} variant={'unstyled'}>
        <Link to="/">Home</Link>
      </Button>
      <Button m={'2'} variant={'unstyled'}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button m={'2'} variant={'unstyled'}>
        <Link to="/exchange">Exchange</Link>
      </Button>
    </HStack>
  );
};

export default Header;
