import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, Link, IconButton, Flex, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Heading as="h1" textAlign="center" mb={6}>
        Contact Us
      </Heading>

      <Flex direction={{ base: "column", md: "row" }} gap={10}>
        {/* Contact Info */}
        <Box flex="1">
          <Image
            src="http://stock.calucid.com/fetch/calucid/restaurant_exterior/Hot%20Dog%20House"
            alt="Hot Dog House"
            borderRadius="md"
            mb={4}
          />
          <Heading as="h2" size="lg" mb={4}>
            Our Location
          </Heading>
          <Text>123 Main Street, Your City, Your State, ZIP</Text>
          <Text mt={2}>Phone: (123) 456-7890</Text>
          <Text>Email: <Link href="mailto:contact@hotdoghouse.com" color="blue.500">contact@hotdoghouse.com</Link></Text>

          <Heading as="h3" size="md" mt={6} mb={2}>
            Follow Us
          </Heading>
          <Stack direction="row" spacing={4}>
            <IconButton as={Link} href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton as={Link} href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
          </Stack>
        </Box>

        {/* Contact Form */}
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4}>
            Get in Touch
          </Heading>
          <form>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your Name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>

              <Button colorScheme="blue" type="submit">Send Message</Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;