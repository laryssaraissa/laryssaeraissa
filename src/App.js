import { StatusBar } from "expo-status-bar";
import react from 'react';
import { SafeAreaView,StyleSheet } from "react-native";

import LoginScreen from './src/LoginScreen';

const App = () => {
  return(
    <SafeAreaView>
      <LoginScreen/>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1
  },
});