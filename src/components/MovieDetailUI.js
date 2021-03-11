import React from 'react';
import {Paragraph, Surface, Text, useTheme} from 'react-native-paper';
import ProgressCircle from 'react-native-progress-circle';
import {Rating} from 'react-native-ratings';
import getRating from '../utils/rating/getRating';
import MovieImage from './MovieImage';
import {StyleSheet, View, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 18,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionContainer: {
    flex: 0.5,
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  imgContainer: {
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
  },
  description: {
    fontSize: 15,
  },
});

export default ({movieInfo}) => {
  const {colors} = useTheme();

  return (
    movieInfo && (
      <Surface style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <View style={{...styles.imgContainer, ...styles.sectionContainer}}>
              <MovieImage height={350} img={movieInfo.Poster} />
            </View>
            <View style={{...styles.dataContainer, ...styles.sectionContainer}}>
              <Text style={styles.title}>{movieInfo.Title}</Text>
              <Rating
                type="custom"
                style={{paddingVertical: 10}}
                startingValue={getRating(movieInfo.imdbRating)}
                readonly={true}
                ratingBackgroundColor={colors.placeholder}
                tintColor={colors.background}
                imageSize={28}
              />
              <ProgressCircle
                percent={movieInfo.imdbRating * 10}
                radius={28}
                borderWidth={4}
                color={colors.accent}
                shadowColor={colors.placeholder}
                bgColor={colors.background}>
                <Text style={{fontSize: 18}}>{`${
                  movieInfo.imdbRating * 10
                }%`}</Text>
              </ProgressCircle>
              <Text style={styles.description}>
                {'Actors: ' + movieInfo.Actors}
              </Text>
              <Text style={styles.description}>
                {'Genre: ' + movieInfo.Genre}
              </Text>
              <Text style={styles.description}>
                {'Country: ' + movieInfo.Country}
              </Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Paragraph style={styles.description}>{movieInfo.Plot}</Paragraph>
          </View>
        </ScrollView>
      </Surface>
    )
  );
};
