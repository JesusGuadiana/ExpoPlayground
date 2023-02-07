import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.box}>
          <Text style={{ fontWeight: 'bold' }}>
            Here are some boxes of different colors
          </Text>
        </View>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.text}>Cyan #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.text}>Blue #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.text}>Magenta #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.text}>Orange #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
