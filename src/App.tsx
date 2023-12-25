import { Box, Button, Center, Heading, Input } from "@chakra-ui/react"
import WeatherCard from "./components/card"
import { useState } from "react"

type Data = {
  max: number;
  min: number;
  hum: number;
}

function App() {
  const [location, setLocation] = useState<string>();
  const [weather, setWeather] = useState<Data>();

  const handleFetch = () => {
    fetch("/weather?q=" + location).then(res => res.json()).then(data => {
      console.log(data);
    })
  }

  return (
    <Center h={'100vh'} bg={'blue.400'} textColor={'white'}>
      <Box>
        <Center>
          <Heading size={'xl'} mr={'0.9rem'} fontWeight={'500'}>You are in</Heading>
          <Heading size={'xl'} fontWeight={'900'}>Place </Heading>
        </Center>
        <Input size={'lg'} focusBorderColor={'white'} mt={'1rem'} placeholder={'Place'} _placeholder={{ color: 'white' }} value={location} onChange={e => setLocation(e.target.value)} />
        <Center>
          <Button onClick={handleFetch} mt={'2rem'}>
            Submit
          </Button>
        </Center>
        {weather && (<Center>
          <WeatherCard name="Max" value={weather.max} />
          <WeatherCard name="Min" value={weather.min} />
          <WeatherCard name="Humidity" value={weather.hum} />
        </Center>)}
      </Box>
    </Center>
  )
}

export default App
