import { Box, Button, styled, TextField, Typography } from "@mui/material";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import WifiCalling3OutlinedIcon from "@mui/icons-material/WifiCalling3Outlined";
import breakpoints from "@/themes/breakpoints";

export const ContactMainBox = styled(Box)`
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;

  ${breakpoints.xs} {
    flex-direction: column;
  }
  ${breakpoints.md} {
    flex-direction: column;
  }
  ${breakpoints.lg} {
    flex-direction: row;
  }
  ${breakpoints.xl} {
    flex-direction: row;
  }
`;

export const SubPanelBox = styled(Box)`
  flex: 1;
  min-width: 300px;
`;
export const HeadingStyled = styled(Typography)`
  font-size: 45px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 35px;
  opacity: 0;
  transform: translateX(0px);
  transition: opacity 0.5s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }

  ${breakpoints.xs} {
    font-size: 35px;
  }
  ${breakpoints.md} {
    font-size: 35px;
  }
  ${breakpoints.lg} {
    font-size: 40px;
  }
  ${breakpoints.xl} {
    font-size: 45px;
  }
`;
export const Parastyled = styled(Typography)`
font-size: 18px
font-weight: 400;
color: #7f7f8c;
margin-bottom: 35px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

`;

export const HeadingSpan = styled("span")`
  color: rgb(55, 81, 126);
`;
export const MessageIcon = styled(TextsmsOutlinedIcon)`
  height: 72px;
  width: 72px;
  ${breakpoints.xs} {
    height: 52px;
    width: 52px;
  }

  ${breakpoints.md} {
    height: 52px;
    width: 52px;
  }
  ${breakpoints.lg} {
    height: 72px;
    width: 72px;
  }
  ${breakpoints.xl} {
    height: 72px;
    width: 72px;
  }
`;
export const ContactPara = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid #d9d9d9;
  padding: 10px 10px;
  line-height: -2px;
  margin-bottom: 20px;
  ${breakpoints.xs} {
    font-size: 18px;
  }
  ${breakpoints.md} {
    font-size: 18px;
  }
  ${breakpoints.lg} {
    font-size: 24px;
  }
  ${breakpoints.xl} {
    font-size: 24px;
  }
`;
export const CallerIcon = styled(WifiCalling3OutlinedIcon)`
  height: 72px;
  width: 72px;
  ${breakpoints.xs} {
    height: 52px;
    width: 52px;
  }

  ${breakpoints.md} {
    height: 52px;
    width: 52px;
  }
  ${breakpoints.lg} {
    height: 62px;
    width: 62px;
  }
  ${breakpoints.xl} {
    height: 62px;
    width: 62px;
  }
`;

export const LocationHeading = styled(Typography)`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
  ${breakpoints.xs} {
    font-size: 18px;
  }
  ${breakpoints.md} {
    font-size: 18px;
  }
  ${breakpoints.lg} {
    font-size: 24px;
  }
  ${breakpoints.xl} {
    font-size: 24px;
  }
`;
export const LocationPara = styled(Typography)`
  color: #7f7f8c;
  font-weight: 400;
  font-size: 18px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs} {
    font-size: 16px;
  }
  ${breakpoints.md} {
    font-size: 16px;
  }
  ${breakpoints.lg} {
    font-size: 18px;
  }
  ${breakpoints.xl} {
    font-size: 18px;
  }
`;

export const SecondSubPanel = styled(Box)`
  flex: 1;
  min-width: 300px;
  background-color: #f8f8f9;
  padding: 50px;
  border-radius: 10px;
  margin-top: 300px;
  ${breakpoints.xs} {
    margin-top: 10px;
    padding: 20px;
  }
  ${breakpoints.xs} {
    margin-top: 10px;
    padding: 20px;
  }
  ${breakpoints.md} {
    margin-top: 10px;
    padding: 20px;
  }
  ${breakpoints.lg} {
    margin-top: 0px;
    padding: 50px;
  }
  ${breakpoints.xl} {
    margin-top: 0px;
    padding: 40px;
  }
`;

export const ContactTitle = styled(Typography)`
  font-weight: 500;
  font-size: 38px;
  text-transform: capitalize;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateX(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
  ${breakpoints.xs} {
    font-size: 30px;
  }
  ${breakpoints.md} {
    font-size: 30px;
  }
  ${breakpoints.lg} {
    font-size: 38px;
  }
  ${breakpoints.xl} {
    font-size: 38px;
  }
`;

export const EmailPara = styled(Typography)`
  color: #7f7f8c;
  font-size: 16px;
  margin-bottom: 30px;
  font-weight: 400;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContactInfoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  opacity: 0;
  transform: translateX(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ContactFormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputRow = styled(Box)`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }
  ${breakpoints.xs}{
     flex-direction: column;
  }
  ${breakpoints.md}{
    flex-direction: row;
 }
`;

export const TextAreaStyle = styled(TextField)`
  opacity: 0;
  transform: translateX(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ButtonStyled = styled(Button)`
  background-color: rgb(55, 81, 126);
  color: white;
  width: 30%;
  padding: 20px;
  font-size: 16px;
  text-transform: capitalize;
  opacity: 0;
  transform: translateY(0px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  ${breakpoints.xs} {
    font-size: 16px;
    padding: 10px;
    width: 50%;
  }
  ${breakpoints.md} {
    font-size: 16px;
    padding: 10px;
    width: 30%;
  }
  ${breakpoints.lg} {
    width: 40%;
    padding: 20px;
    font-size: 16px;
  }
  ${breakpoints.xl} {
    width: 30%;
    padding: 20px;
    font-size: 16px;
  }
`;
