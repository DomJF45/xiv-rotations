import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { InteractIconComponent } from "./types";

const InteractIcon: InteractIconComponent = ({
  unclicked,
  clicked,
  interactableNumber,
  activated,
  method,
  aria,
}) => {
  return (
    <HStack>
      <Box aria-label={aria} onClick={method} cursor={"pointer"}>
        {activated ? clicked : unclicked}
      </Box>
      <Text fontSize={"2xs"} draggable={false} userSelect={"none"}>
        {interactableNumber}
      </Text>
    </HStack>
  );
};

export default InteractIcon;

/*
<IconButton
        aria-label={aria}
        icon={activated ? clicked : unclicked}
        background={"none"}
        onClick={method}
      />
*/
