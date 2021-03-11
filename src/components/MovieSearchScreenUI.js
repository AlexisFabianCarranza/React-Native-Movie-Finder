import React from 'react';
import {
  ActivityIndicator,
  Searchbar,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
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
  error: {
    fontSize: 20,
  },
  loading: {
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({
  movies,
  movieTitle,
  handleChangeMovieTitle,
  moviesSearchError,
  movieSearchErrorMessage,
  openMovieDetail,
  isLoading,
}) => {
  const {colors} = useTheme();
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
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} color={colors.accent} size={40} />
        </View>
      ) : moviesSearchError ? (
        <Text style={styles.error}>{movieSearchErrorMessage}</Text>
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
