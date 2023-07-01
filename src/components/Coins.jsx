import { useEffect, useState } from 'react';
import { Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import axios from 'axios';
import { server } from '../index';
import CoinCard from './CoinCard';
import Loader from './Loader';
const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const [loading, setLoading] = useState(true);

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchedCoins = async () => {
      const { data } = await axios.get(
        `${server}/coins/markets?vs_currency=${currency}`
      );
      console.log(data);
      // console.log('C', coins);
      setCoins(data);
      setLoading(false);
    };
    fetchedCoins();
  }, [currency]);
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup p={'4'} value={currency} onChange={setCurrency}>
            <HStack>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack m={'2'} wrap={'wrap'} justifyContent={'center'}>
            {coins.map(i => (
              <CoinCard
                id={i.id}
                key={i.id}
                img={i.image}
                symbol={i.symbol}
                name={i.name}
                currencySymbol={currencySymbol}
                currentPrice={i.current_price}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
