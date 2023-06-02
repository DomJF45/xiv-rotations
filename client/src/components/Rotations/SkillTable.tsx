import { Table, TableContainer, Tbody, Tr, Td } from "@chakra-ui/react";
import { SkillTableComponent } from "./types";

const SkillTable: SkillTableComponent = ({ skill }) => {
  return (
    <TableContainer>
      <Table variant={"striped"} colorScheme="yellow">
        <Tbody>
          <Tr>
            <Td>Level</Td>
            <Td>{skill?.level}</Td>
          </Tr>
          <Tr>
            <Td>Cast</Td>
            <Td>{skill?.cast_time}</Td>
          </Tr>
          <Tr>
            <Td>Recast</Td>
            <Td>{skill?.recast_time + " seconds"}</Td>
          </Tr>
          <Tr>
            <Td>Cost</Td>
            <Td>{skill?.cost + " TP"}</Td>
          </Tr>
          <Tr>
            <Td>Range</Td>
            <Td>{skill?.cast_range + " yalms"}</Td>
          </Tr>
          <Tr>
            <Td>Radius</Td>
            <Td>{skill?.radius}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SkillTable;
