import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/restaurant-interior/prompt')"
        bgSize="cover"
        bgPosition="center"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
      >
        <Container maxW="container.lg">
          <Heading fontSize="5xl" fontWeight="bold">Welcome to Hot Dog House</Heading>
          <Text fontSize="xl" mt={4}>Home of the Famous Texas Hot Dogs & Homemade Specials</Text>
          <Button as={Link} to="/menu" colorScheme="red" size="lg" mt={6}>View Menu</Button>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={20}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/hot-dog/prompt"
            alt="Hot Dog"
            borderRadius="md"
            boxSize="400px"
            objectFit="cover"
            mr={{ md: 8 }}
          />
          <Box>
            <Heading fontSize="3xl">About Us</Heading>
            <Text fontSize="lg" mt={4}>
              We are a family-owned restaurant serving homemade soups, specials, and our famous hot dog sauce. 
              Whether you're craving a hearty breakfast, a delicious lunch, or a full dinner, we have something for everyone.
            </Text>
          </Box>
        </Flex>
      </Container>

      {/* Menu Preview Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading textAlign="center" fontSize="3xl">Our Menu</Heading>
          <Flex wrap="wrap" justify="center" mt={8}>
            <Box textAlign="center" m={4}>
              <Image
                src="http://stock.calucid.com/fetch/calucid/breakfast-platter/prompt"
                alt="Breakfast"
                borderRadius="md"
                boxSize="250px"
                objectFit="cover"
              />
              <Text fontSize="lg" mt={2}>Breakfast</Text>
            </Box>
            <Box textAlign="center" m={4}>
              <Image
                src="http://stock.calucid.com/fetch/calucid/cheesesteak/prompt"
                alt="Cheesesteak"
                borderRadius="md"
                boxSize="250px"
                objectFit="cover"
              />
              <Text fontSize="lg" mt={2}>Cheesesteaks</Text>
            </Box>
            <Box textAlign="center" m={4}>
              <Image
                src="http://stock.calucid.com/fetch/calucid/dinner-plate/prompt"
                alt="Dinner"
                borderRadius="md"
                boxSize="250px"
                objectFit="cover"
              />
              <Text fontSize="lg" mt={2}>Dinner</Text>
            </Box>
          </Flex>
          <Flex justify="center" mt={6}>
            <Button as={Link} to="/menu" colorScheme="red" size="lg">View Full Menu</Button>
          </Flex>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container maxW="container.lg" py={20}>
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Box flex="1">
            <Heading fontSize="3xl">Visit Us</Heading>
            <Text fontSize="lg" mt={4}>
              Stop by and enjoy a delicious meal with us. We open early at 5:00 AM to serve you the best breakfast in town!
            </Text>
            <Button as={Link} to="/contact" colorScheme="red" size="lg" mt={6}>Get Directions</Button>
          </Box>
          <Image
            src="http://stock.calucid.com/fetch/calucid/restaurant-exterior/prompt"
            alt="Restaurant Exterior"
            borderRadius="md"
            boxSize="400px"
            objectFit="cover"
            ml={{ md: 8 }}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Home;