import { HStack, Heading, Box } from "@chakra-ui/react"

const Header = () => {

  return (
    <HStack width={'100%'}>
      <Box>
        <Heading fontSize={'lg'}>
          My Rotation
        </Heading>
      </Box>
    </HStack>
  )
}

export default Header;
