import React, { FC } from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
// navigate関数はアプリ内の別の画面に移動したいときに使用する関数。
// 同じnavigation内の場合には移動したいscreenの名前だけ記載すればOK
// →　navigation.navigate("Two")
// 同じnavigation内でない場合には移動したいnavigationの名前とscreenの名前を記載する必要がある。
// →　navigation.navigate("Stacks", { screen: "One" })
// https://reactnavigation.org/docs/navigation-prop

type Props = NativeStackScreenProps<any, "Movies">;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NavigatorBtn = styled.Button``;

const Movies: FC<Props> = ({ navigation }) => {
  return (
    <Container>
      <NavigatorBtn
        title="Go to One"
        onPress={() => navigation.navigate("Stacks", { screen: "One" })}
      ></NavigatorBtn>
    </Container>
  );
};

export default Movies;