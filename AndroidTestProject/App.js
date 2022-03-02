import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import RaygunClient from 'raygun4reactnative';

const options: RaygunClientOptions = {
  apiKey: '<api-key>',
  enableCrashReporting: true,
};

RaygunClient.init(options);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Example React Native App</Text>
      <Button
        title="JS error!"
        onPress={() => {
          RaygunClient.sendError(new Error('error from my react native app!'));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
