import { SimpleGrid } from "@chakra-ui/react";
import { iPost } from "../../utils/types";
import { RotationPostsComponent } from "./types";
import RotationPost from "./RotationPost";

const RotationPosts: RotationPostsComponent = ({
  posts,
  setOpenWindow,
  setRotationId,
}) => {
  return (
    <SimpleGrid columns={[1, 2]} gap={5} width={"100%"}>
      {posts.map((post: iPost) => (
        <RotationPost
          rotationPost={post}
          setOpenWindow={setOpenWindow}
          setRotationId={setRotationId}
        />
      ))}
    </SimpleGrid>
  );
};

export default RotationPosts;
