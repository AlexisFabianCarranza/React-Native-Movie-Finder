import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Chip, Text, useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  img: {
    width: '100%',
    height: 350,
    borderWidth: 1,
    borderRadius: 10,
  },
  year: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  yearText: {
    color: 'white',
  },
});

export default ({img, year, title}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{...styles.img, borderColor: colors.primary}}
          source={{
            uri: img,
          }}
          resizeMode={'cover'}
        />
        <Chip
          mode="outlined"
          style={{...styles.year, backgroundColor: colors.primary}}
          textStyle={styles.yearText}>
          {year}
        </Chip>
      </View>
      <Text>{title}</Text>
    </View>
  );
};
