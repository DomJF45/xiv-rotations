import { Box, useColorModeValue } from "@chakra-ui/react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      minH={"100vh"}
      padding={[5, 10]}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      backgroundColor={useColorModeValue("light.bg", "dark.bg")}
      overflowX={"hidden"}
      transition={"ease-in-out"}
      transitionDuration={"200ms"}
      gap={5}
      overscrollY={"none"}
      overscrollX={"none"}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={5}
        w={["95%", "1000px", "1100px", "1250px"]}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
