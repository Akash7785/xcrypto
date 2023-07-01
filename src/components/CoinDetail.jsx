import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '../index';
import {
  Box,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
  VStack,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
} from '@chakra-ui/react';
import Loader from './Loader';

const CoinDetail = () => {
  const params = useParams();
  const [currency, setCurrency] = useState('inr');
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
  useEffect(() => {
    const fetchCoinDetail = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      console.log(data);
      setCoin(data);
      setLoading(false);
    };
    fetchCoinDetail();
  }, [params.id, currency]);
  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={'full'} borderWidth={1}>
            asd
          </Box>

          {/* select data time */}

          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={'4'}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={4} p={16} alignItems={'flex-start'}>
            <Text fontSize={'small'} alignSelf={'center'} opacity={0.7}>
              Last updated on{' '}
              {Date(coin.market_data.last_updated).split('G')[0]}
            </Text>
            <Image src={coin.image.large} w={16} h={16} objectFit={'contain'} />
            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>

              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? 'increase'
                      : 'decrease'
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge
              fontSize={'2xl'}
              bgColor={'blackAlpha.800'}
              color={'white'}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CoustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />
            <Box w={'full'} p={4}>
              <Item title={'Max Supply'} value={coin.market_data.max_supply} />
              <Item
                title={'Curculating Supply'}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={'Market Cap'}
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title={'All Time Low'}
                value={coin.market_data.atl[currency]}
              />
              <Item
                title={'All Time High'}
                value={coin.market_data.ath[currency]}
              />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};
const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);
const CoustomBar = ({ high, low }) => (
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />
      <Text fontSize={'sm'}>24H Range</Text>
      <Badge children={high} colorScheme={'green'} />
    </HStack>
  </VStack>
);
export default CoinDetail;
