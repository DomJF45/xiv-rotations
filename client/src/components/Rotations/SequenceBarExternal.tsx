import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { iPost } from "../../utils/types";
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Sequence } from "./Sequence";
import { FaChevronRight } from "react-icons/fa";

const SequenceBarExternal = () => {
  const { id } = useParams();
  const { rotations } = useAppSelector((state) => state.rotationReducer);
  const [data, setData] = useState<iPost[]>(rotations);
  const [simpleRotation, setSimpleRotation] = useState<iPost>();

  const getPost = useCallback(() => {
    data.forEach((post: iPost) => {
      console.log("post id: " + post.id);
      if (post.id === id) {
        setSimpleRotation(post);
      }
    });
  }, [data, id]);

  const setInitialData = useCallback(() => {
    setData(rotations);
  }, [rotations]);

  useEffect(() => {
    setInitialData();
    getPost();
  }, [getPost, rotations, setInitialData]);

  console.log("render external");
  console.log("param id: " + id);
  console.log("all rotations: " + data);
  console.log("rotation: " + simpleRotation);

  return (
    <Box
      width={"100%"}
      backgroundColor={useColorModeValue("#ffffff87", "#666666")}
      minHeight={["100vh", 100]}
      padding={5}
      display={"flex"}
      flexDir={["column", "row"]}
    >
      <Sequence>
        {simpleRotation ? (
          simpleRotation?.rotation.skills.map((skill, index) => (
            <Flex direction={["column", "row"]} key={skill.skill.name}>
              <Image
                src={`https://ffxivrotations.com/icon/${skill.skill.icon}.png`}
              />
              {index < simpleRotation.rotation.skills.length - 1 && (
                <FaChevronRight />
              )}
            </Flex>
          ))
        ) : (
          <Text>No Sequence Found</Text>
        )}
      </Sequence>
    </Box>
  );
};

export default SequenceBarExternal;
