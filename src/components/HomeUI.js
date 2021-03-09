import React from 'react';
import {
  Button,
  Paragraph,
  Searchbar,
  Surface,
  Text,
  TextInput,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 100,
    paddingBottom: 100,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.5,
    margin: 7,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  paragraph: {
    fontSize: 15,
    width: '90%',
    textAlign: 'center',
    paddingBottom: 30,
  },
  textInputContainer: {width: '100%', paddingBottom: 30},
  textInput: {width: '100%'},
});

export default () => {
  const [movieTitle, setMovieTitle] = React.useState('');
  const navigation = useNavigation();
  const navigateToMovieSearchScreen = () => {
    navigation.navigate('SearchScreen', {movieTitle});
  };
  return (
    <Surface style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name="movie-open" size={30} color={'white'} />
        <Text style={styles.title}>Movie Finder</Text>
      </View>
      <Paragraph style={styles.paragraph}>
        Busca tus peliculas favoritas de una manera rapida y eficiente
      </Paragraph>
      <View style={styles.textInputContainer}>
        <TextInput
          label="Buscar peliculas..."
          variant="outlined"
          style={styles.textInput}
          value={movieTitle}
          onChangeText={(text) => setMovieTitle(text)}
        />
      </View>
      <Button
        style={{width: '100%'}}
        mode="contained"
        onPress={navigateToMovieSearchScreen}>
        Buscar
      </Button>
    </Surface>
  );
};
