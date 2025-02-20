import { Box, Heading, Text, Image, VStack, Container } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          About Hot Dog House
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/restaurant_exterior/Hot Dog House restaurant exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          We are a family-owned restaurant dedicated to serving delicious, homemade meals. From our famous hot dog sauce to our freshly made soups and daily specials, we take pride in offering quality food with a warm, welcoming atmosphere.
        </Text>
        <Heading as="h2" size="xl">
          Breakfast, Lunch & Dinner
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/breakfast_plate/Delicious breakfast plate with eggs, bacon, and pancakes"
          alt="Breakfast Plate"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Start your day with a hearty breakfast at 5:00 AM. Choose from eggs, bacon, sausage, home fries, hashbrowns, French toast, or pancakes. The choice is yours!
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hot_dog_plate/Texas hot dogs with toppings on a plate"
          alt="Hot Dogs"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Our lunch menu features our famous Texas hot dogs, juicy hamburgers, cheesesteaks, chef salads, crispy French fries, onion rings, and more.
        </Text>
        <Image
          src="http://stock.calucid.com/fetch/calucid/dinner_plate/Full dinner plate with chicken, mashed potatoes, and vegetables"
          alt="Dinner Plate"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Enjoy a full dinner with options like chicken, liver & onions, ham, fish, and shrimp. We guarantee a satisfying meal every time you visit.
        </Text>
        <Heading as="h2" size="xl">
          Visit Us Today!
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/restaurant_interior/Cozy restaurant interior with seating"
          alt="Restaurant Interior"
          borderRadius="md"
        />
        <Text fontSize="lg" textAlign="center">
          Whether you're stopping by for a quick bite or a full meal, Hot Dog House is the perfect place for great food and friendly service. Stop in and give us a try!
        </Text>
      </VStack>
    </Container>
  );
};

export default About;