import {
  Box,
  Heading,
  Collapse,
  VStack,
  HStack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SkillTable from "./SkillTable";
import { SkillInfoComponent } from "./types";

const SkillInfo: SkillInfoComponent = ({ skill, showSkill }) => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"start"}
      justifyContent={"start"}
    >
      <Heading fontSize={"lg"} mb={1}>
        Skill Info
      </Heading>
      <Box
        width={["90%", "100%"]}
        backgroundColor={useColorModeValue("#ffffff87", "#ffffff20")}
        borderRadius={"10px"}
        padding={3}
        wordBreak={"break-word"}
        maxH={"633px"}
        overflowY={"auto"}
        textAlign={"start"}
      >
        <Collapse startingHeight={"75px"} in={showSkill}>
          {skill && (
            <VStack alignItems={"start"} gap={3}>
              <HStack>
                <Image
                  src={`https://ffxivrotations.com/icon/${skill?.icon}.png`}
                  width={"50px"}
                />
                <Text fontSize={"lg"}>{skill.name}</Text>
              </HStack>
              <Text dangerouslySetInnerHTML={{ __html: skill?.help_html }} />
              <SkillTable skill={skill} />
            </VStack>
          )}
        </Collapse>
      </Box>
    </Box>
  );
};

export default SkillInfo;
