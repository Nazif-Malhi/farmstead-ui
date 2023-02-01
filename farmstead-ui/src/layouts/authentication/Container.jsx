import styled from "styled-components";
import { labortarty_test, protectedbackground } from "../../assets";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.signup ? "170vh" : "100vh")};
  align-items: center;
  text-align: center;
  justify-content: center;
  background-image: url(${labortarty_test});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
