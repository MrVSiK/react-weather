import { Box, Button, Center, Heading, Input } from "@chakra-ui/react"
import WeatherCard from "./components/card"
import { useState } from "react"

type Data = {
  wind: number;
  temp: number;
  hum: number;
}

function App() {
  const [location, setLocation] = useState<string>();
  const [weather, setWeather] = useState<Data>();

  const handleFetch = () => {
    if(!location) return alert("Please mention a location");
    fetch(`/weather/place/${location}`).then(res => res.json()).then(data => {
      setWeather({
        hum: data.current.humidity,
        wind: data.current.wind_kph,
        temp: data.current.temp_c
      })
    })
  }

  return (
    <Center h={'100vh'} bg={'blue.400'} textColor={'white'}>
      <Box w={'50vw'}>
        <Center>
          <Heading size={'xl'} mr={'0.9rem'}>Search for Current Weather</Heading>
        </Center>
        <Input size={'lg'} focusBorderColor={'white'} mt={'1rem'} placeholder={'Location'} _placeholder={{ color: 'white' }} value={location} onChange={e => setLocation(e.target.value)} />
        <Center>
          <Button onClick={handleFetch} mt={'2rem'} color={'blue.400'}>
            Submit
          </Button>
        </Center>
        {weather && (<Center>
          <WeatherCard name="Wind (in Kph)" value={weather.wind} />
          <WeatherCard name="Temp (in C)" value={weather.temp} />
          <WeatherCard name="Humidity" value={weather.hum} />
        </Center>)}
      </Box>
    </Center>
  )
}

export default App
