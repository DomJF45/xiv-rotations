import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { iPost } from "./utils/types";
import RotationPosts from "./components/Rotations/RotationPosts";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "./app/hooks";
import NewWindow from "react-new-window";

function App() {
  const navigate = useNavigate();
  const { rotations } = useAppSelector((state) => state.rotationReducer);
  const [data, setData] = useState<iPost[]>([]);
  const [openWindow, setOpenWindow] = useState<boolean>(false);
  const [rotationId, setRotationId] = useState<string | undefined>();

  useEffect(() => {
    setData([...rotations]);
  }, [rotations]);

  return (
    <Flex width={"100%"} direction={"column"} justifyContent={"start"}>
      <HStack width={"100%"} justifyContent={"space-between"}>
        <VStack alignItems={"start"}>
          <Heading fontSize={"2xl"}>XIV Rotations</Heading>
          <Text>My Rotations 🔥</Text>
        </VStack>
        <Tooltip hasArrow label="Add a Rotation" bg={"#666666"} color={"#fff"}>
          <IconButton
            aria-label="add rotation"
            icon={<FaPlus size={10} />}
            onClick={() => navigate("/rotations")}
          />
        </Tooltip>
      </HStack>
      <Box
        width={"100%"}
        display={"flex"}
        flexDir={"column"}
        alignContent={"space-between"}
        paddingBlock={10}
      >
        <RotationPosts
          posts={data}
          setOpenWindow={setOpenWindow}
          setRotationId={setRotationId}
        />
        {openWindow && (
          <NewWindow
            features={{ width: 2000, height: 100 }}
            url={`/simplified/${rotationId}`}
            onOpen={() => setOpenWindow(false)}
            name="simplified rotation bar"
          />
        )}
      </Box>
    </Flex>
  );
}

export default App;
