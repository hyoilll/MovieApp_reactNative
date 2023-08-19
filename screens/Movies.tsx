import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import { getImgPath } from "../utils/TMDBFunctions";
import { BlurView } from "expo-blur";
import { useTheme } from "styled-components";

type Props = NativeStackScreenProps<any, "Movies">;

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDg3MGQ5OWM1OTVhZTViNzg0ODExYjVmM2ZmZDE2NCIsInN1YiI6IjVmOWQxZjFlOWI2ZTQ3MDAzNjlmYjE3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTfw1FzZ65otUY7mym0_sP7NEpzwwFs41UTeqeM5kHs";

const Container = styled.View`
  flex: 1;
`;
const { width } = Dimensions.get("window");
const SwiperItem = styled(View)`
  width: ${width}px;
  justify-content: center;
  flex: 1;
`;
const BackDropImg = styled.Image`
  height: 100%;
  width: 100%;
`;

const PosterImg = styled.Image`
  height: 150px;
  width: 100px;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Description = styled.View`
  margin-left: 20px;
  width: 200px;
`;

const MovieTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
`;

const Overview = styled.Text`
  margin-top: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.6);
`;

// Overviewを指定することで、Overviewが持っている状態をそのまま相続する。
// overrideしたい状態がある場合には、変更するだけで良い。
const VoteAverage = styled(Overview)`
  font-size: 12px;
`;

const Movies: FC<Props> = ({ navigation }) => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    getNowPlaying();
  }, []);

  const getNowPlaying = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=ja&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieList(response["results"]);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      {isLoading ? (
        <Loader>
          <ActivityIndicator size="large" />
        </Loader>
      ) : (
        <View style={{ flex: 0.4 }}>
          <SwiperFlatList ///
            autoplay
            autoplayDelay={3}
            autoplayLoop
            showPagination
            paginationStyle={{ display: "none" }}
          >
            {movieList.map((movie) => {
              const movieId = movie.id;
              const backDropPath = getImgPath(movie.backdrop_path);
              const posterPath = getImgPath(movie.poster_path);
              const movieTitle = movie.title;
              const overview = movie.overview;
              const voteAverage = movie.vote_average;
              return (
                <SwiperItem key={movieId}>
                  <BackDropImg
                    resizeMode="stretch"
                    source={{
                      uri: backDropPath,
                    }}
                    style={StyleSheet.absoluteFill}
                  />
                  <BlurView
                    intensity={20}
                    style={{
                      flex: 1,
                      padding: 20,
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                    tint={theme.blurType}
                  >
                    <PosterImg
                      resizeMode="stretch"
                      source={{
                        uri: posterPath,
                      }}
                    />
                    <Description>
                      <MovieTitle>{movieTitle}</MovieTitle>
                      <VoteAverage>⭐️{voteAverage} / 10</VoteAverage>
                      <Overview numberOfLines={4}>{overview}</Overview>
                    </Description>
                  </BlurView>
                </SwiperItem>
              );
            })}
          </SwiperFlatList>
        </View>
      )}
    </Container>
  );
};

export default Movies;
