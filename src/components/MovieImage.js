import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const styles = StyleSheet.create({
  img: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
  },
});
export default ({img, height}) => {
  const {colors} = useTheme();
  return (
    <Image
      style={{...styles.img, borderColor: colors.primary, height}}
      source={{
        uri: img,
      }}
      resizeMode={'cover'}
    />
  );
};
