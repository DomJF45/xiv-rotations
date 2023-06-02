import { LegacyRef, useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Spinner,
  Button,
  useColorModeValue,
  useToast,
  Collapse,
  SlideFade,
  Tooltip,
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import NewWindow from "react-new-window";
import { AiFillQuestionCircle } from "react-icons/ai";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../app/hooks";
import { addRotation } from "../../features/rotation/rotationSlice";
import testData from "../../test.json";
import { Sequence, SequenceItem } from "./Sequence";
import { iData, iSkill, iClass, iRotation } from "../../utils/types";
import { jobRole, playerMap } from "../../utils/classMap";
import ClassList from "./ClassList";
import { defaultRotations } from "./utils";
import { useNavigate } from "react-router-dom";
import "./skillinfo.css";
import SkillTable from "./SkillTable";
import SkillInfo from "./SkillInfo";
import JobSkills from "./JobSkills";
import SequenceBar from "./SequenceBar";
import SequenceBarExternal from "./SequenceBarExternal";

const Rotation = () => {
  const data: iData = testData;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [playerClass, setPlayerClass] = useState<number>(1);
  const [skills, setSkills] = useState<iClass["native"]>(
    data.classes[playerMap[playerClass]].native
  );
  const [skill, setSkill] = useState<iSkill>();
  const [skillInfo, setSkillInfo] = useState("");
  const [showSkill, setShowSkill] = useState(false);
  const [rotation, setRotation] = useState<iRotation>(defaultRotations);
  const [openWindow, setOpenWindow] = useState(false);

  const handleSaveRotation = () => {
    try {
      dispatch(
        addRotation({
          id: nanoid(),
          postedBy: "Balsac",
          likes: 0,
          viewedBy: 0,
          saved: 0,
          rotation: {
            job: playerMap[playerClass],
            skills: rotation[playerMap[playerClass]].skills,
            type: "PVE",
            jobRole: jobRole[playerMap[playerClass]],
          },
        })
      );
      toast({
        position: "bottom-left",
        title: "Rotation Posted",
        description: "Rotation saved successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddRotation = (skill: iSkill) => {
    const job = playerMap[playerClass];

    setRotation((prevRotations) => {
      const updatedRotations = { ...prevRotations };

      updatedRotations[job].skills.push({
        id: nanoid(),
        skill: skill,
      });

      console.log(skill);

      return updatedRotations;
    });
  };

  const handleRemove = (skillID: string): void => {
    const job = playerMap[playerClass];

    setRotation((prevRotations) => {
      const updatedRotations = { ...prevRotations };

      const newSeq = updatedRotations[job].skills.filter((skill) => {
        if (skill.id === skillID) console.log(skill);
        return skill.id !== skillID;
      });

      updatedRotations[job].skills = newSeq;

      return { ...updatedRotations };
    });
  };

  console.log(rotation);

  useEffect(() => {
    setSkills(data.classes[playerMap[playerClass]].native);
    console.log("Use Effect: ", rotation);
  }, [playerClass, data.classes, rotation]);

  return (
    <>
      <HStack width={"100%"} justifyContent={"space-between"}>
        <HStack>
          <Heading fontSize={"lg"}>Sequence</Heading>
          <Popover placement="right-end">
            <PopoverTrigger>
              <AiFillQuestionCircle size={15} style={{ cursor: "pointer" }} />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverArrow />
              <PopoverHeader>Help</PopoverHeader>
              <PopoverBody>
                <VStack alignItems={"start"}>
                  <Text>Click to view stats</Text>
                  <Text>Double Click to add to rotation</Text>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </HStack>
        <Button onClick={handleSaveRotation}>Save Rotation</Button>
        <ClassList setPlayerClass={setPlayerClass} />
      </HStack>
      <HStack width={"100%"} alignItems={"start"} maxHeight={"600px"}>
        <VStack width={"70%"}>
          <SequenceBar
            rotation={rotation}
            playerClass={playerClass}
            handleRemove={handleRemove}
            playerMap={playerMap}
          />
          <JobSkills
            skills={skills}
            data={data}
            setShowSkill={setShowSkill}
            setSkillInfo={setSkillInfo}
            setSkill={setSkill}
            handleAddRotation={handleAddRotation}
          />
        </VStack>
        <VStack width={"30%"}>
          <SkillInfo skill={skill} showSkill={showSkill} />
        </VStack>
      </HStack>
    </>
  );
};

export default Rotation;
