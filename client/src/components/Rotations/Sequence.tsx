import { HStack, Image } from "@chakra-ui/react";
import { SequenceComponent, SequenceItemComponent } from "./types";

export const Sequence: SequenceComponent = ({ children }) => {
  return (
    <>
      <HStack width={"100%"} flexWrap={"wrap"}>
        {children}
      </HStack>
    </>
  );
};

export const SequenceItem: SequenceItemComponent = ({
  seqItem,
  handleRemove,
}) => {
  return (
    <Image
      src={`https://ffxivrotations.com/icon/${seqItem.skill.icon}.png`}
      onClick={() => handleRemove(seqItem.id)}
      cursor={"pointer"}
    />
  );
};
