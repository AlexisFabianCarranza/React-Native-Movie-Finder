import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  img: {
    width: '100%',
    height: 350,
  },
  year: {
    backgroundColor: '#007AFF',
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  yearText: {
    color: 'white',
  },
});

export default ({img, year, title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        />
        <Chip mode="outlined" style={styles.year} textStyle={styles.yearText}>
          {year}
        </Chip>
      </View>
      <Text>{title}</Text>
    </View>
  );
};
