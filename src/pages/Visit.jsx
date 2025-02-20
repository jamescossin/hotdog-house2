import { Box, Heading, Text, Image, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={6}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          Visit Hot Dog House
        </Heading>
        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdoghouse_exterior/restaurant exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
          boxShadow="lg"
        />
        <Text fontSize="lg" textAlign="center" maxW="800px">
          We are a family-owned restaurant serving homemade soups, specials, and our famous hot dog sauce. 
          Whether you're stopping by for a hearty breakfast, a delicious lunch, or a satisfying dinner, 
          we have something for everyone. Come and experience the best Texas hot dogs, cheesesteaks, 
          and homestyle meals in town!
        </Text>

        <HStack spacing={8} align="start" wrap="wrap" justify="center">
          <VStack align="center">
            <Icon as={FaMapMarkerAlt} boxSize={8} color="red.500" />
            <Heading as="h2" size="lg">Location</Heading>
            <Text fontSize="md" textAlign="center">
              123 Main Street, Hometown, USA
            </Text>
            <Link
              href="https://www.google.com/maps?q=123+Main+Street,+Hometown,+USA"
              isExternal
              color="blue.500"
            >
              Get Directions
            </Link>
          </VStack>

          <VStack align="center">
            <Icon as={FaClock} boxSize={8} color="blue.500" />
            <Heading as="h2" size="lg">Hours</Heading>
            <Text fontSize="md" textAlign="center">
              Monday - Friday: 5:00 AM - 8:00 PM <br />
              Saturday: 6:00 AM - 8:00 PM <br />
              Sunday: Closed
            </Text>
          </VStack>

          <VStack align="center">
            <Icon as={FaPhone} boxSize={8} color="green.500" />
            <Heading as="h2" size="lg">Contact</Heading>
            <Text fontSize="md" textAlign="center">
              Phone: (555) 123-4567
            </Text>
          </VStack>
        </HStack>

        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdoghouse_interior/restaurant interior"
          alt="Hot Dog House Interior"
          borderRadius="md"
          boxShadow="lg"
        />

        <Heading as="h2" size="xl" textAlign="center">
          Why Visit Us?
        </Heading>
        <Text fontSize="lg" textAlign="center" maxW="800px">
          At Hot Dog House, we pride ourselves on serving fresh, homemade meals with a friendly, welcoming atmosphere. 
          Whether you're craving a classic Texas hot dog, a hearty breakfast, or a full dinner, 
          we have something for everyone. Stop by and taste the difference!
        </Text>

        <Image
          src="http://stock.calucid.com/fetch/calucid/hotdoghouse_food/delicious hot dog meal"
          alt="Delicious Hot Dog Meal"
          borderRadius="md"
          boxShadow="lg"
        />
      </VStack>
    </Box>
  );
};

export default Visit;