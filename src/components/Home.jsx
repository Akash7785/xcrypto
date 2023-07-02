import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import banner from '../asset/btc.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Box w={'full'} h={'85vh'} bgColor={'blackAlpha.900'}>
        <motion.div
          style={{
            height: '80vh',
          }}
          animate={{
            translateY: '20px',
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Image
            w={'full'}
            h={'full'}
            src={banner}
            alt="Banner"
            objectFit={'contain'}
            filter={'grayscale(1)'}
          />
        </motion.div>

        <Text
          fontSize={'4xl'}
          textAlign={'center'}
          fontWeight={'bold'}
          color={'whiteAlpha.900'}
          mt={'-20px'}
        >
          Grow More Invest
        </Text>
      </Box>
    </>
  );
};

export default Home;
