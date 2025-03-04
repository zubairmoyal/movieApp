import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import {
  fetchMovies,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming
} from "../Services/Api";

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    getNowPlaying().then((data) => {
      setNowPlaying(data || []);
    });
    getPopular().then((data) => {
      console.log("🔥 Popular Movies:", data);
      setPopular(data || []);
    });
    getTopRated().then((data) => {
      console.log("🏆 Top Rated Movies:", data);
      setTopRated(data || []);
    });

    getUpcoming().then((data) => {
      console.log("⏳ Upcoming Movies:", data);
      setUpcoming(data || []);
    });
  }, []);

  const renderMovieList = (title, movies) => {
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          data={movies}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => {
            // console.log("Movie Item:",item);

            return (
              <View style={styles.movieContainer}>
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                  }}
                  style={styles.image}
                />
                <Text style={styles.movieTitle}>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View style={{
      marginVertical:12,
      marginHorizontal:12
    }}>
      {renderMovieList("Now Playing", nowPlaying)}
      {renderMovieList("Popular", popular)}
      {renderMovieList("Top Rated", topRated)}
      {renderMovieList("Upcoming", upcoming)}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: "bold", marginVertical: 10 , color:'green'},
  movieContainer: { marginRight: 10 },
  image: { width: 100, height: 150, borderRadius: 8 },
  movieTitle: { width: 100, textAlign: "center", fontSize: 12,fontWeight:'600',marginTop:10 }
});
