import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Tv = () => {
  return (
    <Container>
      <Text>Tv</Text>
    </Container>
  );
};

export default Tv;
