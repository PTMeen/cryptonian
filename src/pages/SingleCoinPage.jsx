import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Badge,
  Card,
  Container,
  HStack,
  Image,
  Text,
  VStack,
  Heading,
  Flex,
  Grid,
  GridItem,
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  CardBody,
  CardHeader,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import DOMPurify from "dompurify";

const SingleCoinPage = () => {
  const { coinId } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`;

  const [coin, setCoin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((response) => {
      setCoin(response.data);
      setIsLoading(false);
    });
  }, [url]);

  const isIncrease = (stat) => {
    return stat > 0 ? "increase" : "decrease";
  };

  if (isLoading) {
    return (
      <Container
        as="main"
        maxW="1140px"
        borderRadius="2xl"
        shadow="2xl"
        h="80vh"
      >
        <Center w="full" h="full">
          <Spinner size="xl" color="cyan" />
        </Center>
      </Container>
    );
  }

  return (
    <Container as="main" maxW="1140px" p={8} borderRadius="2xl" shadow="2xl">
      <Flex gap={8} direction={{ base: "column", md: "row" }} my={16} p={2}>
        <Card py={8} pl={4} pr={32}>
          <VStack align="flex-start" spacing={4}>
            <Badge variant="solid" colorScheme="green">
              Rank #{coin.market_cap_rank}
            </Badge>
            <HStack align="flex-end">
              <Image src={coin?.image?.thumb} />
              <Heading as="h1" size="md" fontWeight="semibold">
                {coin?.name}
              </Heading>
              <Text textTransform="uppercase">({coin?.symbol})</Text>
            </HStack>
            <Heading as="p" size="3xl" my={4}>
              ${coin.market_data.current_price.usd.toLocaleString()}
            </Heading>
          </VStack>
        </Card>
        <Sparklines data={coin.market_data?.sparkline_7d?.price}>
          <SparklinesLine color="cyan" />
        </Sparklines>
      </Flex>
      <Card variant="elevated" mb={8} p={{ base: 2, md: 4, lg: 8 }}>
        <CardHeader>
          <Heading size="md" as="h3">
            Market Stats
          </Heading>
        </CardHeader>
        <CardBody>
          <Grid
            gap={{ base: 4, md: 8 }}
            templateColumns={{
              base: "1fr 1fr",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            <GridItem>
              <Stat>
                <StatLabel>Hashing Algorithm</StatLabel>
                <StatNumber>{coin.hashing_algorithm}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Trust Score</StatLabel>
                <StatNumber>{coin.liquidity_score.toFixed(2)}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Price Change (24h)</StatLabel>
                <StatNumber>
                  <StatArrow
                    type={isIncrease(
                      coin.market_data.price_change_percentage_24h
                    )}
                  />
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Price Change (7d)</StatLabel>
                <StatNumber>
                  <StatArrow
                    type={isIncrease(
                      coin.market_data.price_change_percentage_7d
                    )}
                  />
                  {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                </StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Price Change (14d)</StatLabel>
                <StatNumber>
                  <StatArrow
                    type={isIncrease(
                      coin.market_data.price_change_percentage_14d
                    )}
                  />
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Price Change (30d)</StatLabel>
                <StatNumber>
                  <StatArrow
                    type={isIncrease(
                      coin.market_data.price_change_percentage_30d
                    )}
                  />
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Price Change (60d)</StatLabel>
                <StatNumber>
                  <StatArrow
                    type={isIncrease(
                      coin.market_data.price_change_percentage_60d
                    )}
                  />
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat>
                <StatLabel>Price Change (1y)</StatLabel>
                <StatNumber>
                  <StatArrow
                    type={isIncrease(
                      coin.market_data.price_change_percentage_1y
                    )}
                  />
                  {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                </StatNumber>
              </Stat>
            </GridItem>
          </Grid>
        </CardBody>
      </Card>
      <Card variant="outline" mb={8} p={{ base: 2, md: 4, lg: 8 }}>
        <CardHeader>
          <Heading size="md" as="h3">
            About {coin.name}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text color="gray.500">
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
};
export default SingleCoinPage;
