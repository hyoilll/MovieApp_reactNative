import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// hideAsyncが呼び出されるまで、ネイティブのスプラッシュスクリーン(app.jsonで設定)を表示したままにします。
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync(Ionicons.font);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // ネイティブのスプラッシュスクリーンをすぐに隠します。スプラッシュ画面を非表示にすると、アプリにコンテンツを表示する準備ができていることを確認してください。
      await SplashScreen.hideAsync();
      // localに存在するイメージをprefetchする。
      // await Asset.loadAsync(require('./assets/snack-icon.png'));
      // serverに存在するイメージをprefetchする。
      await Image.prefetch(
        "https://assets.nflxext.com/en_us/pages/wiplayer/logo_v3.svg"
      );
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Text>SplashScreen Demo! 👋</Text>
      {/* <Entypo name="rocket" size={30} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
