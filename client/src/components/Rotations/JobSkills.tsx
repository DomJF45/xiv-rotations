import {
  Box,
  Heading,
  SimpleGrid,
  HStack,
  VStack,
  Image,
  Text,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { JobSkillsComponent } from "./types";

const JobSkills: JobSkillsComponent = ({
  skills,
  data,
  setShowSkill,
  setSkillInfo,
  setSkill,
  handleAddRotation,
}) => {
  return (
    <Box width={"100%"}>
      <Heading fontSize={"lg"} mb={1}>
        Skills
      </Heading>
      <Box
        width={["90%", "100%"]}
        backgroundColor={useColorModeValue("#ffffff87", "#ffffff20")}
        height={"500px"}
        borderRadius={"10px"}
        padding={3}
        display={"flex"}
        justifyContent={"center"}
      >
        <SimpleGrid columns={[3, 5]}>
          {skills?.map((skill, index) => (
            <HStack key={index}>
              <Image
                src={`https://ffxivrotations.com/icon/${data?.skills[skill]?.icon}.png`}
                fallback={<Spinner />}
                onClick={() => {
                  setShowSkill(true);
                  setSkillInfo(`${data.skills[skill]?.help_html}`);
                  setSkill(data.skills[skill]);
                }}
                onDoubleClick={() => handleAddRotation(data.skills[skill])}
                cursor={"pointer"}
                width={"45px"}
              />
              <VStack
                alignItems={"start"}
                justifyContent={"center"}
                fontSize={"xs"}
              >
                <Text>{data.skills[skill]?.name}</Text>
                <Text>{"Lv." + data?.skills[skill]?.level}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default JobSkills;
