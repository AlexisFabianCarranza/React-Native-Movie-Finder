import React from 'react';
import {Button, Surface, Text, TextInput} from 'react-native-paper';
import {View, FlatList, StyleSheet} from 'react-native';
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
});

export default ({
  movies,
  movieTitle,
  handleChangeMovieTitle,
  moviesSearchError,
  movieSearchErrorMessage,
}) => {
  const renderMovies = ({item}) => (
    <View style={styles.card}>
      <MovieCard img={item.Poster} year={item.Year} title={item.Title} />
    </View>
  );

  return (
    <Surface style={styles.container}>
      <TextInput
        label="Buscar peliculas..."
        variant="outlined"
        value={movieTitle}
        onChangeText={handleChangeMovieTitle}
        style={styles.textInput}
      />
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
