import { Box, HStack, Heading, useColorModeValue } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import { Sequence, SequenceItem } from "./Sequence";
import { SequenceBarComponent } from "./types";

const SequenceBar: SequenceBarComponent = ({
  rotation,
  playerClass,
  handleRemove,
  playerMap,
}) => {
  return (
    <Box width={"100%"}>
      <HStack height={"100%"} alignItems={"baseline"}>
        <Heading fontSize={"lg"} mb={1}>
          Rotation
        </Heading>
      </HStack>
      <Box
        width={["90%", "100%"]}
        backgroundColor={useColorModeValue("#ffffff87", "#ffffff20")}
        minHeight={"100px"}
        borderRadius={"10px"}
        padding={5}
        display={"flex"}
      >
        <Sequence>
          {rotation[playerMap[playerClass]].skills.map((skill, index) => (
            <>
              <SequenceItem
                key={skill.id}
                seqItem={skill}
                handleRemove={handleRemove}
              />
              {index < rotation[playerMap[playerClass]].skills.length - 1 && (
                <FaChevronRight />
              )}
            </>
          ))}
        </Sequence>
      </Box>
    </Box>
  );
};

export default SequenceBar;
