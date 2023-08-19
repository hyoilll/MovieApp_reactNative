import React, { FC } from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Swiper from "react-native-web-swiper";
import { Dimensions, Text, View } from "react-native";

type Props = NativeStackScreenProps<any, "Movies">;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const SwiperItem = styled(View)`
  flex: 1;
`;

const Movies: FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <Swiper
        loop
        timeout={2}
        controlsProps={{
          prevPos: false,
          nextPos: false,
        }}
        containerStyle={{ width: "100%", flex: 0.3 }}
      >
        <SwiperItem style={{ backgroundColor: "red" }}></SwiperItem>
        <SwiperItem style={{ backgroundColor: "blue" }}></SwiperItem>
        <SwiperItem style={{ backgroundColor: "red" }}></SwiperItem>
        <SwiperItem style={{ backgroundColor: "blue" }}></SwiperItem>
      </Swiper>
    </Container>
  );
};

export default Movies;
