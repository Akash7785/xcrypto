import { VStack, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ExchangeCard = ({ img, name, rank, url }) => {
  return (
    <a target="blank" href={url}>
      <VStack
        p={'8'}
        w={'52'}
        shadow={'lg'}
        m={'4'}
        borderRadius={'lg'}
        transition={'all 0.3s'}
        css={{
          '&:hover': { transform: 'scale(1.1)' },
        }}
      >
        <Image src={img} />
        <Heading noOfLines={'1'} size={'lg'}>
          {rank}
        </Heading>
        <Text noOfLines={'1'}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
