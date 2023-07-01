import axios from 'axios';
import { server } from '../index';
import Loader from '../components/Loader';

import React, { useEffect, useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import ExchangeCard from './ExchangeCard';

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchange = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
    };
    fetchExchange();
  }, []);
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {' '}
          <HStack wrap={'wrap'} justifyContent={'center'}>
            {exchanges.map(i => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchange;
