import { VStack, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ name, symbol, currentPrice, img, currencySymbol, id }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={'52'}
        p={'8'}
        m={'2'}
        shadow={'lg'}
        borderRadius={'lg'}
        transition={'all 0.3s'}
        css={{ '&:hover': { transform: 'scale(1.1)' } }}
      >
        <Image src={img} h={'16'} objectFit={'contain'} />
        <Heading>{symbol}</Heading>
        <Text>{name}</Text>
        <Text>{`${currencySymbol}${currentPrice}`}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
