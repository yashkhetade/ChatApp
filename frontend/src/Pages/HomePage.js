import React from 'react'

import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";



import Signup from '../components/Authentication/Signup';
import Login from '../components/Authentication/Login';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const HomePage = () => {
  const history=useHistory();

    useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
   

    if (!userInfo) history.push("/");
    
  }, [history]);


  return (
 
   <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
          <Text fontSize="4xl" fontFamily="Work sans" color="black">
          ChatApp
        </Text>
</Box>



  <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>
         <TabPanels>
            <TabPanel>
        <Login/>
            </TabPanel>

            <TabPanel>
           <Signup/>
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Box>



      



</Container>



   
  )
}

export default HomePage