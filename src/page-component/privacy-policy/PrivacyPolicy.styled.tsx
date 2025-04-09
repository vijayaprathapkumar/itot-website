import breakpoints from "@/themes/breakpoints";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerBox = styled(Box)`
  padding: 30px 70px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${breakpoints.xs} {
    padding: 30px 10px;
    height: 100vh;
  }
  ${breakpoints.sm} {
    padding: 30px 20px;
    height: 50vh;
  }
  ${breakpoints.md} {
    padding: 30px 50px;
    height: 50vh;
  }
  ${breakpoints.lg} {
    padding: 30px 70px;
  }
`;

export const PolicyHeadText = styled(Typography)`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`;

export const PolicyDescriptionText = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
  color: rgba(0, 0, 0, 0.6);
`;

export const PolicyUpdatedText = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
  color: rgba(0, 0, 0, 0.6);
`;
