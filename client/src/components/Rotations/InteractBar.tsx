import { useState } from "react";
import { HStack, Text } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { InteractBarComponent } from "./types";
import InteractIcon from "./InteractIcon";

const InteractBar: InteractBarComponent = ({ likes, viewedBy, saved }) => {
  const size = 18;
  const color = "#303030";

  const [numOfLikes, setNumOfLikes] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [numOfSaved, setNumOfSaved] = useState(saved);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (liked) {
      setNumOfLikes((prev) => (prev -= 1));
    } else {
      setNumOfLikes((prev) => (prev += 1));
    }
  };

  const handleSave = () => {
    setIsSaved((prev) => !prev);
    if (isSaved) {
      setNumOfSaved((prev) => (prev -= 1));
    } else {
      setNumOfSaved((prev) => (prev += 1));
    }
  };

  return (
    <HStack
      width={"100%"}
      position={"absolute"}
      justifyContent={"end"}
      color={color}
      bottom={3}
      right={3}
      gap={3}
      userSelect={"none"}
    >
      <InteractIcon
        unclicked={<AiOutlineHeart size={size} />}
        clicked={<AiFillHeart size={size} />}
        interactableNumber={numOfLikes}
        activated={liked}
        method={handleLike}
        aria={"like button"}
      />
      <InteractIcon
        unclicked={<BsBookmark size={size} />}
        clicked={<BsFillBookmarkFill size={size} />}
        interactableNumber={numOfSaved}
        activated={isSaved}
        method={handleSave}
        aria={"save button"}
      />
      <HStack>
        <AiOutlineEye size={size} />
        <Text fontSize={"2xs"} userSelect={"none"}>
          {viewedBy}
        </Text>
      </HStack>
    </HStack>
  );
};

export default InteractBar;
