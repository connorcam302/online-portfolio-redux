import { Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box.js"
import HomeAnimation from "../HomeAnimation.js";

export const Content = () => (
  <Box>
  <Spacer y={1} />
    <HomeAnimation className='animationContainer'/>
  </Box>
);
