import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import Tabs from "./navigation/Tabs";

// hideAsyncが呼び出されるまで、ネイティブのスプラッシュスクリーン(app.jsonで設定)を表示したままにします。
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
  const loadImages = (imgs) =>
    imgs.map((img) => {
      if (typeof imgs === "string") {
        return Image.prefetch(img);
      } else {
        return Asset.loadAsync(img);
      }
    });

  useEffect(() => {
    const prepare = async () => {
      try {
        // await Font.loadAsync(Ionicons.font);
        const fonts = loadFonts([Ionicons.font]);
        // localに存在するイメージをprefetchする。
        // await Asset.loadAsync(require('./assets/snack-icon.png'));
        // serverに存在するイメージをprefetchする。
        // await Image.prefetch(
        //   "https://assets.nflxext.com/en_us/pages/wiplayer/logo_v3.svg"
        // );
        const imgs = loadImages([
          "https://d33wubrfki0l68.cloudfront.net/4245a6b338cc1b008aa1265c213c1e75be207801/2eaf7/img/oss_logo.svg",
        ]);
        await Promise.all([...fonts, ...imgs]);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (isReady) {
  //     // ネイティブのスプラッシュスクリーンをすぐに隠します。スプラッシュ画面を非表示にすると、アプリにコンテンツを表示する準備ができていることを確認してください。
  //     await SplashScreen.hideAsync();
  //   }
  // }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    // <View style={styles.container} onLayout={onLayoutRootView}>
    //   <Text>SplashScreen Demo! 👋</Text>
    // </View>
    <Tabs />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  content: {
    flex: 1,
    backgroundColor: "blue",
  },
});
