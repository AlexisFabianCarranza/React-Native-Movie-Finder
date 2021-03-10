import React from 'react';
import {Searchbar, Surface, Text, TouchableRipple} from 'react-native-paper';
import {FlatList, StyleSheet, View} from 'react-native';
import MovieCard from './MovieCard';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    flex: 0.5,
    margin: 7,
  },
  searchContainer: {
    paddingBottom: 10,
    paddingTop: 15,
  },
});

export default ({
  movies,
  movieTitle,
  handleChangeMovieTitle,
  moviesSearchError,
  movieSearchErrorMessage,
  openMovieDetail,
}) => {
  const renderMovies = ({item}) => (
    <TouchableRipple
      onPress={() => openMovieDetail(item.imdbID)}
      style={styles.card}>
      <MovieCard img={item.Poster} year={item.Year} title={item.Title} />
    </TouchableRipple>
  );
  return (
    <Surface style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          value={movieTitle}
          onChangeText={handleChangeMovieTitle}
        />
      </View>

      {moviesSearchError ? (
        <Text>{movieSearchErrorMessage}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovies}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 100}}
          keyExtractor={(item) => item.imdbID}
        />
      )}
    </Surface>
  );
};
