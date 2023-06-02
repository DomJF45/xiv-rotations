import { useState } from "react";
import {
  Box,
  HStack,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Tag,
  Text,
  useToast,
} from "@chakra-ui/react";
import { PreviewComponent } from "./types";
import InteractBar from "./InteractBar";
import { Sequence } from "./Sequence";
import { FaChevronRight, FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { removeRotation } from "../../features/rotation/rotationSlice";
import { useAppDispatch } from "../../app/hooks";

const RotationPost: PreviewComponent = ({
  rotationPost,
  setOpenWindow,
  setRotationId,
}) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleRemove = (postId: string): void => {
    try {
      dispatch(removeRotation(postId));
      toast({
        title: "Rotation Deleted!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (error: unknown) {
      console.log(error);
      toast({
        title: "Can't Delete",
        description: "Uh oh, try again later: " + error,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleRoleColor = (role: string) => {
    switch (role) {
      case "Tank":
        return "blue";
      case "Healer":
        return "green";
      case "Dps":
        return "red";
      default:
        break;
    }
  };

  return (
    <Skeleton isLoaded={isLoaded}>
      <Box
        width={"100%"}
        height={"200px"}
        backgroundColor={"#666666"}
        borderRadius={"5px"}
        position={"relative"}
      >
        <HStack
          width={"100%"}
          backgroundColor={"#555555"}
          height={"35px"}
          borderTopRightRadius={"5px"}
          borderTopLeftRadius={"5px"}
          paddingInline={3}
          justifyContent={"space-between"}
        >
          <Text>{"posted by: " + rotationPost.postedBy}</Text>
          <Popover placement="left-start">
            <PopoverTrigger>
              <IconButton
                aria-label="open popover"
                size="xs"
                icon={<BsThreeDotsVertical />}
                background={"none"}
              />
            </PopoverTrigger>
            <PopoverContent width={"100%"} height={"100%"}>
              <PopoverHeader>Settings</PopoverHeader>
              <PopoverArrow />
              <PopoverCloseButton />
              <HStack
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
                padding={3}
              >
                <Text>Open in simple mode: </Text>
                <IconButton
                  aria-label="simple mode"
                  size={"sm"}
                  icon={<TbExternalLink />}
                  width={"10%"}
                  onClick={() => {
                    setOpenWindow(true);
                    setRotationId(rotationPost.id);
                  }}
                />
              </HStack>

              <IconButton
                aria-label="delete rotation"
                icon={<FaTrash />}
                width={"10%"}
                onClick={() => handleRemove(rotationPost.id)}
              />
            </PopoverContent>
          </Popover>
          <InteractBar
            likes={rotationPost.likes}
            viewedBy={rotationPost.viewedBy}
            saved={rotationPost.saved}
          />
          <HStack position={"absolute"} left={0} bottom={3}>
            <Tag
              size={"md"}
              variant={"solid"}
              colorScheme={handleRoleColor(rotationPost.rotation.jobRole)}
            >
              {rotationPost.rotation.job}
            </Tag>
            <Tag
              size={"md"}
              variant={"solid"}
              colorScheme={
                rotationPost.rotation.type === "PVE" ? "green" : "yellow"
              }
            >
              {rotationPost.rotation.type}
            </Tag>
          </HStack>
        </HStack>
        <Box padding={3} width={"100%"}>
          <Sequence>
            {rotationPost.rotation.skills.map((skill, index) => (
              <HStack key={skill.id}>
                <Image
                  src={`https://ffxivrotations.com/icon/${skill.skill.icon}.png`}
                  width={"30px"}
                  onLoad={() => setIsLoaded(true)}
                />
                {index < rotationPost.rotation.skills.length - 1 && (
                  <FaChevronRight size={10} />
                )}
              </HStack>
            ))}
          </Sequence>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default RotationPost;
