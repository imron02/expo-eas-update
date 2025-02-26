import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import * as Updates from "expo-updates";
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      console.error(error);
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app 1!</Text>
      <Text>{Constants.expoConfig.name}</Text>
      <Image source={require('./assets/favicon.png')} />

      <Button title="Fetch update" onPress={onFetchUpdateAsync} />
      <StatusBar style="auto" />
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
