import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={{ backgroundColor : "white" ,padding  : 15}}>
     <Home/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 40,
    
  },
});
