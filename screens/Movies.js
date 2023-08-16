import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// navigate関数はアプリ内の別の画面に移動したいときに使用する関数。
// 同じnavigation内の場合には移動したいscreenの名前だけ記載すればOK
// →　navigation.navigate("Two")
// 同じnavigation内でない場合には移動したいnavigationの名前とscreenの名前を記載する必要がある。
// →　navigation.navigate("Stacks", { screen: "One" })
// https://reactnavigation.org/docs/navigation-prop

const Movies = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to One"
        onPress={() => navigation.navigate("Stacks", { screen: "One" })}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Movies;
