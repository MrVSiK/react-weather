import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";

export default function WeatherCard({ name, value }: { name: string, value: number }){
    return (
        <Card h={'10rem'} m={'2rem'} textColor={'blue.400'} w={'15rem'}>
            <CardHeader>
                <Heading size={'md'}>{name}</Heading>
            </CardHeader>
            <CardBody>
                <Text fontSize={'3xl'}>{value}</Text>
            </CardBody>
        </Card>
    )
}