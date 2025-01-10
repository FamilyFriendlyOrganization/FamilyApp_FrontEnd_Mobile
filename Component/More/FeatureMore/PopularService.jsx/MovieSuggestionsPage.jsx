import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";

const MovieSuggestionsPage = () => {
  const movies = [
    {
      id: "1",
      title: "Cô Gái Từ Quá Khứ",
      image: require("./assets/movie1.png"),
    },
    {
      id: "2",
      title: "Đất Phương Nam",
      image: require("./assets/movie2.png"),
    },
    {
      id: "3",
      title: "Trường Nguyệt Tẫn Minh",
      image: require("./assets/movie3.png"),
    },
    {
      id: "4",
      title: "Once Upon a Time in Hollywood",
      image: require("./assets/movie4.png"),
    },
    {
      id: "5",
      title: "Avatar: The Way of Water",
      image: require("./assets/movie1.png"),
    },
  ];

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieCard}>
      <Image source={item.image} style={styles.movieImage} />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Gợi ý phim" />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Top 5 phim hôm nay</Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          renderItem={renderMovieItem}
          contentContainerStyle={styles.listContainer}
        />
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  listContainer: {
    paddingBottom: 190,
  },
  movieCard: {
    marginBottom: 15,
  },
  movieImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
});

export default MovieSuggestionsPage;
