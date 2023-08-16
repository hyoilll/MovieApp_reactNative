import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

type Props = NativeStackScreenProps<any, "Tv">;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Tv: FC<Props> = () => {
  return (
    <Container>
      <Text>Tv</Text>
    </Container>
  );
};

export default Tv;
