import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const PalettePreview = ({ handlePress, palette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        horizontal={true}
        data={palette.colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={[styles.colorBox, { backgroundColor: item.hexCode }]} />
        )}
        keyExtractor={(item) => item.colorName}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  colorBox: {
    height: 30,
    width: 30,
    margin: 2.5,
  },
});

export default PalettePreview;
