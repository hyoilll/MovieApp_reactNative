import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Search = () => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default Search;
