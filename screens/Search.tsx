import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

type Props = NativeStackScreenProps<any, "Search">;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Search: FC<Props> = () => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default Search;
